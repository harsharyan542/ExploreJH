import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/3.jpg";
import Footer from "../components/Footer";
import ServiceTrip from "../components/ServiceTrip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Services"
        btnClass="hide"
      />
      <ServiceTrip />
      <Footer />
    </>
  );
}

export default Service;
