import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'
import "./styles/formUser.css"


const FormUser = ({ createNewUser, updateInfo, updateUserByID, setUpdateInfo }) => {

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        reset(updateInfo)

    }, [updateInfo])

    const submit = data => {
        if (updateInfo) {
            // actualiza
            updateUserByID(updateInfo.id, data)
            setUpdateInfo()
        } else {
            // crea
            createNewUser(data)
            console.log(data);
        }

        reset(defaultValues)
    }

    return (
        <div className='form_containt'>
            <form className='form' onSubmit={handleSubmit(submit)}>
                <h3 className='form_title'>{updateInfo ? "Update User Info" : "Create New User"}</h3>
                <div className='form_item'>
                    <label className='form_label' htmlFor="email">Email</label>
                    <input className='form_item' {...register("email")} type="email" id='email' />
                </div>
                <div className='form_item'>
                    <label className='form_label' htmlFor="password">Password</label>
                    <input className='form_item' {...register("password")} type="password" id='password' />
                </div>
                <div className='form_item'>
                    <label className='form_label' htmlFor="first_name">First Name</label>
                    <input className='form_item' {...register("first_name")} type="text" id='first_name' />
                </div>
                <div className='form_item'>
                    <label className='form_label' htmlFor="last_name">Last Name</label>
                    <input className='form_item' {...register("last_name")} type="text" id='last_name' />
                </div>
                <div className='form_item'>
                    <label className='form_label' htmlFor="birthday">Birthday</label>
                    <input className='form_item' {...register("birthday")} type="date" id='birthday' />
                </div>
                <button className='form_btn'>{updateInfo ? "Update" : "Create"}</button>

            </form>
        </div>

    )
}

export default FormUser