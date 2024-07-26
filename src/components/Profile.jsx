import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if(!user) {
        return (
            <>
                <h3>Please Login!!</h3>
            </>
        )
    }

  return (
    <>
        <h2>Hi, {user.username}</h2>
    </>
  )
}

export default Profile