// Values exactly as shown in the Figma design
const row = ["0.330", "4,878", "5427", "3.7"];

const facts = {
  Mercury: row,
  Venus: row,
  Earth: row,
  Mars: row,
  Jupiter: row,
  Saturn: row,
  Uranus: row,
  Neptune: row,
  Pluto: row,
};

function Cells({ name }) {
  return (
    <>
      <td>{name}</td>
      {facts[name].map((value, i) => (
        <td key={i}>{value}</td>
      ))}
    </>
  );
}

export default function PlanetTable() {
  return (
    <section id="facts">
      <h2>Planetary Facts at a Glance</h2>
      <p>Below is a comparative table of major planets in our solar system. The data highlights key physical properties used by astronomers and researchers worldwide.</p>

      <table>
        <caption>Data about the planets of our solar system (Planetary facts taken from NASA)</caption>
        <thead>
          <tr>
            <th colSpan={2}></th>
            <th>Name</th>
            <th>Mass (10<sup>24</sup>kg)</th>
            <th>Diameter (km)</th>
            <th>Density (kg/m<sup>3</sup>)</th>
            <th>Gravity (m/s<sup>2</sup>)</th>
          </tr>
        </thead>
        <tbody>
          <tr><th colSpan={2} rowSpan={4}>Terrestrial Planets</th><Cells name="Mercury" /></tr>
          <tr><Cells name="Venus" /></tr>
          <tr><Cells name="Earth" /></tr>
          <tr><Cells name="Mars" /></tr>
          <tr><th rowSpan={4}>Jovian Planets</th><th rowSpan={2}>Gas Giants</th><Cells name="Jupiter" /></tr>
          <tr><Cells name="Saturn" /></tr>
          <tr><th rowSpan={2}>Ice Giants</th><Cells name="Uranus" /></tr>
          <tr><Cells name="Neptune" /></tr>
          <tr><th colSpan={2}>Dwarf Planets</th><Cells name="Pluto" /></tr>
        </tbody>
      </table>
    </section>
  );
}