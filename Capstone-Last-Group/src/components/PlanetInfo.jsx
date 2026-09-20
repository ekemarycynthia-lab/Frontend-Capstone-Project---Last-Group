import { useEffect, useRef, useState } from "react";

export default function PlanetInfo() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // autoplay only works when muted
      video.play().catch(() => {});
    }
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <section id="intro">
      <div className="video-wrap">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src="/planets.mp4" type="video/mp4" />
        </video>

        <button
          type="button"
          className="video-toggle"
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
        >
          {playing ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="5" y="4" width="5" height="16" rx="1" />
              <rect x="14" y="4" width="5" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 4l13 8-13 8z" />
            </svg>
          )}
        </button>
      </div>

      <div className="intro-text">
        <h2>How Planetary Data Helps Us Understand Space</h2>
        <p>Planetary science goes beyond images. Comparing <strong>mass, diameter, gravity,</strong> and <strong>density,</strong> we gain insight into how planets form, behave, and interact within the solar system.</p>
      </div>
    </section>
  );
}