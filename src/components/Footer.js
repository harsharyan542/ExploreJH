import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>ExploreJH</h1>
          <p>Unlock the Hidden Charms</p>
        </div>
        <div>
          <a href="https://www.facebook.com/merijaanranchi/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/ranchi_meri_jaan/?hl=en">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCIADhMvRvMzutQbn1P6gB7w">
            <i className="fa-brands fa-youtube-square"></i>
          </a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fjaanranchi">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Version</a>
        </div>

        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issue</a>
          <a href="/">License</a>
          <a href="/">Twitter</a>
        </div>

        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">trouble shooting</a>
          <a href="/">Contact us</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">Terms os services</a>
          <a href="/">Privacy Polices</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
