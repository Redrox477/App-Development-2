import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './AdminDashboard.css';

// Components
import DashboardHome from './DashboardHome';
import Users from './Users';
import Products from './Products';
import Orders from './Orders';

const AdminDashboard = () => {
  return (
    <Router>
      <div className="admin-dashboard">
        <div className="sidebar">
          <div className="sidebar-header">
            Admin Dashboard
          </div>
          <ul className="sidebar-nav">
            <li>
              <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/users" className="nav-link">Users</Link>
            </li>
            <li>
              <Link to="/admin/products" className="nav-link">Products</Link>
            </li>
            <li>
              <Link to="/admin/orders" className="nav-link">Orders</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Switch>
            <Route path="/admin/dashboard" exact component={DashboardHome} />
            <Route path="/admin/users" component={Users} />
            <Route path="/admin/products" component={Products} />
            <Route path="/admin/orders" component={Orders} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AdminDashboard;
