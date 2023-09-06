import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular destination</h1>
      <p>Tour gives you opputunity to see a lot, within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Patratu Valley, Ranchi"
        text="Discover the serene escape of Patratu, nestled in the heart of Ranchi, Jharkhand, India. A picturesque town known for its lush landscapes, Patratu offers a tranquil getaway just 35 kilometers from Ranchi. The iconic Patratu Valley, surrounded by rolling hills, presents breathtaking views that shift with the day's light, while the Patratu Dam's reservoir invites adventure with boating and kayaking. Cozy resorts blend harmoniously with nature, allowing visitors to immerse themselves in the soothing ambiance, and the town's indigenous tribal communities offer cultural insights."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Dassam Falls, Ranchi"
        text="Embark on a journey to Dassam Falls, an enchanting destination nestled in the heart of Ranchi, Jharkhand, India. Just a short drive away, Dassam Falls, also known as Dassam Gagh, stands as a testament to nature's grandeur. The Kanchi River plunges from a height, creating a mesmerizing cascade that captivates all who visit. Surrounded by dense forests and rocky terrain, Dassam Falls offers a serene escape for nature lovers and photographers alike. The thundering sound of water hitting the rocks and the lush greenery form a picturesque backdrop, making it an ideal spot for relaxation and exploration. "
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
