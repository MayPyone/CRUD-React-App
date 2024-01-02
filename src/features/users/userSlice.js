import { createSlice } from '@reduxjs/toolkit'
// import { userList } from '../../Data';
const initialState = {
    users: [{name: "may",
     email: "may@gmail.com",
     id: '1cd0e201-6962-42b2-8e51-92358e475c9d'}]
}
export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      addUser: (state,action) => {
        const newUser = action.payload;
        state.users.push(newUser);
      },
     
        updateUser: (state, action) => {
          const { id, email, name } = action.payload;
          const userToUpdate = state.users.find(user => user.id === id);
          if (userToUpdate) {
            userToUpdate.name = name;
            userToUpdate.email = email;
          }
        },

        deleteUser: (state, action) => {
          const { id } = action.payload;
          state.users = state.users.filter(user => user.id !== id);
        }
      
      
      
    }
})
export const {addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer