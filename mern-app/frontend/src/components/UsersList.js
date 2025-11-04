import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UsersList.css';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/users');
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching users:', err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="user-list-container">
      <h1>Users List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Job Title</th>
            <th>Job Type</th>
            <th>Working Days</th>
            <th>Timings & Duration</th>
            <th>Pay</th>
            <th>Openings</th>
            <th>Contact</th>
            <th>Last Date to Apply</th>
            <th>Shift</th>
            <th>Work Description</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.location}</td>
              <td>{user.jobProviderProfile?.jobTitle || 'N/A'}</td>
              <td>{user.jobProviderProfile?.jobType || 'N/A'}</td>
              <td>{user.jobProviderProfile?.workingDays || 'N/A'}</td>
              <td>{user.jobProviderProfile?.timingsAndDuration || 'N/A'}</td>
              <td>{user.jobProviderProfile?.payDetails || 'N/A'}</td>
              <td>{user.jobProviderProfile?.openings || 'N/A'}</td>
              <td>{user.jobProviderProfile?.contact || 'N/A'}</td>
              <td>
                {user.jobProviderProfile?.lastDateToApply
                  ? new Date(user.jobProviderProfile.lastDateToApply).toLocaleDateString()
                  : 'N/A'}
              </td>
              <td>{user.jobProviderProfile?.shift || 'N/A'}</td>
              <td>{user.jobProviderProfile?.workDescription || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
