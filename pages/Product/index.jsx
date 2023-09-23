import React, { useLayoutEffect } from "react";
import HeadlineCard from "../Components/HeadlineCard/HeadlineCard";
import Link from "next/link";
import { BsPiggyBank} from "react-icons/bs";
function index() {
  return (
    <div className=" mx-auto    w-[500px]  sm:container    ">

      <div className="    shadow-lg shadow-blue-800 bg-blue-800 text-center text-white  text-2xl   md:text-7xl font-bold h-56 flex flex-col   justify-center items-center w-full" >
        <h1 className="    p-2"  >Become a member today!</h1>
        <Link href={"/dashboard/signup"} ><button className=" text-3xl border-2 p-2 hover:scale-150 duration-500 hover:bg-blue-400" >Start Here!</button></Link>
    </div>

      <div className=" grid  grid-cols-1 md:grid-cols-2 justify-center     gap-4  m-4   py-4  ">
        <div className="">
          <HeadlineCard
            heading={"Checking"}
            body={"Unique account features"}
            footer={
              "Keep what you've earned — there's no monthly fee. Enjoy peace of mind with no minimum balance.Write as many checks as you want. Get a free, chip-enabled Debit Mastercard®"
            }
          />
        </div>

        <div className="" >
          <HeadlineCard
            heading={"Saving"}
            body={"Unique account features"}
            footer={
              "Maintain your Membership with a $5 minimum balance.Keep what you've earned — there's no monthly fee. Make as many deposits and withdrawals as you'd like. Know your savings are federally insured up to $250,000            "
            }
          />
        </div>
        <div className=" md:row-span-2 md:col-span-2   ">
        <Link href={'/dashboard/signup'}> <HeadlineCard
            heading={"Open Our most popular savings account"}
            body={"New UBank Customers get $100, with qualifying activites"}
            icon={<BsPiggyBank size={100} /> }
          /></Link>
        </div>
        <div className=" ">
          <HeadlineCard
            heading={"Fixed Rate Mortgages"}
            body={"Features of our fixed-rate home loans"}
            footer={
              "Down payments as low as 3%. Rate lock that covers the period between credit approval and closing. No prepayment penalty. Option to pay points at closing in exchange for a lower rate.  "
            }
          />
        </div>
        <div>
          <HeadlineCard
            heading={"New Auto Loans"}
            body={"Features of our auto loans"}
            footer={
              "Enjoy low rates — consistently lower than banks — on loans for new and used cars. Get financing for up to 130% of the car's value. Make no payments for the first 90 days. "
            }
          />
        </div>
        <div>
          <HeadlineCard
            heading={"Personal Loan"}
            body={"How it works"}
            footer={
              "Borrow from $100 to $50,000. Choose a term to fit your budget, up to 60 months. Pay zero fees for origination or early payoff. Flexibility to skip up to three payments over the life of the loan.  "
            }
          />
        </div>
        <div className=" " >
          <HeadlineCard
            heading={"Credit Cards"}
            body={"What you get with every card"}
            footer={
              "D Theft Protection1 and EMV-enabled chip technology. No annual fee, balance transfer fees or cash advance fees. Coverage for rental cars. Access to Priceless® Cities for one-of-a-kind experiences and adventures. "
            }
          />
        </div>
      </div>
    </div>
  );
}

export default index;
