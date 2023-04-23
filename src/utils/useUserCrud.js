import axios from "axios"
import { useState } from "react"

const useUserCrud = () =>{

    const [users, setUsers] = useState()

    const url = `https://users-crud.academlo.tech/users/`


    // GET
const getAllUsers = () =>{
    axios.get(url)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
}

// POST
const createNewUser = (data) => {
    axios.post(url, data)
    .then(res => {
        console.log(res);
        getAllUsers()})
    .catch(err => console.log(err))
    
}

// DELETE
const deleteUserByID = (id) => {
    const urlDelete = `${url}${id}/`
    axios.delete(urlDelete)
    .then(res => getAllUsers())
    .catch(err => console.log(err))
}

// PATCH o PUT
const updateUserByID = (id, data) => {
    const urlUpdate = `${url}${id}/`
    axios.patch(urlUpdate, data)
    .then(res => getAllUsers())
    .catch(err => console.log(err))
}


return {users, getAllUsers, createNewUser, deleteUserByID, updateUserByID}




}

export default useUserCrud