import { useEffect, useState } from "react";

const PLANETS_URL = "https://anurella.github.io/json/planets.json";

export default function PlanetGallery() {
  const [planets, setPlanets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(PLANETS_URL)
      .then((res) => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(setPlanets)
      .catch((err) => {
        console.error("Could not load planets:", err);
        setError("Could not load planets. Please refresh the page.");
      });
  }, []);

  return (
    <section id="planets">
      <h2>Visualizing the Differences Between Planets</h2>
      <p>Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how vastly different terrestrial planets are from gas giants and ice giants.</p>

      {error && <p role="alert">{error}</p>}

      {planets.map((p) => (
        <figure key={p.planet}>
          <img src={p.image} alt={p.planet} loading="lazy" />
          <figcaption>
            <strong>{p.planet}</strong>
            <br />
            Distance from Sun: {p.distanceFromSun.toLocaleString()} million km
          </figcaption>
        </figure>
      ))}
    </section>
  );
}