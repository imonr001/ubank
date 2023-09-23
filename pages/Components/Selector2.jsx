import supabase from "@/supabaseClient";
import React, { useEffect, useState } from "react";
import Select from "react-select";

// function Selector2({ ...props }) {

//   const options = props.data.map((op) => ({
//     label: op.account,
//     value: op.balance,
//   }));

//   const options2 = props.data.map((op) => ({
//     label: op.account,
//     value: op.balance,
//   }));

  function Selector2({ data }) {


  const [choice, setChoice] = useState([]);
  const [choice2, setChoice2] = useState([]);
  const [amount, setAmount] = useState(null);
  const balance = Object.values(choice);
    const [uData, setUData] = useState(null);
    useEffect(() => {
      setUData(data);
})
    
      
    const options = data.map((op) => ({
      label: op.account,
      value: op.balance,
    }));
  
    const options2 = data.map((op) => ({
      label: op.account,
      value: op.balance,
    }));
    
  const option2 = options2.filter((el) => el.label != choice.label);
  const balance2 = Object.values(choice2);

  // const checkAmount = async () => {
  //   if (amount < 0) {
  //     return alert("please enter a proper amount");
  //   }
  //   if (amount > balance[1]) return alert("Not enough in balance");
  //   else {
  //     alert("Success");
  //     if (choice2.label === "Saving") {
  //       const newBal = amount+balance2
  //       const { error } = await supabase.from("balances").upsert({ saving: 1 }).select();
  //       console.log(error)
  //     } else if (choice2.label === "Checking") {
  //       const { data } = await supabase.from("balances").upsert();
  //     } else {
  //     }
  //     const { data } = await supabase.from("balances").upsert();
  //   }
  // };

  // console.log(choice2);

  return (
    <div className=" flex flex-col   items-center justify-center  text-lg  font-bold  ">
      <div className="flex items-center p-10 ">
        <h1 className=" px-4   "> From </h1>
        <Select
          className="px-4"
          options={options}
          defaultValue={choice}
          placeholder="Select from where..."
          onChange={(choice) => setChoice(choice)}
          name="select"
        />
        <h2 className="px-4">Balance </h2>${balance[1]}
      </div>
      <div className=" flex items-center p-10">
        <h1 className=" px-4 "> To </h1>
        <Select
          className="px-4"
          options={option2}
          defaultValue={choice2}
          placeholder="Select to where..."
          onChange={(choice2) => setChoice2(choice2)}
          name="select"
        />
        <h2 className="px-4">Balance </h2>${balance2[1]}
      </div>

      <div className=" flex items-center p-10 ">
        <label className="px-10" htmlFor="amount">
          Amount
        </label>
        $
        <input
          className="bg-gray-300 text-center"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className=" mx-10 bg-blue-500 text-white rounded-md p-2  "
          // onClick={checkAmount}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Selector2;
