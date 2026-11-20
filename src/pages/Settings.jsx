
import { useState, useEffect } from "react";

function Settings() {

const [theme, setTheme] = useState(() =>
  localStorage.getItem("pulseops-theme") || "dark"
);

useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("pulseops-theme", theme);
}, [theme]);

  const [notifications, setNotifications] = useState(() =>
    localStorage.getItem("pulseops-notifications") !== "false"
  );

  const [liveUpdates, setLiveUpdates] = useState(() =>
    localStorage.getItem("pulseops-live") !== "false"
  );

  function updateNotifications(event) {
    const enabled = event.target.checked;
    setNotifications(enabled);
    localStorage.setItem("pulseops-notifications", String(enabled));
  }

  function updateLiveUpdates(event) {
    const enabled = event.target.checked;
    setLiveUpdates(enabled);
    localStorage.setItem("pulseops-live", String(enabled));
    window.dispatchEvent(new Event("pulseops-live-changed"));
  }

  return (
    <div className="settings-page">
      <div className="page-heading">
        <h1>Settings</h1>
        <p>Manage your dashboard preferences.</p>
      </div>

      <section className="settings-card">
        <h2>Administrator Profile</h2>

        <div className="settings-profile">
          <div className="avatar">AD</div>
          <div>
            <strong>Admin User</strong>
            <p>admin@pulseops.demo</p>
            <span>Administrator</span>
          </div>
        </div>
      </section>

      <section className="settings-card">
        <h2>Preferences</h2>

<div className="setting-row">
  <span>
    <strong>Appearance</strong>
    <small>Choose your preferred dashboard theme</small>
  </span>

  <div className="theme-options">
    <button
      type="button"
      className={theme === "light" ? "selected" : ""}
      onClick={() => setTheme("light")}
      aria-pressed={theme === "light"}
    >
      ☀ Light
    </button>

    <button
      type="button"
      className={theme === "dark" ? "selected" : ""}
      onClick={() => setTheme("dark")}
      aria-pressed={theme === "dark"}
    >
      ☾ Dark
    </button>
  </div>
</div>


        <label className="setting-row">
          <span>
            <strong>Notifications</strong>
            <small>Enable dashboard notification preferences</small>
          </span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={updateNotifications}
          />
        </label>

        <label className="setting-row">
          <span>
            <strong>Live Updates</strong>
            <small>Enable automatic revenue chart updates</small>
          </span>
          <input
            type="checkbox"
            checked={liveUpdates}
            onChange={updateLiveUpdates}
          />
        </label>
      </section>
    </div>
  );
}

export default Settings;
