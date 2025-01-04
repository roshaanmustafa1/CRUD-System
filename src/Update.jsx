import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, NavLink, useParams } from "react-router-dom";

function Update() {
  // const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/users/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <form
        className="w-50 d-flex flex-column gap-4 p-5 bg-light shadow"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter Name"
          className="d-flex px-3 py-3  border-0 shadow form-control"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          value={values.name}
          name="name"
        />
        <input
          type="text"
          placeholder="Enter Username"
          className="d-flex px-3 py-3  border-0 shadow form-control"
          onChange={(e) => setValues({ ...values, username: e.target.value })}
          value={values.username}
          name="username"
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="d-flex px-3 py-3  border-0 shadow form-control"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          value={values.email}
          name="email"
        />
        <input
          type="text"
          placeholder="Enter Phone"
          className="d-flex px-3 py-3  border-0 shadow form-control"
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
          value={values.phone}
          name="phone"
        />
        <input
          type="text"
          placeholder="Enter Website"
          className="d-flex px-3 py-3  border-0 shadow form-control"
          onChange={(e) => setValues({ ...values, website: e.target.value })}
          value={values.website}
          name="website"
        />
        <div className="d-flex gap-4">
          <button type="submit" className="btn btn-success px-5 py-2">
            Submit
          </button>
          <NavLink to="/" className="btn btn-primary px-5 py-2">
            Back
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Update;
