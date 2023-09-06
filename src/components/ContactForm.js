import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send Message To Us</h1>
      <p>Constumer Service availabe 24*7</p>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
