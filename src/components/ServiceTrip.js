import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/511.jpg";
import Trip2 from "../assets/811.jpg";
import Trip3 from "../assets/611.jpg";
import Trip4 from "../assets/711.jpeg";

function Trip() {
  return (
    <div className="trip">
      <h1>Amenities </h1>
      <p>Your Gateway to Ranchi: Seamless Adventures Await!</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Restaurants"
          text=" Explore our carefully curated selection of restaurants that promise to tantalize your senses with a diverse array of cuisines. Savor the local spices, fresh ingredients, and warm hospitality that make dining in Ranchi a delightful journey of its own. Bon appétit!    "
        />

        <TripData
          image={Trip2}
          heading="Vacation Rentals"
          text="Embrace the comforts of home while immersing yourself in the local culture and beauty of Ranchi. Our curated selection includes a variety of options, from quaint cottages to spacious apartments, each thoughtfully equipped to cater to your needs.  "
        />

        <TripData
          image={Trip3}
          heading="Car Rentals"
          text=" Navigate Ranchi at your own pace with our convenient car rental services.From compact cars for solo adventurers to spacious SUVs for families, we have the perfect vehicle to suit your needs. "
        />
        <TripData
          image={Trip4}
          heading="Read Review"
          text="Curious to know what fellow travelers thought about their Ranchi experience? Dive into our collection of reviews from explorers who have ventured through the city. Gain valuable insights into attractions, accommodations, dining, and more. "
        />
      </div>
    </div>
  );
}

export default Trip;
