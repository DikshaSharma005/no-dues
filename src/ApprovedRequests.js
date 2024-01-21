import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './ApprovedRequests.css';

const ApprovedRequests = () => {
  const [requests, setRequests] = useState([]);
  const department = localStorage.getItem("department");


  useEffect(() => {
    axios
    .get(`http://localhost:3001/api/approved-requests?department=${department}`)
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [department]);

  return (
    <div className="approved-requests">
       {/* Add the image container here */}
       <div className="image">
                <img src="https://www.logolynx.com/images/logolynx/9f/9f2c4042d28462d69f738e6018bb4ff9.jpeg" alt="Description" />
              </div>
      <Navbar />
      <h1><b>Approved Requests</b></h1>
      <table>
        <thead>
          <tr>
          
            <th>Student Name</th>
            <th>Father Name</th>
            <th>URN</th>
            <th>CRN</th>
            <th>Department</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id}>
              
              <td>{request.studentName}</td>
              <td>{request.fatherName}</td>
              <td>{request.URN}</td>
              <td>{request.CRN}</td>
              <td>{request.department}</td>
              <td>{new Date(request.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedRequests;
