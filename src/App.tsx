import { useState, useRef, useEffect, useCallback } from 'react';
import { BasicExperience } from './experiences/basic/BasicExperience';
import { CinematicExperience } from './experiences/cinematic/CinematicExperience';
import { CinematicEntry } from './experiences/CinematicEntry';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import {
  useDeviceLayout,
  getDesktopRecommendationDismissed,
  setDesktopRecommendationDismissed,
} from './hooks/useDeviceLayout';
import { MobileDesktopPrompt } from './components/ui/MobileDesktopPrompt';
import { DesktopViewSuccessTick } from './components/ui/DesktopViewSuccessTick';
import { hapticAudio } from './utils/hapticAudio';

const STORAGE_KEY_MODE = 'mk_portfolio_experience_mode';
const STORAGE_KEY_SCROLL_PREFIX = 'mk_portfolio_scroll_';

type ExperienceMode = 'basic' | 'cinematic';

function getInitialMode(): ExperienceMode {
  if (typeof window === 'undefined') return 'basic';

  try {
    // 1. URL search param has highest priority (e.g. ?experience=cinematic or ?experience=basic)
    const params = new URLSearchParams(window.location.search);
    const expParam = params.get('experience');
    if (expParam === 'cinematic' || expParam === 'basic') {
      localStorage.setItem(STORAGE_KEY_MODE, expParam);
      return expParam;
    }

    // 2. Hash check (e.g. #cinematic or #cinematic-about)
    if (window.location.hash.toLowerCase().includes('cinematic')) {
      localStorage.setItem(STORAGE_KEY_MODE, 'cinematic');
      return 'cinematic';
    }

    // 3. Persistent localStorage check
    const saved = localStorage.getItem(STORAGE_KEY_MODE);
    if (saved === 'cinematic' || saved === 'basic') {
      return saved;
    }
  } catch (err) {
    console.warn('localStorage not accessible, defaulting mode:', err);
  }

  return 'basic';
}

export default function App() {
  const [mode, setMode] = useState<ExperienceMode>(getInitialMode);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<'to-cinematic' | 'to-basic'>('to-cinematic');
  const [transitionFadingOut, setTransitionFadingOut] = useState(false);
  const scrollRestoreDone = useRef(false);

  // Intelligent Device & Layout detection
  const { isMobileDevice, isTabletDevice, hasTransitionedToDesktop } = useDeviceLayout();
  const [showPrompt, setShowPrompt] = useState(false);
  const [showSuccessTick, setShowSuccessTick] = useState(false);

  // Evaluate showing mobile recommendation popup after a polite 2.2s delay
  useEffect(() => {
    if (getDesktopRecommendationDismissed()) return;

    // Show only if mobile phone or genuinely constrained tablet
    const shouldRecommend = isMobileDevice || (isTabletDevice && window.innerWidth < 820);
    if (!shouldRecommend) return;

    const timer = setTimeout(() => {
      if (!getDesktopRecommendationDismissed()) {
        setShowPrompt(true);
      }
    }, 2200);

    return () => clearTimeout(timer);
  }, [isMobileDevice, isTabletDevice]);

  // Handle genuine transition into desktop view
  useEffect(() => {
    if (hasTransitionedToDesktop) {
      setShowPrompt(false);
      setShowSuccessTick(true);
      const timer = setTimeout(() => {
        setShowSuccessTick(false);
      }, 2900);
      return () => clearTimeout(timer);
    }
  }, [hasTransitionedToDesktop]);

  const handleDismissPrompt = () => {
    setShowPrompt(false);
    setDesktopRecommendationDismissed('session');
  };

  const handleDontShowAgainPrompt = () => {
    setShowPrompt(false);
    setDesktopRecommendationDismissed('permanent');
  };

  // Sync mode to localStorage and URL query state safely
  const persistMode = useCallback((newMode: ExperienceMode) => {
    try {
      localStorage.setItem(STORAGE_KEY_MODE, newMode);
      // Update URL query param smoothly without triggering full reload
      const url = new URL(window.location.href);
      if (newMode === 'cinematic') {
        url.searchParams.set('experience', 'cinematic');
      } else {
        url.searchParams.delete('experience');
      }
      window.history.replaceState({ experience: newMode }, '', url.toString());
    } catch (e) {
      console.warn('Unable to persist mode to storage or URL:', e);
    }
  }, []);

  // Save scroll position per mode on unload / scroll
  useEffect(() => {
    const saveScroll = () => {
      try {
        sessionStorage.setItem(`${STORAGE_KEY_SCROLL_PREFIX}${mode}`, String(window.scrollY));
      } catch {
        // Ignore quota or private mode issues
      }
    };

    window.addEventListener('beforeunload', saveScroll);
    return () => window.removeEventListener('beforeunload', saveScroll);
  }, [mode]);

  // Restore scroll position after initial mount once per session load
  useEffect(() => {
    if (scrollRestoreDone.current) return;
    scrollRestoreDone.current = true;

    // Check if an existing hash exists (e.g. #projects or #cinematic-skills)
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }

    // Otherwise restore saved vertical scroll offset if any
    try {
      const savedScroll = sessionStorage.getItem(`${STORAGE_KEY_SCROLL_PREFIX}${mode}`);
      if (savedScroll) {
        const y = parseInt(savedScroll, 10);
        if (!isNaN(y) && y > 0) {
          setTimeout(() => {
            window.scrollTo({ top: y, behavior: 'instant' as ScrollBehavior });
          }, 80);
        }
      }
    } catch {
      // Ignore
    }
  }, [mode]);

  // Listen for browser popstate (Back/Forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      const newMode = getInitialMode();
      setMode(newMode);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Image and portrait right-click / drag protection
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.tagName === 'IMG' ||
        target.classList.contains('protected-photo') ||
        target.closest('.protected-photo') ||
        (target as HTMLImageElement).src?.includes('profile.jpg') ||
        (target as HTMLImageElement).src?.includes('avatar.png') ||
        (target as HTMLImageElement).src?.includes('X10.png') ||
        (target as HTMLImageElement).src?.includes('Mano') ||
        (target as HTMLImageElement).src?.includes('mano')
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.tagName === 'IMG' ||
        target.classList.contains('protected-photo') ||
        target.closest('.protected-photo')
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu, { capture: true });
    document.addEventListener('dragstart', handleDragStart, { capture: true });

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      document.removeEventListener('dragstart', handleDragStart, { capture: true });
    };
  }, []);

  // Sync html / body styling according to active experience
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (mode === 'cinematic') {
      root.classList.add('cinematic-active');
      body.classList.add('cinematic-active');
      root.style.backgroundColor = '#080A0F';
      root.style.colorScheme = 'dark';
      body.style.backgroundColor = '#080A0F';
      body.style.colorScheme = 'dark';
      body.style.margin = '0';
      body.style.padding = '0';
    } else {
      root.classList.remove('cinematic-active');
      body.classList.remove('cinematic-active');
      root.style.backgroundColor = '';
      root.style.colorScheme = 'light';
      body.style.backgroundColor = '';
      body.style.colorScheme = 'light';
      body.style.margin = '0';
      body.style.padding = '0';
    }
  }, [mode]);

  const handleEnterCinematic = () => {
    // 1. Initial mode-switch tap haptic
    hapticAudio.triggerTapHaptic();

    // 2. Play transition SFX if enabled by user
    hapticAudio.playToModernSound();

    try {
      sessionStorage.setItem(`${STORAGE_KEY_SCROLL_PREFIX}basic`, String(window.scrollY));
    } catch {
      // Ignore
    }

    setTransitionDirection('to-cinematic');
    setTransitionFadingOut(false);
    setIsTransitioning(true);

    setTimeout(() => {
      setMode('cinematic');
      persistMode('cinematic');
      window.scrollTo(0, 0);

      // 3. Trigger subtle confirmation haptic upon settling into Modern Mode
      hapticAudio.triggerConfirmHaptic();

      setTimeout(() => {
        setTransitionFadingOut(true);

        setTimeout(() => {
          setIsTransitioning(false);
          setTransitionFadingOut(false);
        }, 380);
      }, 150);
    }, 320);
  };

  const handleExitCinematic = () => {
    // 1. Initial mode-switch tap haptic
    hapticAudio.triggerTapHaptic();

    // 2. Play transition SFX if enabled by user
    hapticAudio.playToClassicSound();

    try {
      sessionStorage.setItem(`${STORAGE_KEY_SCROLL_PREFIX}cinematic`, String(window.scrollY));
    } catch {
      // Ignore
    }

    setTransitionDirection('to-basic');
    setTransitionFadingOut(false);
    setIsTransitioning(true);

    setTimeout(() => {
      setMode('basic');
      persistMode('basic');

      let targetScroll = 0;
      try {
        const saved = sessionStorage.getItem(`${STORAGE_KEY_SCROLL_PREFIX}basic`);
        if (saved) targetScroll = parseInt(saved, 10) || 0;
      } catch {
        // Ignore
      }

      setTimeout(() => {
        window.scrollTo({
          top: targetScroll,
          behavior: 'instant' as ScrollBehavior,
        });

        // 3. Trigger subtle confirmation haptic upon settling into Classic Mode
        hapticAudio.triggerConfirmHaptic();

        setTransitionFadingOut(true);

        setTimeout(() => {
          setIsTransitioning(false);
          setTransitionFadingOut(false);
        }, 380);
      }, 50);
    }, 320);
  };

  return (
    <ErrorBoundary fallbackTitle="Portfolio Experience Recovered">
      {/* Luxury Minimalist Transition Veil */}
      {isTransitioning && (
        <CinematicEntry
          direction={transitionDirection}
          fadingOut={transitionFadingOut}
        />
      )}

      {/* Mount only the active experience */}
      {mode === 'basic' ? (
        <BasicExperience onEnterCinematic={handleEnterCinematic} />
      ) : (
        <CinematicExperience onExitCinematic={handleExitCinematic} />
      )}

      {/* Intelligent Mobile Desktop Recommendation Popup */}
      {showPrompt && (
        <MobileDesktopPrompt
          mode={mode}
          onDismiss={handleDismissPrompt}
          onDontShowAgain={handleDontShowAgainPrompt}
        />
      )}

      {/* Google Pay-style Animated Desktop View Success Confirmation */}
      {showSuccessTick && (
        <DesktopViewSuccessTick mode={mode} />
      )}
    </ErrorBoundary>
  );
}
