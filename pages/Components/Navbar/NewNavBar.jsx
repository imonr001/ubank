import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
function NewNavBar(props) {
  
  return (
    <div className="flex md:p-10 px-4  justify-between items-center  ">
      <h1 className="  md:px-36 text-blue-900  font-extrabold  text-5xl    ">
        UBank
      </h1>
      <div>
        <ul className="lg:flex    hidden lg:visible ">
          <Link href={"/Product"}>
            <li className=" px-10  text-blue-900 text-3xl font-bold  hover:text-blue-500 hover:border-b-4 border-blue-800">
              Product{" "}
            </li>
          </Link>

          <Link href={"/Benifits"}>
            <li className=" px-10 text-blue-900 text-3xl  font-bold hover:text-blue-500 hover:border-b-4 border-blue-800 ">
              Benefits of Membership
            </li>
          </Link>
          <Link href={"/Team"}>
            <li className="px-10 text-blue-900 text-3xl font-bold hover:text-blue-500 hover:border-b-4 border-blue-800">
             Meet the Team
            </li>
          </Link>

          <Link href={"/dashboard/"}>
            <li className="px-10 text-blue-900 text-3xl  font-bold  hover:text-blue-500 hover:border-b-4 border-blue-800 ">
              Login{" "}
            </li>
          </Link>
        </ul>
      </div>

      <div className=" fixed top-0 md:top-10 right-0 px-4  hover:cursor-pointer lg:hidden ">
        <GiHamburgerMenu size={30} onClick={props.click} />
      </div>

      <div
        className={
          props.nav ? " z-50 fixed left-0 top-0 w-full h-full bg-black/70" : ""
        }
      >
        <div
          className={
            props.nav
              ? "  z-50  fixed left-0 top-0  w-[60%] sm:w-[60%] md:w-[45%] h-full bg-gray-200 ease-in duration-500 "
              : " fixed left-[-110%] top-0  ease-in duration-500 "
          }
        >
          <div className=" flex justify-between  p-2 ">
            <h1 className="  text-blue-900  font-extrabold  text-4xl ">
              UBank
            </h1>
            <div className="    cursor-pointer  " onClick={props.click}>
              <AiOutlineClose size={35} />
            </div>
          </div>
          <div className=" flex justify-start   ">
            <ul className="  flex flex-col p-10     ">
              <Link href={"/dashboard/"}>
                <li className=" py-4  text-cyan-900 text-3xl font-bold ">
                  Login
                </li>
              </Link>
              <Link href={"/Product"}>
                <li className=" py-4 text-cyan-900 text-3xl font-bold ">
                  Product{" "}
                </li>
              </Link>

              <Link href={"/Benifits"}>
                <li className=" py-4 text-cyan-900 text-3xl font-bold">
                  Benefits of Membership
                </li>
              </Link>
              <Link href={"/Team"}>
                <li className="py-4 text-cyan-900 text-3xl font-bold">
                  Meet the Team
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewNavBar;
