import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
function MobilView(props) {
  return (
    <div    >
      <div className="  fixed right-8 top-10 visible  " >
        <div className=" hover:cursor-pointer visible lg:invisible" onClick= {props.click} >
          <GiHamburgerMenu size={50} />
        </div>
      </div>
      <div className={props.nav ? "  z-50 fixed left-0 top-0 w-full h-full bg-black/70" : ""}>
        <div className={props.nav ? "  z-50  fixed left-0 top-0 sm:w-[60%] md:w-[45%] h-full bg-gray-200 ease-in duration-500 ":" fixed left-[-160%] top-0  ease-in duration-500 "}>
          <div className=" flex justify-between p-2 ">
          <h1 className="  text-blue-900  font-extrabold p-4  text-7xl ">
        UBank
      </h1>
            <div className="  p-8  shadow-md shadow-gray-500 cursor-pointer rounded-full " onClick={props.click}  >
              <AiOutlineClose size={35} />
            </div>

          </div>
      <div className=" flex justify-start p-10 py-24 ">
              
              <ul className="   ">
              <Link href={"/login"}>
                  <li className=" p-10  text-cyan-900 text-5xl font-bold ">
                    Signin
                  </li>
                </Link>  
              <Link href={"/product"}>
                  <li className=" p-10  text-cyan-900 text-5xl font-bold ">
                    Product{" "}
                  </li>
                </Link>

                <Link href={"/benifits"}>
                  <li className=" p-10 text-cyan-900 text-5xl font-bold">
                    Benefits of Membership
                  </li>
                </Link>
                <Link href={"/financial"}>
                  <li className="p-10 text-cyan-900 text-5xl font-bold">
                    Financial Well-Being
                  </li>
                </Link>
              </ul>
            </div>

        </div>
      </div>
  </div>
  );
}

export default MobilView;
