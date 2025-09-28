import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 100%;
  margin-top: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 2px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }

  textarea {
    resize: vertical;
  }

  button {
    padding: 0.5rem 1rem;
    background: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    background: #555;
  }
`;

const schema = yup.object({
  fullName: yup
    .string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  subject: yup
    .string()
    .min(3, "Subject must be at least 3 characters")
    .required("Subject is required"),
  message: yup
    .string()
    .min(3, "Message must be at least 3 characters")
    .required("Message is required"),
});

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <Wrapper>
      <h1>Contact Us</h1>
      <p>Have a question? We'd love to hear from you!</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name</label>
        <input placeholder="Full Name" {...register("fullName")} />
        <p>{errors.fullName?.message}</p>
        <label>Email</label>
        <input placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <label>Subject</label>
        <input placeholder="Subject" {...register("subject")} />
        <p>{errors.subject?.message}</p>
        <label>Message</label>
        <textarea placeholder="Message" {...register("message")} />
        <p>{errors.message?.message}</p>
        <button type="submit">Send</button>
      </form>
    </Wrapper>
  );
}
