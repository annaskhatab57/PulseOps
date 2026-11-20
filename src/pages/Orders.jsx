
import { useState } from "react";
import orders from "../data/orders.json";

function Orders() {
    const [searchTerm, setSearchTerm] = useState("");
const [statusFilter, setStatusFilter] = useState("All");
  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "desc"
  });

  function handleSort(key) {
    setSortConfig((previous) => ({
      key,
      direction:
        previous.key === key && previous.direction === "asc"
          ? "desc"
          : "asc"
    }));
  }

 
const filteredOrders = orders.filter((order) => {
  const search = searchTerm.toLowerCase().trim();

  const matchesSearch =
    order.id.toLowerCase().includes(search) ||
    order.customer.toLowerCase().includes(search) ||
    order.product.toLowerCase().includes(search);

  const matchesStatus =
    statusFilter === "All" || order.status === statusFilter;

  return matchesSearch && matchesStatus;
});

const sortedOrders = [...filteredOrders].sort((a, b) => {

    const valueA = a[sortConfig.key];
    const valueB = b[sortConfig.key];

    let comparison;

    if (typeof valueA === "number") {
      comparison = valueA - valueB;
    } else {
      comparison = String(valueA).localeCompare(String(valueB));
    }

    return sortConfig.direction === "asc"
      ? comparison
      : -comparison;
  });

  const columns = [
    { key: "id", label: "Order ID" },
    { key: "customer", label: "Customer" },
    { key: "product", label: "Product" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "date", label: "Date" }
  ];

  return (
    <div className="orders-page">
      <div className="page-heading">
        <h1>Orders Management</h1>
        <p>Monitor and manage customer orders.</p>
      </div>


<div className="order-controls">
  <input
    type="search"
    placeholder="Search by ID, customer, or product..."
    value={searchTerm}
    onChange={(event) => setSearchTerm(event.target.value)}
    aria-label="Search orders"
  />

  <select
    value={statusFilter}
    onChange={(event) => setStatusFilter(event.target.value)}
    aria-label="Filter orders by status"
  >
    <option value="All">All Statuses</option>
    <option value="Completed">Completed</option>
    <option value="Pending">Pending</option>
    <option value="Processing">Processing</option>
  </select>
</div>

<p className="orders-count">
  Showing {sortedOrders.length} of {orders.length} orders
</p>


      <div className="table-container">
        <table className="orders-table">
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
            {sortedOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>${order.amount.toFixed(2)}</td>
                <td>
                  <span
                    className={`status-badge ${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>{order.date}</td>
              </tr>
            ))}
            {sortedOrders.length === 0 && (
  <tr>
    <td colSpan={6} className="empty-orders">
      No matching orders found.
    </td>
  </tr>
)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
