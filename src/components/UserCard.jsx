import React from 'react'
import "./styles/userCard.css"



const UserCard = ({ user, deleteUserByID, setUpdateInfo }) => {

  const handleDelete = () => {
    deleteUserByID(user.id)
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
  }

  return (
    <article className='user'>
      <h2 className='user_name'>{user.firs_name} {user.last_name}</h2>
      <ul className='user_list'>
        <li className='user_item'>
          <span className='user_label'>EMAIL</span>
          <div className='user_value-content'>
            <i class='bx bx-envelope'></i>
            <span className='user_value-email'>{user.email}</span>
          </div>
        </li>

        <li className='user_item'>
          <span className='user_label'>BIRTHDAY</span>
          <div className='user_value-content'>
            <i class='bx bx-gift'></i>
            <span className='user_value-birthday'>{user.birthday}</span>
          </div>
        </li>
      </ul>

      <hr className='user_hr' />

      <footer className='user_footer'>
        <button className='user_btn user_delete' ><i onClick={handleDelete} className='bx bx-trash'></i></button>
        <button className='user_btn user_update' ><i onClick={handleUpdate} className='bx bx-edit-alt'></i></button>
      </footer>
    </article>

  )
}

export default UserCard