import {Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";


export default function AdminLayout() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 m-4">
        <Outlet />
      </div>
       <div>
          <ul className="navbar-nav d-flex flex-row align-items-center">
            <li className="nav-item me-2">
              <Link className="btn btn-outline-info btn-sm" to="/products">
                User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-warning btn-sm" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
       </div>
    </div>
  );
}