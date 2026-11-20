import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";
function Header() {
  const navigate = useNavigate();

function handleLogout() {
  logout();
  navigate("/login", { replace: true });
}
  return (
    <header className="dashboard-header">
      <div className="header-title">
        <h2>Dashboard</h2>
        <p>Monitor your business performance</p>
      </div>

      <div className="header-actions">
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search dashboard"
        />

        <div className="admin-profile">
          <div className="avatar">AD</div>

          <div className="admin-info">
            <strong>Admin User</strong>
            <span>Administrator</span>
          </div>
        </div>
        <button
          type="button"
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
       </button>
      </div>
    </header>
  );
}

export default Header;
