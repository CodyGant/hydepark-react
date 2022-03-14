import React, { useState } from "react";
import { Card, Container, CardGroup, Dropdown } from "react-bootstrap";

function PrivateContactus() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phonenumber, setNumber] = useState("");
  const [groupname, setGroup] = useState("");
  const [fax, setFax] = useState("");
  const [guestNum, setGuest] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
          fax: fax,
          phonenumber: phonenumber,
          groupname: groupname,
          guestNum: guestNum,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(fullname, email, subject, message);
  };
  return (
    <div className="contactMain">
      <Container className="ContactContainer">
        <CardGroup>
          <Card
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="300"
          >
            <Card.Body className="cardBody">
              <Card.Title className="cardtitle">
                EMAIL OUR PRIVATE EVENT PROFESSIONALS
              </Card.Title>
              <Card.Text className="cardText">
                <div className="centerform">
                  <form onSubmit={handleSubmit}>
                    <Dropdown>
                      <Dropdown.Toggle className="selectLocation">
                        SELECT LOCATION
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropDown">
                        <Dropdown.Item href="/PITTSBURGH">
                          PITTSBURGH
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="/CLEVELANDBEACHWOOD"
                          target="_blank"
                        >
                          CLEVELAND - Beachwood
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="/CLEVELANDWESTLAKE"
                          target="_blank"
                        >
                          CLEVELAND - Westlake{" "}
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="/UPPERARLINGTONCOLUMBUS"
                          target="_blank"
                        >
                          COLUMBUS - Upper Arlington
                        </Dropdown.Item>
                        <Dropdown.Item href="/COLUMBUSDUBLIN" target="_blank">
                          COLUMBUS - Dublin{" "}
                        </Dropdown.Item>
                        <Dropdown.Item href="/DOWNTOWNCOLUMBUS" target="_blank">
                          COLUMBUS - Downtown
                        </Dropdown.Item>
                        <Dropdown.Item href="/DaytonaMenu" target="_blank">
                          DAYTONA BEACH
                        </Dropdown.Item>
                        <Dropdown.Item href="/INDIANAPOLIS" target="_blank">
                          INDIANAPOLIS
                        </Dropdown.Item>
                        <Dropdown.Item href="/SARASOTA" target="_blank">
                          SARASOTA
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="/DETROITBIRMINGHAM"
                          target="_blank"
                        >
                          DETROIT - Birmingham
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="/DETROITNORTHVILLE"
                          target="_blank"
                        >
                          DETROIT - Northville
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <label htmlFor="fullname">
                      FULL NAME<span>*</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      value={fullname}
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                      name="fullname"
                    />

                    {errors?.fullname && <p>Fullname cannot be empty.</p>}
                    <label htmlFor="GROUPNAME">
                      COMPANY OR GROUP NAME<span> (optional)</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      value={groupname}
                      onChange={(e) => {
                        setGroup(e.target.value);
                      }}
                      name="groupname"
                    />

                    <label htmlFor="GUESTNUMBER">
                      NUMBER OF ATTENDING<span></span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      value={guestNum}
                      onChange={(e) => {
                        setGuest(e.target.value);
                      }}
                      name="guestNum"
                    />

                    <label htmlFor="PHONE">
                      PHONE NUMBER<span>*</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      value={phonenumber}
                      onChange={(e) => {
                        setNumber(e.target.value);
                      }}
                      name="PHONENUMBER"
                    />

                    <label htmlFor="fax">
                      FAX NUMBER<span> (optional)</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      value={fax}
                      onChange={(e) => {
                        setFax(e.target.value);
                      }}
                      name="FAX"
                    />

                    <label htmlFor="email">
                      E-MAIL<span>*</span>
                    </label>
                    <input
                      className="input"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    {errors?.email && <p>Email cannot be empty.</p>}

                    <label htmlFor="subject">
                      SUBJECT<span>*</span>
                    </label>
                    <input
                      className="input"
                      type="text"
                      name="subject"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                    />
                    {errors?.subject && <p>Subject cannot be empty.</p>}
                    <label htmlFor="message">
                      MESSAGE<span>*</span>
                    </label>
                    <textarea
                      className="input"
                      name="message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    ></textarea>
                    {errors?.message && <p>Message body cannot be empty.</p>}
                    <div>
                      <button className="contactbtn" type="submit">
                        {buttonText}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-send-check-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                          <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                        </svg>
                      </button>
                    </div>
                    <div>
                      {showSuccessMessage && (
                        <p>Thank you! Your Message has been delivered.</p>
                      )}
                      {showFailureMessage && (
                        <p>Oops! Something went wrong, please try again.</p>
                      )}
                    </div>
                  </form>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default PrivateContactus;
