import React from "react";
import styles from "./contact.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Contact: React.FC = () => {
  return (
    <div id="contact" className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <hr />
      <div>
        <h6 className={styles.infoTitle}>Address</h6>
        <p>7419 Avenue O. Houston, Texas 77011</p>
      </div>
      <div>
        <h6 className={styles.infoTitle}>Phone</h6>
        <p>713-875-8695</p>
      </div>
      <div>
        <h6 className={styles.infoTitle}>Email</h6>
        <p>MikeDavis@gulfcoastscrap.com</p>
      </div>
      <Form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="contact" value="contact" />

        <Form.Group controlId="formBasicName">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <BsFillPersonFill />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              className={styles.input}
              name="name"
              type="name"
              placeholder="Full Name"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <MdEmail />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              className={styles.input}
              name="email"
              type="email"
              placeholder="email@address.com"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <MdPhone />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              className={styles.input}
              name="phone"
              type="phone"
              placeholder="123-456-7890"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formBasicCompany">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FaBuilding />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              className={styles.input}
              name="company"
              type="company"
              placeholder="Company Name"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formBasicMessage">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <RiMessage2Fill />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              className={styles.input}
              as="textarea"
              name="message"
              type="message"
              placeholder="How may we help?"
            />
          </InputGroup>
        </Form.Group>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Contact;
