
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { login, isAuthenticated } from "../utils/auth";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const success = login(email, password);

    if (success) {
      const destination = location.state?.from;
      navigate(
        destination && destination !== "/login"
          ? destination
          : "/",
        { replace: true }
      );
    } else {
      setError("Invalid email or password.");
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <span className="brand-mark">P</span>
          <h1>PulseOps</h1>
        </div>

        <p className="login-eyebrow">ENTERPRISE INTELLIGENCE</p>
        <h2>Welcome back</h2>
        <p className="login-description">
          Sign in to access your management workspace.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email address</label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            autoComplete="username"
            required
          />

          
<label htmlFor="login-password">Password</label>

<div className="password-field">
  <input
    id="login-password"
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    placeholder="Enter your password"
    autoComplete="current-password"
    required
  />

  <button
    type="button"
    className="password-toggle"
    onClick={() => setShowPassword(!showPassword)}
    aria-label={showPassword ? "Hide password" : "Show password"}
    aria-pressed={showPassword}
    title={showPassword ? "Hide password" : "Show password"}
  >
    {showPassword ? (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3l18 18" />
        <path d="M10.6 5.1A10.7 10.7 0 0 1 12 5c5 0 9 4 10 7a12 12 0 0 1-3.3 4.6" />
        <path d="M6.3 6.3A12.4 12.4 0 0 0 2 12c1 3 5 7 10 7a10.7 10.7 0 0 0 5-1.2" />
        <path d="M10 10a3 3 0 0 0 4 4" />
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )}
  </button>
</div>


          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="login-submit">
            Sign in
          </button>
        </form>

        <div className="login-demo">
          <strong>Demo access</strong>
          <p>Email: admin@pulseops.demo</p>
          <p>Password: PulseOps2026!</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
