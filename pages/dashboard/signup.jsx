import React, { useState } from "react";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import supabase from "@/supabaseClient";
import Router from "next/router";


function Signup() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
          },
        },
      });
      Router.push('/dashboard')
      // console.log(res);
    }
      
    catch (error) { 
    }
  };

  return (
    <div className="  bg-gray-200   w-[500px] md:w-full h-screen flex   ">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px] bg-white  ">
        <div className=" w-full h-[550px] hidden md:block">
          <img
            className=" h-full w-full object-cover"
            src="https://images.pexels.com/photos/6667892/pexels-photo-6667892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className=" p-4 flex flex-col  justify-around">
          <form onSubmit={handleSubmit}>
            <h1 className=" text-4xl font-bold text-center mb-8  text-blue-800 ">
              UBank
            </h1>
            <div className=" flex flex-col p-2 gap-3   ">
              <input
                type="email"
                className="   border   p-2    "
                placeholder="Enter Email..."
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                className="border p-2   "
                placeholder="Enter Password..."
                name="password"
                onChange={handleChange}
              />
              <input
                type="text"
                className="border p-2   "
                placeholder="Enter First Name..."
                name="firstName"
                onChange={handleChange}
              />
              <input
                type="text"
                className="border p-2   "
                placeholder="Enter Last Name..."
                name="lastName"
                onChange={handleChange}
              />
            </div>
            <button className=" bg-blue-600 w-full my-4 hover:bg-blue-400 text-white">
              Sign Up
            </button>
          </form>
          {/* <p className=" hover:text-blue-500  hover:cursor-pointer" >Not a member? Sign Up Now </p> */}
        </div>

        <div className=" md:w-[700px] flex justify-center items-center md:mx-24     ">
          <h2 className="  text-xl md:text-4xl  text-gray-700 font-bold p-2  ">
            Follow us:
          </h2>
          <ul className="  flex items-center py-10  text-xl  md:text-5xl md:px-12 sm:px-4 ">
            <li className=" px-4">
              <BsTwitter />
            </li>
            <li className=" px-4">
              <BsFacebook />
            </li>
            <li className=" px-4">
              <BsInstagram />
            </li>
            <li className=" px-4">
              <BsLinkedin />
            </li>
            <li className=" px-4">
              <BsYoutube />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Signup;
