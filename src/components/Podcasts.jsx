import { useState, useEffect, useRef} from "react";
import "./Podcasts.css";

const ASSET_BASE = import.meta.env.VITE_ASSET_BASE_URL;

const podcastItems = [
  {
    title: "Expansion of the Universe",
    description: "A deep dive into the mysteries of the cosmos and the ever-expanding universe.",
    audioSrc: ASSET_BASE + "/assets/podclips/Expansion of the universe.mp3",
    imgSrc: ASSET_BASE + "/assets/expansionOfUni.png",
  },
];
function AudioPlayer({ src, title }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    audio.play();
    setIsPlaying(true);

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, [src]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) { audio.pause(); setIsPlaying(false); }
    else { audio.play(); setIsPlaying(true); }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    audio.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const formatTime = (t) => {
    if (isNaN(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="custom-player">
      <audio ref={audioRef} src={src} />
      <p className="custom-player-title">{title}</p>
      <div className="custom-player-controls">
        <button className="custom-player-btn" onClick={togglePlay}>
          {isPlaying ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>
        <span className="custom-player-time">{formatTime(currentTime)}</span>
        <input
          className="custom-player-seek"
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={currentTime}
          onChange={handleSeek}
        />
        <span className="custom-player-time">{formatTime(duration)}</span>
        <span className="custom-player-end" onClick={() => setSelected(null)}>
          x
        </span>
      </div>
    </div>
  );
}
function Podcasts() {
  const [selected, setSelected] = useState(null);

  return (
    <div className = "podcasts-section">
    <div className="podcastItems" id="podcasts">
      <div className="podcasts-header">
        <h2>/ podcasts</h2>
        <span className="podcast-divider"></span>
      </div>

      <div className="podcast-list">
        {podcastItems.map((podcast, index) => (
          <button
            key={index}
            className={`podcast-card ${index === selected ? "active" : ""}`}
            onClick={() => setSelected(index)}
            aria-pressed={index === selected}
          >
            <div className="podcard-body">
              <img src={podcast.imgSrc} alt={podcast.title} className="podcard-image" />
              <h3>{podcast.title}</h3>
              <p>{podcast.description}</p>  
            </div>
          </button>
        ))}
      </div>
      <div className="podcast-player">
          {selected !== null ? (
        <AudioPlayer
          key={podcastItems[selected].title}
          src={podcastItems[selected].audioSrc}
          title={podcastItems[selected].title}
        />
        ) : (
          <div className="podcast-placeholder">
            <p>select a podcast to play ♡</p>
          </div>
        )}
      </div>

    </div>
    </div>
  );
}

export default Podcasts;