// Self-contained Web Audio API cinematic blockbuster sound synthesizer
class CinematicAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.enabled = true;
    this.visualizerCallbacks = new Set();
  }

  init() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
  }

  subscribeVisualizer(cb) {
    this.visualizerCallbacks.add(cb);
    return () => this.visualizerCallbacks.delete(cb);
  }

  notifyVisualizer(intensity = 1.0, duration = 300) {
    this.visualizerCallbacks.forEach(cb => cb(intensity, duration));
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // Laser cyber scan sound
  playHover() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(480, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1100, this.audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.045, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.08);
      this.notifyVisualizer(0.4, 80);
    } catch {
      // Fallback
    }
  }

  // Mechanical tactile click
  playClick() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, this.audioCtx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.07, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.04);
      this.notifyVisualizer(0.6, 50);
    } catch {
      // Fallback
    }
  }

  // Heavy cinematic IMAX / KGF blockbuster bass drop hit
  playBassDrop() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const now = this.audioCtx.currentTime;

      // 1. Sub-bass oscillator
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(28, now + 0.55);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

      // Lowpass filter for deep cinematic chest rumble
      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(420, now);
      filter.frequency.exponentialRampToValueAtTime(65, now + 0.55);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.55);

      // 2. High-impact transient punch
      const punchOsc = this.audioCtx.createOscillator();
      const punchGain = this.audioCtx.createGain();
      punchOsc.type = 'sine';
      punchOsc.frequency.setValueAtTime(120, now);
      punchOsc.frequency.exponentialRampToValueAtTime(40, now + 0.12);

      punchGain.gain.setValueAtTime(0.2, now);
      punchGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      punchOsc.connect(punchGain);
      punchGain.connect(this.audioCtx.destination);

      punchOsc.start(now);
      punchOsc.stop(now + 0.12);

      this.notifyVisualizer(1.0, 550);
    } catch {
      // Fallback
    }
  }

  // Epic Mass Victory Fanfare (on resume download / project launch)
  playVictory() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const now = this.audioCtx.currentTime;
      const notes = [261.63, 329.63, 392.00, 523.25]; // C major chord

      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.08, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6 + idx * 0.08);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + 0.6 + idx * 0.08);
      });

      this.notifyVisualizer(0.9, 700);
    } catch {
      // Fallback
    }
  }
}

export const sounds = new CinematicAudioEngine();

