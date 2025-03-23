import "./contact.css";
import Title from "../components/Title";
const Contact = () => {
  return (
    <section className="contact">
      <Title
        title="Contact us"
        dic="If you have any inquiries, feedback, or require assistance, our dedicated support team is here to help. Your satisfaction is our priority, and we value your engagement with our platform."
        btn="Customer Support Hotline"
      />
      <div className="container support">
        <p>
          Our support team operates 24x7 to assist you promptly. Feel free to
          reach out to us for any of the following:
        </p>
        <ul>
          <li>
            <span>Account Assistance: </span> If you encounter any issues with
            your Reddy Anna account, password recovery, or account verification,
            our support team is ready to guide you through the process.
          </li>
          <li>
            <span>Technical Support: </span> For technical glitches, payment
            gateway concerns, or any other technical issues, our knowledgeable
            team is equipped to provide timely solutions.
          </li>
          <li>
            <span>General Inquiries: </span> Have questions about our services,
            promotions, or terms and conditions? We're here to provide clarity
            and ensure you have a seamless experience on MoneyMaker24.
          </li>
          <li>
            <span>Responsible Gaming Support: </span> MoneyMaker24 is committed
            to responsible gaming. If you need assistance with setting limits,
            self-exclusion, or have concerns about responsible gaming, our
            support team is here to help.
          </li>
          <li>
            <span>General Inquiries: </span> If you have suggestions for
            improvement or want to share your experiences, we welcome your input
            to enhance our platform.
          </li>
        </ul>
        <p>
          Connect with us through the provided email or hotline, and our team
          will strive to address your queries promptly and efficiently. Thank
          you for choosing MoneyMaker24 – where entertainment meets excellence!
        </p>

        <form
          action="https://formspree.io/f/movejjgd"
          method="POST"
          className=" flex fex_direction center contact_form"
        >
          <div className="flex center m-y-4 row">
            <input
              type="text"
              name="First Name"
              className="m-x-4 input"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="Last Name"
              className="m-x-4 input"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="flex center m-y-4 row">
            <input
              type="email"
              name="Email"
              className="m-x-4 input"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="Phone Number"
              className="m-x-4 input"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="flex center m-y-4 row">
            <textarea name="Address" placeholder="Feedback" required></textarea>
          </div>
          <div className="flex m-y-4 row center">
            <input type="submit" className="submit_btn" value="Submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
