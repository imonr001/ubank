import React from "react";
import { ImHome } from "react-icons/im";
import { BsCreditCard, BsFillCarFrontFill } from "react-icons/bs";

function index() {
  return (
    <div className="    ">
      <div className="w-[500px]  h-[500px] sm:container relative  text-center   mx-auto  shadow-lg shadow-blue-600">
        <img
          className=" object-cover   sm:object-center  w-full h-full absolute mix-blend-overlay "
          src="https://images.pexels.com/photos/725255/pexels-photo-725255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <div className="p-10 text-white text-7xl font-extrabold ">
          <h1>Benefits</h1>
        </div>
      </div>

      <div className="  w-[500px] sm:container   mx-auto py-10 ">
        <h1 className="text-center text-4xl font-bold p-4 border-b-2 border-blue-700  ">
          {" "}
          Todays Rates
        </h1>
        <ul className="grid   gap-4    justify-items-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  p-6   font-bold ">
          <div className=" border-4 p-24 bg-blue-100 rounded-xl   hover:scale-110 hover:bg-blue-300 ">
            <li className=" flex flex-col items-center  text-2xl   ">
              Mortgage
              <p>
                {" "}
                As low as{" "}
                <span className="  text-green-600  font-extrabold">
                  {" "}
                  5.85%
                </span>{" "}
              </p>
              <ImHome size={45} />
            </li>

            <div className=" py-2 " >
              <h1 className=" text-xl text-center" >Fixed-Rate Mortgage</h1>
              <p className=" py-2 font-medium text-left">If you're looking for a low payment that won't ever increase, and plan on staying in your home at least five years, a fixed-term mortgage may be right for you.</p>
            </div>
          </div>
          <div className=" border-4 p-24 bg-blue-100 rounded-xl   hover:scale-110 hover:bg-blue-300 ">
            <li className=" flex flex-col items-center  text-2xl     ">
              Credit Card
              <p>
                {" "}
                As low as{" "}
                <span className="  text-green-600  font-extrabold">
                  {" "}
                  13.75%
                </span>{" "}
              </p>
              <BsCreditCard size={45} />
            </li>
            <div className=" py-2 " >
              <h1 className=" text-xl text-center" >Inspire MasterCard</h1>
              <p className=" py-2 font-medium text-left">As with all our credit cards, you'll enjoy our everyday low interest rates, and because we charge no annual, balance transfer, or cash advance fees, you'll save more than with other higher rate cards.</p>
            </div>
          </div>
          <div className=" border-4 p-24 bg-blue-100 rounded-xl   hover:scale-110 hover:bg-blue-300 ">
            <li className=" flex flex-col items-center  text-2xl   ">
              Auto Loans
              <p>
                {" "}
                As low as{" "}
                <span className="  text-green-600  font-extrabold">
                  {" "}
                  5.85%
                </span>{" "}
              </p>
              <BsFillCarFrontFill size={45} />
            </li>
            <div className=" py-2 " >
              <h1 className=" text-xl text-center" >New Auto Loans</h1>
              <p className=" py-2 font-medium text-left">We offer a range of competitive rates and flexible terms to fit almost every financial situation. Get pre-approved and visit the dealer with your financing in hand.</p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default index;
