"use client";
import { useState, useEffect } from 'react';

const MyComponent = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data.users);  
      } catch (error) {
        setError(error.message);
      }
    }
    fetchUsers();
  }, []);

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <div>
      <h1>Client Side Data Featching</h1>
      <h1>Fetched Users</h1>
      {users.length > 0 ? (
        <table border={"1"}>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Mobile</th>
              {/* <th >Iamge</th> */}

            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.phone}</td>
                {/* <td><img src={user.image}/></td> */}

              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyComponent;
