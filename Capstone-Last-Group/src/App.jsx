import Header from "./components/Header";
import PlanetInfo from "./components/PlanetInfo";
import PlanetGallery from "./components/PlanetGallery";
import PlanetTable from "./components/PlanetTable";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <PlanetInfo />
        <PlanetGallery />
        <PlanetTable />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}