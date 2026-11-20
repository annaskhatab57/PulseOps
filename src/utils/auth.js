
const TOKEN_KEY = "pulseops-demo-token";
const SESSION_DURATION = 60 * 60 * 1000;

const DEMO_EMAIL = "admin@pulseops.demo";
const DEMO_PASSWORD = "PulseOps2026!";

export function login(email, password) {
  if (
    email.trim().toLowerCase() !== DEMO_EMAIL ||
    password !== DEMO_PASSWORD
  ) {
    return false;
  }

  const session = {
    token: crypto.randomUUID(),
    expiresAt: Date.now() + SESSION_DURATION
  };

  sessionStorage.setItem(TOKEN_KEY, JSON.stringify(session));

  return true;
}

export function isAuthenticated() {
  try {
    const stored = sessionStorage.getItem(TOKEN_KEY);

    if (!stored) return false;

    const session = JSON.parse(stored);

    const valid =
      typeof session.token === "string" &&
      session.token.length > 0 &&
      typeof session.expiresAt === "number" &&
      Date.now() < session.expiresAt;

    if (!valid) {
      sessionStorage.removeItem(TOKEN_KEY);
    }

    return valid;
  } catch {
    sessionStorage.removeItem(TOKEN_KEY);
    return false;
  }
}

export function logout() {
  sessionStorage.removeItem(TOKEN_KEY);
}
