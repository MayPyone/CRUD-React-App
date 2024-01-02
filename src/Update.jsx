import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from './features/users/userSlice';
import { useNavigate, useParams } from "react-router-dom";

export function Update() {
  const users = useSelector((state) => state.user.users);
  const { id } = useParams();
  const existingUser = users.find(f => f.id === id);
  const defaultName = existingUser ? existingUser.name : ''; // Use default values if user is not found
  const defaultEmail = existingUser ? existingUser.email : ''; // Use default values if user is not found
  const [uname, setName] = useState(defaultName);
  const [uemail, setEmail] = useState(defaultEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser({ id, name: uname, email: uemail }));
    navigate('/');
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h2>Update User</h2>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={uname}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}
