import "./ContactPage.css";
import ContactPageContainer from "../../Components/ContactPageContainer/ContactPageContainer";

function ContactPage() {
  const formHeader = "Ask a question or send a message:";
  const holderName = "Petar";
  const holderLastName = "Petreski";
  const holderEmail = "petarpetreski@gmail.com";
  const textAreaHeader = "Send your message";
  const buttonType = "submit";
  const buttonText = "Send";
  const email = "cars.app@gmail.com";
  const mobile = "+389 72 854 852";
  const website = "www.carsapp.com";
  return (
    <section className="ContactPage">
      <ContactPageContainer
        formHeader={formHeader}
        holderName={holderName}
        holderLastName={holderLastName}
        holderEmail={holderEmail}
        textAreaHeader={textAreaHeader}
        buttonText={buttonText}
        buttonType={buttonType}
        email={email}
        mobile={mobile}
        website={website}
      />
    </section>
  );
}

export default ContactPage;
