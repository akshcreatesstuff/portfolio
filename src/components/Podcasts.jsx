import { useState } from "react";
import "./Podcasts.css";
import expansionAudio from "../assets/podclips/Expansion of the universe.mp3";

const podcastItems = [
  {
    title: "Expansion of the Universe",
    description: "A deep dive into the mysteries of the cosmos and the ever-expanding universe.",
    audioSrc: expansionAudio,
  },
];
function Podcasts() {
  const [selected, setSelected] = useState(null);

  return (
    <div className = "podcasts-section">
    <div className="podcastItems" id="podcasts">
      <div className="podcasts-header">
        <h2>/ podcasts</h2>
        <span className="podcast-divider"></span>
      </div>

      <div className="podcast-player">
        {selected !== null ? (
          <audio key={podcastItems[selected].title} controls autoPlay>
            <source src={podcastItems[selected].audioSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        ) : (
          <p className="podcast-player-placeholder">Select a podcast to play</p>
        )}
      </div>

      <div className="podcast-list">
        {podcastItems.map((podcast, index) => (
          <button
            key={index}
            className={`podcast-card ${index === selected ? "active" : ""}`}
            onClick={() => setSelected(index)}
            aria-pressed={index === selected}
          >
            <div className="podcard-icon">▸</div>
            <div className="podcard-body">
              <h3>{podcast.title}</h3>
              <p>{podcast.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Podcasts;