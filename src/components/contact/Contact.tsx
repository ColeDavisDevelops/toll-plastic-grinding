import React, { useState } from "react";
import styles from "./contact.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

interface formState {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<formState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  console.log(formState);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p>Toll services, Shredding, Grinding, Densifying, Pelletizing</p>
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
              name="name"
              type="name"
              placeholder="Full Name"
              onChange={handleChange}
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
              name="email"
              type="email"
              placeholder="email@address.com"
              onChange={handleChange}
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
              name="phone"
              type="phone"
              placeholder="123-456-7890"
              onChange={handleChange}
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
              name="company"
              type="company"
              placeholder="Company Name"
              onChange={handleChange}
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
              as="textarea"
              name="message"
              type="message"
              placeholder="How may we help?"
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>
        <Button className={styles.button} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
