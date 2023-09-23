import React, { useEffect, useState } from "react";
import Selector from "../Components/Selector";
import supabase from "@/supabaseClient";
import Selector2 from "../Components/Selector2";


function payment() {


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
          balance: balances[0].saving
        },
        {
          account: "Credit Card",
          balance: balances[0].creditCard,
        },
      ]);
    };
    pay();
  }, []);

  return (
    <div className=" w-[500px] h-[500px]  sm:container lg:max-w-[3000px]   mx-auto  ">
      <div className=" w-full h-full flex mx-auto flex-col items-center justify-center  ">
        {/* <Selector data = {userData}  /> */}
        <Selector2 data={userData} />
      </div>
      </div>
    
    
    
  );
}

export default payment;
