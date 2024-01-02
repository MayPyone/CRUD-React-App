import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { deleteUser } from './features/users/userSlice';
import { useNavigate, useParams } from "react-router-dom";
export default function Home() {
    const users = useSelector((state)=>state.user.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDelete = (id) => {
     
      dispatch(deleteUser({ id: id }));
      navigate('/');
    }

    return(
        <div className="container">
            <h2>User's table</h2>
            <Link to='/create' className="btn btn-success my-3">Create </Link>
            <table className="table">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                    users.map((user,index)=>(
                <tr key={ index }>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                <Link to={`/update/${user.id}`} className="btn btn-success my-3">Edit </Link>
                <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
                </td>
               </tr>
                    ))
                }       
              </tbody>
            </table>

        </div>
    )
}