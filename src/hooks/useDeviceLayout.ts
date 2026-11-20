import { useState, useEffect, useRef } from 'react';

export interface DeviceLayoutState {
  isMobileDevice: boolean;
  isTabletDevice: boolean;
  isLaptopOrDesktop: boolean;
  viewportWidth: number;
  viewportHeight: number;
  isTouchScreen: boolean;
  isDesktopViewDetected: boolean;
  hasTransitionedToDesktop: boolean;
}

const STORAGE_KEY_DESKTOP_PROMPT_STATE = 'mk_mobile_desktop_prompt_state';
const SESSION_KEY_INITIAL_WIDTH = 'mk_session_initial_viewport_w';

export function useDeviceLayout() {
  const [layoutState, setLayoutState] = useState<DeviceLayoutState>(() => {
    if (typeof window === 'undefined') {
      return {
        isMobileDevice: false,
        isTabletDevice: false,
        isLaptopOrDesktop: true,
        viewportWidth: 1200,
        viewportHeight: 800,
        isTouchScreen: false,
        isDesktopViewDetected: false,
        hasTransitionedToDesktop: false,
      };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const userAgent = navigator.userAgent || '';
    const isMobileUA = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTabletUA = /iPad|Tablet|PlayBook|Silk/i.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    // Initial check: mobile if narrow or mobile UA with touch
    const isMobile = (width < 768 && isTouch) || (isMobileUA && width < 900);
    const isTablet = (!isMobile && isTouch && (isTabletUA || (width >= 768 && width <= 1024)));
    const isLaptopOrDesktop = !isMobile && !isTablet && width >= 1024;

    return {
      isMobileDevice: isMobile,
      isTabletDevice: isTablet,
      isLaptopOrDesktop,
      viewportWidth: width,
      viewportHeight: height,
      isTouchScreen: isTouch,
      isDesktopViewDetected: isTouch && width >= 1024,
      hasTransitionedToDesktop: false,
    };
  });

  const prevWidthRef = useRef<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Track the initial session viewport to identify transitions
    let sessionInitialWidth = window.innerWidth;
    try {
      const stored = sessionStorage.getItem(SESSION_KEY_INITIAL_WIDTH);
      if (stored) {
        sessionInitialWidth = parseInt(stored, 10);
      } else {
        sessionStorage.setItem(SESSION_KEY_INITIAL_WIDTH, String(window.innerWidth));
      }
    } catch {
      // sessionStorage unavailable
    }

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const userAgent = navigator.userAgent || '';
      const isMobileUA = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isTabletUA = /iPad|Tablet|PlayBook|Silk/i.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

      const isMobile = (width < 768 && isTouch) || (isMobileUA && width < 900);
      const isTablet = (!isMobile && isTouch && (isTabletUA || (width >= 768 && width <= 1024)));
      const isLaptop = !isMobile && !isTablet && width >= 1024;

      // Detection of desktop site: A touch device that now has >= 980px viewport
      // and either widened significantly from initial mobile width or switched view modes
      const isDesktopView = isTouch && width >= 980;

      // A genuine transition occurs if previous width was mobile (< 768) or initial was mobile,
      // and now it expanded to desktop (>= 980) within the active browsing session
      const hadMobileWidth = prevWidthRef.current < 768 || sessionInitialWidth < 768;
      const genuineTransition = isTouch && hadMobileWidth && width >= 980;

      prevWidthRef.current = width;

      setLayoutState((prev) => ({
        ...prev,
        isMobileDevice: isMobile,
        isTabletDevice: isTablet,
        isLaptopOrDesktop: isLaptop,
        viewportWidth: width,
        viewportHeight: height,
        isTouchScreen: isTouch,
        isDesktopViewDetected: isDesktopView,
        hasTransitionedToDesktop: genuineTransition,
      }));
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return layoutState;
}

export function getDesktopRecommendationDismissed(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const perm = localStorage.getItem(STORAGE_KEY_DESKTOP_PROMPT_STATE);
    if (perm === 'dont_show_again') return true;
    const session = sessionStorage.getItem(STORAGE_KEY_DESKTOP_PROMPT_STATE);
    if (session === 'dismissed') return true;
  } catch {
    // storage not accessible
  }
  return false;
}

export function setDesktopRecommendationDismissed(type: 'session' | 'permanent') {
  if (typeof window === 'undefined') return;
  try {
    if (type === 'permanent') {
      localStorage.setItem(STORAGE_KEY_DESKTOP_PROMPT_STATE, 'dont_show_again');
    } else {
      sessionStorage.setItem(STORAGE_KEY_DESKTOP_PROMPT_STATE, 'dismissed');
    }
  } catch {
    // storage not accessible
  }
}
