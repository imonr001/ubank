import React from "react";
import Link from "next/link";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
function Footer() {
  return (
    // <div className="       ">
    //   <div className="bg-blue-800  fixed   md:h-3/4 ">
    //     <h1 className="text-center pt-10 text-xl md:text-5xl text-white font-bold ">
    //       Ubank
    //     </h1>
    //     <div className="" >
    //       <ul className="flex  justify-evenly text-xl  md:text-5xl ">
    //         <Link href={"/about"}>
    //           <li className=" pt-12  text-white  md:hover:text-blue-400">About</li>
    //         </Link>
    //         <Link href={"/lostCards"}>
    //           <li className=" pt-12  text-white  md:hover:text-blue-400">Lost/Stolen Cards</li>
    //         </Link>
    //         <Link href={"/contact"}>
    //           <li className=" pt-12  text-white  md:hover:text-blue-400">Contact Us</li>
    //         </Link>
    //       </ul>
    //     </div>
    //     <div className="  text-center text-white text-xl md:text-5xl font-bold pt-8 flex justify-center w-full  h-full">
    //       <p>Copyright 2023 UBank</p>
    //       <p className=" indent-10">All Rights Reserved</p>
    //     </div>
    //   </div>
    // </div>
    <div className=" md:p-6 flex justify-center  items-center w-[500px] sm:w-full h-[500px] md:h-[500px]  bg-blue-800  ">
      <div className="  text-white       ">
        <h6 className="text-xl md:text-7xl  text-white font-bold p-2  ">UBank</h6>
        <ul className="   text-xl  md:text-5xl md:px-12 px-4 ">
          <li className="py-1">
            <BsTwitter />
          </li>
          <li className="py-2">
            <BsFacebook />
          </li>
          <li className="py-2">
            <BsInstagram />
          </li>
          <li className="py-2">
            <BsLinkedin />
          </li>
          <li className="py-2">
            <BsYoutube />
          </li>
        </ul>
      </div>
      <div className="  text-white px-12 ">
        <h6 className="text-xl md:text-2xl  text-white font-bold">About Us</h6>
        <ul className="flex flex-col   text-sm  md:text-xl ">
          <li>How to Join</li>
          <li>Careers</li>
          <li>Diversity, Equity, & Inclusion</li>
          <li>Senior Leaders</li>
          <li>Board of Directors</li>
          <li>How to Get Involved</li>
          <li>Education Foundation</li>
          <li>Privacy</li>

        </ul>
      </div>
      <div className="  text-white px-12 ">
        <h6 className="text-xl md:text-2xl  text-white font-bold">Service & Support</h6>
        <ul className="   text-sm  md:text-xl ">
          <li>Contact Us</li>
          <li>Locations</li>
          <li>Mobile & Online Banking</li>
          <li>Member Advocate Team</li>
          <li>Homeowner Hardship Assistance</li>
          <li>Accessibility Statement</li>
          <li>Copyright 2023 UBank All Rights Reserved</li>
          {/* <p className="pt-6 text-lg">
            Copyright 2023 UBank All Rights Reserved
          </p> */}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
