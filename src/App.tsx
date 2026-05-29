import React, { useMemo, useRef, useState } from "react";
import {
  FaChevronDown,
  FaCog,
  FaHeadphones,
  FaListUl,
  FaPause,
  FaPlay,
  FaVolumeUp,
} from "react-icons/fa";
import "./App.css";

const ChevronDownIcon = FaChevronDown as unknown as React.FC;
const CogIcon = FaCog as unknown as React.FC;
const HeadphonesIcon = FaHeadphones as unknown as React.FC;
const ListIcon = FaListUl as unknown as React.FC;
const PauseIcon = FaPause as unknown as React.FC;
const PlayIcon = FaPlay as unknown as React.FC;
const VolumeIcon = FaVolumeUp as unknown as React.FC;

type GenreId = "soaking" | "praise" | "yoruba" | "classical";
export type PlayLists = GenreId | "sermons" | "rap_gospel" | "chants";

type Track = {
  title: string;
  artist: string;
  duration: string;
  src: string;
};

type Genre = {
  id: GenreId;
  label: string;
  description: string;
  color: string;
  tracks: Track[];
};

const sampleStreamSrc = "/audio/sample-radio.wav";

const genres: Genre[] = [
  {
    id: "soaking",
    label: "Soaking Chant",
    description: "Slow worship pads, prayers, and meditative chants.",
    color: "#7ce4ff",
    tracks: [
      {
        title: "Upper Room Rain",
        artist: "Zion Sound Chapel",
        duration: "28:14",
        src: sampleStreamSrc,
      },
      {
        title: "Holy Fire Murmur",
        artist: "The Watchmen Choir",
        duration: "19:48",
        src: "/audio/soaking-holy-fire-murmur.mp3",
      },
      {
        title: "Selah at Midnight",
        artist: "Bethel House Lagos",
        duration: "34:02",
        src: "/audio/soaking-selah-at-midnight.mp3",
      },
    ],
  },
  {
    id: "praise",
    label: "Praise",
    description: "Joyful church grooves for Sunday morning energy.",
    color: "#ffe45c",
    tracks: [
      {
        title: "Shout Hallelujah",
        artist: "City Praise Crew",
        duration: "05:42",
        src: sampleStreamSrc,
      },
      {
        title: "Dancing in His Courts",
        artist: "Grace Assembly Band",
        duration: "06:18",
        src: "/audio/praise-dancing-in-his-courts.mp3",
      },
      {
        title: "Trumpets of Joy",
        artist: "Kingdom Brass",
        duration: "04:59",
        src: "/audio/praise-trumpets-of-joy.mp3",
      },
    ],
  },
  {
    id: "yoruba",
    label: "Yoruba Hymns",
    description: "Classic Yoruba worship hymns and call-and-response.",
    color: "#f78acb",
    tracks: [
      {
        title: "Olorun To Da Awon Oke",
        artist: "Ijo Mimo Voices",
        duration: "07:35",
        src: sampleStreamSrc,
      },
      {
        title: "Jesu Olugbala Mi",
        artist: "Ayo Hymnal Society",
        duration: "06:47",
        src: "/audio/yoruba-jesu-olugbala-mi.mp3",
      },
      {
        title: "Kabiyesi Reprise",
        artist: "Ibadan Tabernacle Choir",
        duration: "09:21",
        src: "/audio/yoruba-kabiyesi-reprise.mp3",
      },
    ],
  },
  {
    id: "classical",
    label: "Classical Hymns",
    description: "Pipe organ, choir arrangements, and reverent hymns.",
    color: "#a8ff78",
    tracks: [
      {
        title: "Nearer Still",
        artist: "Cathedral Chamber Choir",
        duration: "08:15",
        src: sampleStreamSrc,
      },
      {
        title: "A Mighty Fortress",
        artist: "Old Stone Chapel",
        duration: "05:52",
        src: "/audio/classical-a-mighty-fortress.mp3",
      },
      {
        title: "Doxology in G",
        artist: "The Hymnal Quartet",
        duration: "04:26",
        src: "/audio/classical-doxology-in-g.mp3",
      },
    ],
  },
];

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [activeGenreId, setActiveGenreId] = useState<GenreId>("soaking");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [isGenreMenuOpen, setIsGenreMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const activeGenre = useMemo(
    () => genres.find((genre) => genre.id === activeGenreId) || genres[0],
    [activeGenreId]
  );
  const activeTrack = activeGenre.tracks[0];

  const selectGenre = (genreId: GenreId) => {
    setActiveGenreId(genreId);
    setIsPlaying(false);
    setIsGenreMenuOpen(false);
  };

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume / 100;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextVolume = Number(event.target.value);
    setVolume(nextVolume);
    if (audioRef.current) {
      audioRef.current.volume = nextVolume / 100;
    }
  };

  return (
    <main
      className="radio-shell"
      style={{ "--station-accent": activeGenre.color } as React.CSSProperties}
    >
      <audio
        ref={audioRef}
        key={activeTrack.src}
        src={activeTrack.src}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      <section className="hero-panel">
        <nav className="topbar" aria-label="Station status">
          <div className="brand-lockup">
            <span className="brand-icon">
              <HeadphonesIcon />
            </span>
            <div>
              <p>Church.Radio</p>
              <span>Live Christian genre radio</span>
            </div>
          </div>
          <div className="topbar-actions">
            <button
              className={`menu-trigger ${isGenreMenuOpen ? "is-open" : ""}`}
              type="button"
              aria-expanded={isGenreMenuOpen}
              aria-controls="genre-menu"
              onClick={() => {
                setIsGenreMenuOpen((isOpen) => !isOpen);
                setIsSettingsOpen(false);
              }}
            >
              <ListIcon />
              <span>{activeGenre.label}</span>
              <ChevronDownIcon />
            </button>
            <button
              className={`icon-trigger ${isSettingsOpen ? "is-open" : ""}`}
              type="button"
              aria-label="Open settings"
              aria-expanded={isSettingsOpen}
              aria-controls="settings-menu"
              onClick={() => {
                setIsSettingsOpen((isOpen) => !isOpen);
                setIsGenreMenuOpen(false);
              }}
            >
              <CogIcon />
            </button>
          </div>
        </nav>

        <div className="dropdown-layer">
          {isGenreMenuOpen && (
            <section
              className="dropdown-panel genre-menu"
              id="genre-menu"
              aria-labelledby="genres-title"
            >
            <div className="panel-heading">
              <p>Choose a channel</p>
              <h2 id="genres-title">Tune the cassette</h2>
            </div>

            <div className="genre-grid">
              {genres.map((genre) => (
                <button
                  key={genre.id}
                  className={`genre-card ${
                    activeGenre.id === genre.id ? "is-active" : ""
                  }`}
                  style={{ "--accent": genre.color } as React.CSSProperties}
                  onClick={() => selectGenre(genre.id)}
                >
                  <span>{genre.label}</span>
                  <small>{genre.description}</small>
                </button>
              ))}
            </div>
            </section>
          )}

          {isSettingsOpen && (
            <section
              className="dropdown-panel settings-menu"
              id="settings-menu"
              aria-labelledby="settings-title"
            >
              <div className="panel-heading">
                <p>Station settings</p>
                <h2 id="settings-title">Signal board</h2>
              </div>
              <div className="settings-grid">
                <label>
                  <span>Launch volume</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={changeVolume}
                  />
                </label>
                <label className="toggle-row">
                  <input type="checkbox" defaultChecked />
                  <span>Auto play next track</span>
                </label>
                <label className="toggle-row">
                  <input type="checkbox" defaultChecked />
                  <span>Keep cassette animation</span>
                </label>
              </div>
            <div className="serving-card">
              <span className="tag">Best audio setup</span>
              <p>
                Store MP3/AAC files in object storage, put a CDN in front, and
                serve byte-range requests with CORS enabled.
              </p>
            </div>
            </section>
          )}
        </div>

        <div className="station-grid">
          <section className="cassette-stage" aria-label="Cassette player">
            <div className="pixel-sun" />
            <div className="pixel-cross" />
            <div className={`cassette ${isPlaying ? "is-playing" : ""}`}>
              <div className="cassette-label">
                <span>{activeGenre.label}</span>
                <strong>{activeTrack.title}</strong>
              </div>
              <div className="cassette-window">
                <div className="reel" />
                <div className="tape-line" />
                <div className="reel" />
              </div>
              <div className="cassette-notches">
                <span />
                <span />
                <span />
              </div>
            </div>
          </section>

        </div>
      </section>

      <footer className="player-bar">
        <div className="playing-copy">
          <span className={isPlaying ? "status-dot is-on" : "status-dot"} />
          <div>
            <strong>{activeTrack.title}</strong>
            <span>{activeTrack.artist}</span>
          </div>
        </div>

        <div className="transport-controls">
          <button
            className="play-button"
            aria-label={isPlaying ? "Pause" : "Play"}
            onClick={togglePlayback}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
        </div>

        <label className="volume-control">
          <VolumeIcon />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={changeVolume}
            aria-label="Volume"
          />
        </label>
      </footer>
    </main>
  );
}

export default App;
