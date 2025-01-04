import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Create() {
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
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
        onSubmit={handleSubmit}
        className="w-50 d-flex flex-column gap-4 p-5 bg-light shadow"
      >
        <input
          type="text"
          placeholder="Enter Name"
          className="d-flex px-3 py-3  border-0 shadow form-control"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          name="name"
        />
        <input
          type="text"
          placeholder="Enter Username"
          className="d-flex px-3 py-3  border-0 shadow form-control"
          onChange={(e) => setValues({ ...values, username: e.target.value })}
          name="username"
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="d-flex px-3 py-3  border-0 shadow form-control"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          name="email"
        />
        <input
          type="number"
          placeholder="Enter Phone"
          className="d-flex px-3 py-3  border-0 shadow form-control"
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
          name="phone"
        />
        <input
          type="text"
          placeholder="Enter Website"
          className="d-flex px-3 py-3  border-0 shadow form-control"
          onChange={(e) => setValues({ ...values, website: e.target.value })}
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

export default Create;
