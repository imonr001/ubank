import React from 'react'
import supabase from '@/supabaseClient'
import Router from 'next/router'
function Logout(props) {

    const logoutUser = async () => {
       const res = await supabase.auth.signOut()
        if (res) {
            props.handleLogin
            Router.push('/dashboard')
            

        }
        
    }

  return (
    <button className=" bg-gray-700 text-white rounded-md p-2 text-3xl  hidden md:flex" onClick={logoutUser}  >
    Logout
  </button>
  )
}

export default Logout