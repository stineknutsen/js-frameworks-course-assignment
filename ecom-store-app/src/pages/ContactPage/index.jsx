import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0.5rem;
  font-size: 1rem;

  &:hover {
    background-color: #45a049;
  }
`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Container>
      <h1>Contact Us</h1>
      <p>
        If you have any questions or need assistance, please don't hesitate to
        contact us.
      </p>
      <Form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <Input
          type="text"
          placeholder="Full name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Subject</label>
        <Input
          type="text"
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <label>Message</label>
        <Textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit">Send</Button>
      </Form>
    </Container>
  );
}
