import React from "react";

function HeadlineCard(props) {
  return (
    // <div className="    flex flex-col justify-between mx-auto  min-w-[400px] bg-blue-700    border  border-gray-300 rounded-md   ">
    //   <div className=" p-4   w-full ">
    //     <p className="  font-bold  text-left text-white text-4xl">{props.heading}</p>
    //   </div>
    //   <div className=" p-4  bg-white h-[350px] sm:h-[350px] lg:h-[450px]  text-left   mx-auto ">
    //     <p className="text-3xl">{props.body}</p>
    //     <div className=" pt-5  text-left">

    //       <p className="text-xl  " >{props.footer}</p>

    //       <div className="flex justify-center pt-10 ">
    //               {props.icon}
    //           </div>
    //     </div>
    //           {/* <div className=" mx-40 ">
    //               {props.icon}
    //           </div> */}

    //   </div>
    // </div>
    // <div className=" mx-auto w-[500px] flex  justify-evenly      bg-blue-700   border  border-gray-300 rounded-md   ">
    //   <div className="flex  h-full w-full flex-col  text-center " >
    //          <p className="   font-bold   text-white text-2xl md:text-5xl">
    //     {props.heading}
    //   </p>

    //   <div className="bg-white flex flex-col  h-full  justify-evenly items-center ">
    //     <p className="  text-lg md:text-4xl">{props.body}</p>

    //     <p className="md:text-2xl  ">{props.footer}</p>

    //      {props.icon}
    //   </div>
    //     </div>
    // </div>
    <div className=" border-4     ">
      <div className=" flex flex-col items-center text-center      ">
        <p className="  bg-blue-500 w-full   p-2 font-bold   text-gray-100 text-2xl md:text-5xl">
          {props.heading}
        </p>
        <p className="  p-2 text-lg md:text-4xl">{props.body}</p>
        <p className=" p-2  md:text-xl  ">{props.footer}</p>
        {props.icon}
      </div>
    </div>
  );
}

export default HeadlineCard;
