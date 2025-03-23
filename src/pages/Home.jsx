import Hero from "../components/Hero";
import Title from "../components/Title";
import Card from "../components/BlogCard";
import FAQ from "../components/FAQ"
import Counter from "../components/Counter";
import "./home.css";
const Home = () => {
  let blog = [
    {
      img: "img_03.jpg",
      header:
        "Delhi Capitals vs Mumbai Indians, WPLT20 Final 2025: ",
      card_link: "",
    },
  
  ];
  let quesAns = [{
    ques: "What happens if I forget my password?",
    ans: `If you forget your password, Chat to  reddy anna book whatsapp number. Team will help.`
  },
  {
    ques: "How can I stay updated on promotions and special offers?",
    ans: "Keep an eye on our promotions page for the latest offers and bonuses. Additionally, subscribing to our newsletter and following us on social media platforms will ensure you stay informed about exclusive promotions."
  },
  {
    ques: "Are there any fees for depositing or withdrawing funds?",
    ans: "We does not charge fees for depositing or withdrawing funds. However, please be aware that your payment provider may impose transaction fees. We recommend checking with your provider for any applicable charges. Within 15 min  Your withdrawal process is finished."
  },

  ]
  return (
    <>
      <Hero />
      <section className="container">
        <Title
          title="MoneyMaker24 Blog"
          dic="Read our blog for betting tips, tricks and Reddy Anna Match Predictions here."
          btn="MoneyMaker24 Blog"
        />
        <div className="flex gap_20 blog_card_container">
          {blog.map((item, index) => (
            <Card
              key={index}
              img={item.img}
              header={item.header}
              card_link={item.link}
            />
          ))}
        </div>
      </section>

      <section className="container">
        <Title
          title="MoneyMaker24: Happy Clients Always Love Us"
          dic="At MoneyMaker24 Official, our commitment to excellence is reflected in the satisfaction of our clients. With a focus on providing top-notch services and a seamless user experience, we take pride in the positive feedback and love from our happy clients. Their testimonials are a testament to our dedication to creating a platform that not only meets but exceeds their expectations. Join us at MoneyMaker24 and experience the joy of online gaming with a community that truly loves the experience we provide."
          btn="Contact US Now"
          link="https://wa.me/+917009229689?Hello"
        />


        <Counter/>
      </section>

      <section className="container member">
        <Title
          title="How to obtain your Cricket ID instantly with MoneyMaker24?"
          dic="To begin betting, you must first obtain your Cricket ID by following these simple steps:"
          btn="Join Us"
          link="https://wa.me/+917009229689?Hello"
        />
        <ol className="become_member">
          <li>
            Please contact us using the WhatsApp number provided on the link -{" "}
          </li>
          <li>
            You will be given a registration form in which you must provide all
            pertinent information such as your complete name, email address,
            current address, country, updated cellphone number, gender, and so
            on.
          </li>
          <li>We will give you Cricket ID.</li>
          <li>Here's how you can get your MoneyMaker24.</li>
        </ol>
        <p className="notice">Remember that when you agree to the money deposit terms, you also agree to the site's costs.</p>
      </section>
      <section className="faqs">
      {
          quesAns.map((item, index) => (
            <div key={index}>
              <FAQ ques={item.ques} ans={item.ans} />
            </div>
          ))
        }
      </section>
    </>
  );
};

export default Home;
