import React, { useState, useTransition } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BsCreditCard, BsFiles } from "react-icons/bs";
import { MdAccountBalance } from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";
import { MdOutlineContactSupport } from "react-icons/md";
import supabase from "@/supabaseClient";
import { useEffect } from "react";
import Logout from "../api/Logout";
import Router from "next/router";
import Footer from "../Components/Footer/Footer";
import Link from "next/link";
function home(props) {
  const [logedIn, setLogin] = useState(false);
  const [name, setName] = useState();
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const handleLogin = () => {
    setLogin(!logedIn);
  };

  useEffect(() => {
    const getUser = async () => {
      const res = await supabase.auth.getSession();
      console.log(res.data.session);
      const user = await supabase.auth.getUser();
      console.log(user.data.user?.id);
      if (res.data.session === null) {
        // Router.push('/')  ***** Here for authenticatio to work
      } else if (res.data.session.user?.id === user.data.user?.id) {
        setLogin(true);
        setName(res.data.session.user.user_metadata.firstName);
      }
    };
    getUser();
  }, [logedIn]);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const pay = async () => {
      let { data: balances } = await supabase.from("balances").select("*");
      setUserData([
        {
          account: "Checking",
          balance: balances[0].checking,
        },
        {
          account: "Saving",
          balance: balances[0].saving,
        },
        {
          account: "Credit Card",
          balance: balances[0].creditCard,
        },
      ]);
    };
    pay();
  }, []);

  
  const bal = userData.map((el) => el.balance);
  


  const logoutUser = async () => {
    const res = await supabase.auth.signOut()
     if (res) {
         props.handleLogin
         Router.push('/dashboard')      
     }
     
 }

  return (
    <div className="  h-[800px] w-[500px] sm:h-screen sm:w-full  bg-gray-200   ">
      <div>
        <nav className=" flex items-center justify-between  mx-5 p-4 ">
          <h1 className=" text-5xl   font-extrabold  text-blue-800">UBank</h1>
          <div className=" z-10 md:hidden" onClick={handleClick}>
            {!nav ? (
              <GiHamburgerMenu size={35} />
            ) : (
              <AiOutlineClose size={35} />
            )}
          </div>
          <Logout logedIn={handleLogin} />
        </nav>
        <div className="text-3xl">
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0  w-[500px] sm:w-full h-screen flex flex-col justify-center items-center bg-gray-300"
            }
          >
            <li className="flex items-center justify-between  p-8 ">
              {" "}
              Accounts <MdAccountBalance />{" "}
            </li>
            <Link href={"/dashboard/payment"}>
              <li className=" flex items-center justify-between  p-8">
                {" "}
                Bill Pay & Transfer <GoArrowSwitch />
              </li>
            </Link>

            <li className=" flex items-center justify-between p-8">
              Card Services
              <BsCreditCard />
            </li>
            <li className=" flex items-center justify-between  p-8">
              {" "}
              Statements <BsFiles />
            </li>
            <li className=" flex items-center justify-between   p-8">
              {" "}
              Contact Us <MdOutlineContactSupport />{" "}
            </li>

            <li className=" flex items-center justify-between   p-8 ">
              <button onClick={logoutUser}>Logout</button> 

            </li>
          </ul>
        </div>
      </div>

      {/* <AiOutlineClose /> */}

      <div className=" flex  items-center justify-center  text-3xl sm:text-5xl font-extrabold   px-8  p-5">
        <h1>Welcome Back</h1>
        <h2 className="px-8  text-blue-600">{name}!</h2>
      </div>
      <div className=" flex  flex-row-reverse  items-start  justify-items-center   ">
        <div className="   flex flex-col p-4  text-xl text-center  container max-w-5xl mx-auto  bg-gray-300   h-auto rounded-md   overflow-hidden  ">
          <div className=" bg-gray-100 p-10 rounded-md  ">
            <h1 className="  text-2xl font-bold uppercase">
              Checking & Saving
            </h1>
            <ul className="text-center text-xl font-semibold ">
              <li className="py-5 border-2  rounded-md border-gray-800">
                Checking ${bal[0]}
              </li>
              <li className="py-5 border-2 rounded-md border-gray-800">
                Savings ${bal[1]}
              </li>
            </ul>
          </div>

          <div className=" bg-gray-100 p-10 rounded-md text-xl font-semibold  ">
            <h1 className="  mx-auto text-2xl uppercase font-bold">
              Credit Cards
            </h1>
            <ul className="  text-center ">
              <li className=" py-5 border-2 rounded-md border-gray-800  ">
                Card 1 ${bal[2]}
              </li>
              {/* <li className="py-5 border-2 rounded-md border-gray-800 text-3xl ">
                Card 2 ${"0"}
              </li> */}
            </ul>
          </div>
        </div>
        <div className=" hidden md:flex   bg-blue-800   text-white text-3xl items-center  ">
          <div className=" flex  flex-col  justify-items-center   w-[350px] h-screen text-left   ">
            <ul className="    items-center">
              <li className="flex items-center justify-between  p-8">
                {" "}
                Accounts <MdAccountBalance />{" "}
              </li>
              <Link href={"/dashboard/payment"}>
                <li className=" flex items-center justify-between  p-8">
                  {" "}
                  Bill Pay & Transfer <GoArrowSwitch />
                </li>
              </Link>

              <li className=" flex items-center justify-between p-8">
                Card Services
                <BsCreditCard />
              </li>
              <li className=" flex items-center justify-between  p-8">
                {" "}
                Statements <BsFiles />
              </li>
              <li className=" flex items-center justify-between   p-8">
                {" "}
                Contact Us <MdOutlineContactSupport />{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
home.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
