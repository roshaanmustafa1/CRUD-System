import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

function Read() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-50">
        <h2>User Details</h2>
        <div>
          <p>ID: {data.id}</p>
          <p>Name: {data.name}</p>
          <p>Username: {data.username}</p>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <p>Website: {data.website}</p>
        </div>

        {/* {data ? (
          <div>
            <p>ID: {data.id}</p>
            <p>Name: {data.name}</p>
            <p>Username: {data.username}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Website: {data.website}</p>
          </div>
        ) : (
          <p>Loading user details...</p>
        )} */}

        <div className="d-flex gap-4">
          <NavLink to={`/update/${id}`} className="btn btn-primary">
            Edit
          </NavLink>
          <NavLink to="/" className="btn btn-success">
            Back
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Read;
