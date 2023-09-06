import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/51.jpg";
import Trip2 from "../assets/81.jpeg";
import Trip3 from "../assets/61.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Explore Places</h1>
      <p>You can discover unique destination using google maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Walking Tours in Ranchi"
          text=" Immerse in Firayalal Chowk's cultural hub, taste local flavors at Ranchi Market, and enjoy tranquility at Morabadi Ground. Discover the sculpted beauty of Rock Garden, the celestial allure of Nakshatra Van, the open expanse of Morabadi Ground, and the verdant charm of Ranchi's parks. Each step in Ranchi weaves a tapestry of enriching experiences.    "
        />

        <TripData
          image={Trip2}
          heading="Holiday & Seasonal Tours in Ranchi"
          text="Explore Tagore Hill, an ode to Rabindranath Tagore, and the sculpted beauty of Rock Garden. Engage with Tribal Research Institute & Museum for indigenous insights, and Panch Gagh Falls for natural wonder. Ranchi's essence awaits your exploration, enriching your journey. "
        />

        <TripData
          image={Trip3}
          heading="Religious Sites in Ranchi"
          text=" In Ranchi, Jharkhand, a mosaic of spirituality awaits. The Jagannath Temple mirrors Puri's iconic shrine, while the Sun Temple exudes tranquility. Atop Ranchi Hill, the Pahari Mandir offers city views and Shiva shrines. The distinctive Maa Chhinnamasta Temple attracts seekers. "
        />
      </div>
    </div>
  );
}

export default Trip;
