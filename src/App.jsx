
import { useEffect, useState } from 'react'
import './App.css'
import useUserCrud from './utils/useUserCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [formClose, setFormClose] = useState(true)
  const [deleteUser, setDeleteUser] = useState(false)

  const { users, getAllUsers, createNewUser, deleteUserByID, updateUserByID } = useUserCrud()


  useEffect(() => {
    getAllUsers()
  }, [])

const handleFormClose = () =>{
  setFormClose(false)
}

  return (
    <div className="App">
      <header className='app_header' >
        <h1 className='app_title'>Users</h1>
        <div className='app_btn-content'>
          <i className='bx bx-plus'></i>
          <button onClick={handleFormClose} className='app_btn-name'>Create New User</button>
        </div>
      </header >

      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserByID={updateUserByID}
        setUpdateInfo={setUpdateInfo}
        formClose={formClose}
        setFormClose={setFormClose}
      />
      <div className='card_content'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserByID={deleteUserByID}
              setUpdateInfo={setUpdateInfo}
              setFormClose={setFormClose}

            />
          ))
        }
      </div>

    </div>
  )
}

export default App
