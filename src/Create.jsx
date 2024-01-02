import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addUser} from './features/users/userSlice'
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export  function Create() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
// const users =useSelector((state) => state.user.users)
    const handleSubmit = (event) => {
        event.preventDefault();
        const id = uuidv4();
        dispatch(addUser( {id: id,name,email}))
        navigate('/')
    }
    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h2>Add new User</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' className="form-control" placeholder="Enter your name" 
                        onChange={e=> setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Name:</label>
                        <input type="text" name='email' className="form-control" placeholder="Enter your email"
                        onChange={e=> setEmail(e.target.value)} />
                    </div><br/>
                    <button className="btn btn-info">Submit</button>
                </form>

            </div>
           
        </div>
    )
}