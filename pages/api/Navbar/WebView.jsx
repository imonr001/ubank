import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

function WebView() {
  return (
    <div className="  max-w-full flex justify-center items-center    ">
      <h1 className=" px-5 py-10 mx-6 text-blue-900  font-extrabold   text-5xl ">
        UBank
      </h1>
      <ul className="  ml-10 flex items-center invisible lg:visible py-10 px-10  ">
        <Link href={"/product"}>
          <li className=" px-2  ml-16  text-blue-900 text-2xl font-bold  hover:text-blue-500 ">Product </li>
        </Link>

        <Link href={"/benifits"}>
          <li className="ml-16 px-2  text-blue-900 text-2xl font-bold hover:text-blue-500 ">
            Benefits of Membership
          </li>
        </Link>
        <Link href={"/financial"}>
          <li className="ml-16 px-2 text-blue-900 text-2xl font-bold hover:text-blue-500 ">
            Financial Well-Being
          </li>
        </Link>
        
        <Link href={"/login"}>
          <li className=" ml-16 px-8 text-blue-900 text-2xl font-bold  hover:text-blue-500 ">Login </li>
        </Link>
      </ul>
    </div>
  );
}

export default WebView;
