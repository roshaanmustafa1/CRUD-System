import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleDelete = (e, id) => {
    e.preventDefault();
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res);
        setData(data.filter((user) => user.id !== id));
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-white vh-100">
      <h2 className="mb-5 ">List of The Users</h2>

      <div className="w-75 rounded bg-light border shadow p-4">
        <div className="d-flex justify-content-end">
          <NavLink to="/create" className="btn btn-success">
            Add New Data
          </NavLink>
        </div>
        <table className="table table-striped bg-transparent">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td className="d-flex gap-3">
                  <Link to={`/read/${user.id}`} className="btn btn-success">
                    Read
                  </Link>
                  <Link to={`/update/${user.id}`} className="btn btn-primary">
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(e, user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
