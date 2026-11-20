// Audio synthesis & haptic feedback controller for Mode Switching
const STORAGE_KEY_SOUND_ENABLED = 'mk_mode_switch_sound_enabled';

class HapticAudioController {
  private audioCtx: AudioContext | null = null;
  private soundEnabled: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY_SOUND_ENABLED);
        // Default to false (Sound OFF) as required
        this.soundEnabled = stored === 'true';
      } catch {
        this.soundEnabled = false;
      }
    }
  }

  public isSoundEnabled(): boolean {
    return this.soundEnabled;
  }

  public setSoundEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
    try {
      localStorage.setItem(STORAGE_KEY_SOUND_ENABLED, String(enabled));
    } catch {
      // ignore
    }
  }

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return null;
      if (!this.audioCtx) {
        this.audioCtx = new AudioContextClass();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      return this.audioCtx;
    } catch {
      return null;
    }
  }

  // Trigger very light haptic feedback on touch devices
  public triggerTapHaptic() {
    if (typeof window !== 'undefined' && 'navigator' in window && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate(10); // Ultra-light 10ms tap
      } catch {
        // Ignored if device doesn't support or disallows
      }
    }
  }

  // Trigger subtle confirmation haptic
  public triggerConfirmHaptic() {
    if (typeof window !== 'undefined' && 'navigator' in window && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate(14); // Subtle 14ms settling pulse
      } catch {
        // Ignored
      }
    }
  }

  // Synthesized Classic -> Modern Activation Sound (~340ms)
  // Refined electronic sweep and gentle shimmer tone
  public playToModernSound() {
    if (!this.soundEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;

      // Primary oscillator: soft sine upward sweep
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(320, now);
      osc1.frequency.exponentialRampToValueAtTime(840, now + 0.22);

      gain1.gain.setValueAtTime(0, now);
      gain1.gain.linearRampToValueAtTime(0.08, now + 0.04);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

      // Secondary harmonic shimmer: high soft chime
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(840, now + 0.12);
      osc2.frequency.exponentialRampToValueAtTime(1180, now + 0.34);

      gain2.gain.setValueAtTime(0, now + 0.12);
      gain2.gain.linearRampToValueAtTime(0.04, now + 0.18);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.36);

      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);

      osc1.start(now);
      osc1.stop(now + 0.35);
      osc2.start(now + 0.12);
      osc2.stop(now + 0.38);
    } catch {
      // Audio playback fails gracefully
    }
  }

  // Synthesized Modern -> Classic Deactivation Sound (~280ms)
  // Gentle descending warm harmonic tone
  public playToClassicSound() {
    if (!this.soundEnabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(740, now);
      osc.frequency.exponentialRampToValueAtTime(360, now + 0.24);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.07, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch {
      // Audio playback fails gracefully
    }
  }
}

export const hapticAudio = new HapticAudioController();
