"use client";

import { useState, useEffect, useRef } from "react";

const projects = [
  { src: "/assets/Webp Project Images/Nokha Village Community Centre, Public.webp", alt: "Nokha Village Community Centre", name: "Nokha Village Community Centre", location: "Nokha",  category: "Cultural"    },
  { src: "/assets/Webp Project Images/The Courtyard Office, Offices.webp",          alt: "The Courtyard Office",           name: "The Courtyard Office",           location: "India",  category: "Commercial"  },
  { src: "/assets/Webp Project Images/18 Screens, Residential.webp",                alt: "18 Screens",                     name: "18 Screens",                     location: "India",  category: "Residential" },
  { src: "/assets/Webp Project Images/Aria Hotel, Hospitality.webp",                alt: "Aria Hotel",                     name: "Aria Hotel",                     location: "India",  category: "Hospitality" },
  { src: "/assets/Webp Project Images/STUDIOS 90, Residential.webp",                alt: "Studios 90",                     name: "Studios 90",                     location: "India",  category: "Residential" },
  { src: "/assets/Webp Project Images/Narsighar, Nokha.webp",                       alt: "Narsighar, Nokha",               name: "Narsighar",                      location: "Nokha",  category: "Cultural"    },
];

const SCALE = 1.07;

function handleEnter(e: React.MouseEvent<HTMLDivElement>) {
  const card = e.currentTarget;
  const delta = (card.offsetWidth * (SCALE - 1)) / 2;

  let el = card.previousElementSibling as HTMLElement | null;
  while (el) {
    el.style.setProperty("transform", `translateX(-${delta}px)`);
    el = el.previousElementSibling as HTMLElement | null;
  }
  el = card.nextElementSibling as HTMLElement | null;
  while (el) {
    el.style.setProperty("transform", `translateX(${delta}px)`);
    el = el.nextElementSibling as HTMLElement | null;
  }
}

function handleLeave(e: React.MouseEvent<HTMLDivElement>) {
  const card = e.currentTarget;

  let el = card.previousElementSibling as HTMLElement | null;
  while (el) {
    el.style.removeProperty("transform");
    el = el.previousElementSibling as HTMLElement | null;
  }
  el = card.nextElementSibling as HTMLElement | null;
  while (el) {
    el.style.removeProperty("transform");
    el = el.nextElementSibling as HTMLElement | null;
  }
}

export default function ProjectStrip() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [labelVisible, setLabelVisible] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);

  function centerCard(idx: number, animated = true) {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>(".proj-card");
    const card = cards[idx];
    if (!card) return;
    if (!animated) track.style.transition = "none";
    const currentTransform = new DOMMatrix(getComputedStyle(track).transform).m41;
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const delta = window.innerWidth / 2 - cardCenterX;
    track.style.transform = `translateX(${currentTransform + delta}px)`;
    if (!animated) {
      void track.offsetHeight;
      track.style.transition = "";
    }
  }

  useEffect(() => {
    if (!window.matchMedia("(hover: none)").matches) return;

    const BASE = projects.length;
    centerCard(0);

    const interval = setInterval(() => {
      setLabelVisible(false);
      setTimeout(() => {
        const next = (activeIndexRef.current + 1) % (BASE * 2);
        activeIndexRef.current = next;
        setActiveIndex(next % BASE);
        centerCard(next);
        setLabelVisible(true);

        if (next === BASE * 2 - 1) {
          setTimeout(() => {
            const track = trackRef.current;
            if (!track) return;
            const cards = track.querySelectorAll<HTMLElement>(".proj-card");
            const cardWidth = cards[0].getBoundingClientRect().width;
            const current = new DOMMatrix(getComputedStyle(track).transform).m41;
            track.style.transition = "none";
            track.style.transform = `translateX(${current + BASE * cardWidth}px)`;
            activeIndexRef.current = BASE - 1;
            void track.offsetHeight;
            track.style.transition = "";
          }, 1100);
        }
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const active = projects[activeIndex];

  return (
    <div className="strip-wrapper">
      <p className="strip-mobile-label">
        <span style={{ opacity: labelVisible ? 1 : 0, transition: "opacity 0.2s ease" }}>
          {active.name}, {active.location}
        </span>
      </p>

      <div className="strip-scroll-zone">
        <div className="strip-track" ref={trackRef}>
          {projects.map((p, i) => (
            <div
              key={p.alt}
              className="proj-card"
              data-idx={i}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <img className="proj-photo" src={p.src} alt={p.alt} loading="lazy" />
              <div className="proj-card-overlay">
                <p className="proj-card-name">{p.name}, {p.location}</p>
                <p className="proj-card-category">{p.category}</p>
              </div>
            </div>
          ))}
          {projects.map((p) => (
            <div
              key={p.alt + "-2"}
              className="proj-card"
              aria-hidden="true"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <img className="proj-photo" src={p.src} alt="" loading="lazy" />
              <div className="proj-card-overlay">
                <p className="proj-card-name">{p.name}, {p.location}</p>
                <p className="proj-card-category">{p.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="strip-mobile-label strip-mobile-label--category">
        <span style={{ opacity: labelVisible ? 1 : 0, transition: "opacity 0.2s ease" }}>
          {active.category}
        </span>
      </p>
    </div>
  );
}
