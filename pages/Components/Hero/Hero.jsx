import React from "react";
import Image from "next/image";
import HeadlineCard from "../HeadlineCard/HeadlineCard";
import { BsPiggyBank, BsCreditCard } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import Footer from "../Footer/Footer";
function Hero() {
  return (
    // <div  className="    " >
    //   <div>
    //     <div className=" flex justify-center text-center   ">
    //       <h1 className=" absolute z-10    text-5xl sm:text-3xl md:text-5xl lg:text-7xl py-20 md:py-32 text-white font-bold ">
    //         Keeping Your Interest at Heart
    //       </h1>
    //     </div>
    //     <div className="  relative  h-screen    max-w-5xl  sm:max-w-[95%]  mx-auto     sm:h-[450px] lg:h-[600px]  ">
    //       <Image
    //         className=" rounded-md   max-w-[1650]"
    //         // src={
    //         //   "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //         // }
    //         src={
    //           "https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //         }
    //         fill
    //         style={{ objectFit: "cover", objectPosition: "center " }}
    //         alt="people"
    //         unoptimized
    //         priority="false"
    //       />
    //     </div>
    //   </div>

    //   <div className="mx-10 pt-14 h-[900px]  sm:h-[450px] lg:h-[600px]   ">
    //     <div className="  grid   justify-items-center    md:grid-cols-2 lg:grid-cols-3  gap-6   ">
    //       <HeadlineCard  icon = {<BsPiggyBank size={60}/>} heading = {"Personal Savings"} body = {"Helping dreams become reality"} footer= {"Savings accounts make it easy for you to build a financial security blanket for your future. They help you save for emergencies, as well as large purchases."} />
    //       <HeadlineCard  icon = {<ImHome size={60}/>} heading = {"Home Loans"} body = {"Find what meets your needs"} footer= {"UBank will help you find the loan that's right for you and answer and questions you have along the way."} />
    //       <HeadlineCard  icon = {<BsCreditCard size={60}/>} heading = {"Credit Cards"} body = {"We have the right card for you"} footer= {"With cash back, savings on interest, and travel rewards a long anticipated vacation or short weekend adventure Ubank can help make it happen."} />
    //     </div>
    //     <Footer/>
    //   </div>

    // </div>
    <>
      <div className="  mx-auto  w-[500px] sm:container ">
        {/* //relative flex  justify-center  object-contain   h-[300px] max-w-[390px]  sm:max-w-[1650px] sm:h-[700px] sm:mx-auto mx-2 */}
        <div className="   relative    mx-auto  h-[250px]  md:h-[500px]  sm:max-w-[1650px] min-w-[500px]   ">
          <h1 className=" z-10    relative text-center   text-2xl md:text-5xl lg:text-7xl py-20 md:py-32 text-white font-bold ">
            Keeping Your Interest at Heart
          </h1>
          <Image
            className="rounded-md"
            // src={
            //   "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // }
            src={
              "https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            fill
            style={{ objectFit: "cover", objectPosition: "center " }}
            alt="people"
            unoptimized
            priority="false"
            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* <div className="   h-full py-10   ">
          <div className="    gap-6 sm:2 justify-normal grid md:grid-cols-2 lg:grid-cols-3      ">
            <HeadlineCard
              icon={<BsPiggyBank size={100} />}
              heading={"Personal Savings"}
              body={"Helping dreams become reality"}
              footer={
                "Savings accounts make it easy for you to build a financial security blanket for your future. They help you save for emergencies, as well as large purchases."
              }
            />
            <HeadlineCard
              icon={<ImHome size={100} />}
              heading={"Home Loans"}
              body={"Find what meets your needs"}
              footer={
                "UBank will help you find the loan that's right for you and answer and questions you have along the way."
              }
            />
            <HeadlineCard
              icon={<BsCreditCard size={100} />}
              heading={"Credit Cards"}
              body={"We have the right card for you"}
              footer={
                "With cash back, savings on interest, and travel rewards a long anticipated vacation or short weekend adventure Ubank can help make it happen."
              }
            />
          </div> */}
        
        
          <div className=" py-10 w-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3   gap-4   justify-items-center mx-auto   ">
            <HeadlineCard
              icon={<BsPiggyBank size={100} />}
              heading={"Personal Savings"}
              body={"Helping dreams become reality"}
              footer={
                "Savings accounts make it easy for you to build a financial security blanket for your future. They help you save for emergencies, as well as large purchases."
              }
            />
            <HeadlineCard
              icon={<ImHome size={100} />}
              heading={"Home Loans"}
              body={"Find what meets your needs"}
              footer={
                "UBank will help you find the loan that's right for you and answer and questions you have along the way."
              }
            />
            <HeadlineCard
              icon={<BsCreditCard size={100} />}
              heading={"Credit Cards"}
              body={"We have the right card for you"}
              footer={
                "With cash back, savings on interest, and travel rewards a long anticipated vacation or short weekend adventure Ubank can help make it happen."
              }
            />
        

          {/* <div className="pt-2">
          <Footer />
        </div> */}
        </div>
        <div className=" grid place-items-center  sm:gap-10 grid-row-1   sm:grid-cols-2  grid-flow-col   ">
          <div className="sm:row-span-2 col-span-2" >
          <img src="https://images.pexels.com/photos/4569304/pexels-photo-4569304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className=" ">
          <img src="https://images.pexels.com/photos/2480608/pexels-photo-2480608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
        </div>
     
      </div>
    </>
  );
}

export default Hero;
