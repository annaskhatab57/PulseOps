
import { useState } from "react";
import teamData from "../data/team.json";

function Team() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "asc",
  });

  const columns = [
    { key: "id", label: "Member ID" },
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    { key: "department", label: "Department" },
    { key: "projects", label: "Projects" },
    { key: "status", label: "Availability" },
  ];

  function handleSort(key) {
    setSortConfig((previous) => ({
      key,
      direction:
        previous.key === key && previous.direction === "asc"
          ? "desc"
          : "asc",
    }));
  }

  const filteredTeam = teamData.filter((member) => {
    const search = searchTerm.toLowerCase().trim();

    const searchableFields = [
      member.id,
      member.name,
      member.email,
      member.role,
      member.department,
      member.initials,
    ];

    const matchesSearch = searchableFields.some((field) =>
      String(field ?? "").toLowerCase().includes(search)
    );

    const matchesStatus =
      statusFilter === "All" ||
      member.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const sortedTeam = [...filteredTeam].sort((a, b) => {
    const valueA = a[sortConfig.key];
    const valueB = b[sortConfig.key];

    let comparison = 0;

    if (
      typeof valueA === "number" &&
      typeof valueB === "number"
    ) {
      comparison = valueA - valueB;
    } else {
      comparison = String(valueA ?? "").localeCompare(
        String(valueB ?? ""),
        undefined,
        { numeric: true, sensitivity: "base" }
      );
    }

    return sortConfig.direction === "asc"
      ? comparison
      : -comparison;
  });

  return (
    <div className="team-page">
      <div className="page-heading">
        <div>
          <h1>Team Directory</h1>
          <p>
            Browse your workforce and sort records
            by department or workload.
          </p>
        </div>

        <span className="members-count">
          {teamData.length} Members
        </span>
      </div>

      <div className="team-controls">
        <input
          type="search"
          placeholder="Search by name, ID, role..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
          aria-label="Search team members"
        />

        <select
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value)
          }
          aria-label="Filter by availability"
        >
          <option value="All">All Members</option>
          <option value="Active">Active</option>
          <option value="Away">Away</option>
        </select>
      </div>

      <p className="team-count">
        Showing {sortedTeam.length} of {teamData.length} members
      </p>

      <div className="table-container">
        <table className="team-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  aria-sort={
                    sortConfig.key === column.key
                      ? sortConfig.direction === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  <button
                    type="button"
                    className="sort-button"
                    onClick={() => handleSort(column.key)}
                  >
                    {column.label}
                    <span>
                      {sortConfig.key === column.key
                        ? sortConfig.direction === "asc"
                          ? " ↑"
                          : " ↓"
                        : " ↕"}
                    </span>
                  </button>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {sortedTeam.map((member) => (
              <tr key={member.id}>
                <td>
                  <strong>{member.id}</strong>
                  <p className="member-email">
                    {member.email ?? ""}
                  </p>
                </td>

                <td>{member.name ?? "N/A"}</td>
                <td>{member.role ?? "N/A"}</td>
                <td>{member.department ?? "N/A"}</td>
                <td>{member.projects ?? 0}</td>

                <td>
                  <span
                    className={`status-badge ${String(
                      member.status ?? ""
                    ).toLowerCase()}`}
                  >
                    {member.status ?? "Unknown"}
                  </span>
                </td>
              </tr>
            ))}

            {sortedTeam.length === 0 && (
              <tr>
                <td colSpan={6} className="empty-team">
                  No matching members found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Team;
