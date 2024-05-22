import "./ContactPageContainer.css";
import { useState } from "react";

function ContactPageContainer(props) {
  const [visible, setVisible] = useState(true);

  const handleClick = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setVisible(!visible);
    }, "200");
  };
  return (
    <div className="ContactPageContainer">
      <div className="ContactInfoDiv">
        <h3>{props.formHeader}</h3>
        <form>
          <div class="form-container">
            <div class="row50">
              <div class="inputBox">
                <span>First Name</span>
                <input type="text" placeholder={props.holderName} />
              </div>
              <div class="inputBox">
                <span>Last Name</span>
                <input type="text" placeholder={props.holderLastName} />
              </div>
            </div>
            <div class="row50">
              <div class="inputBox">
                <span>Email</span>
                <input type="text" placeholder={props.holderEmail} />
              </div>
              <div class="inputBox">
                <span>Mobile</span>
                <input type="text" placeholder="+389 72 123 456" />
              </div>
            </div>
            <div class="row100">
              <div class="inputBox">
                <span>{props.textAreaHeader}</span>
                <textarea placeholder="Write your message here..."></textarea>
              </div>
            </div>
            <div class="send-button">
              <div class="inputBox">
                <button type={props.buttonType} onClick={handleClick}>
                  {props.buttonText}
                </button>
              </div>
            </div>
            <div className="MessageParagraph">
              <p className={visible && "hidden"}>
                Thank you for your message. You will recive answer on your
                email.
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="ContactAppInformations">
        <div>
          <span>Contact via Email:</span>
          <p>{props.email}</p>
        </div>
        <div>
          <span>Contact via Mobile:</span>
          <p>{props.mobile}</p>
        </div>
        <div>
          <span>Contact via WebSite:</span>
          <p>{props.website}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPageContainer;
