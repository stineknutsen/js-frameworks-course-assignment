import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
