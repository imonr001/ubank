import React, { useState, useEffect } from "react";

function Selector(props) {
  const [select, setSelect] = useState("");
  const [select2, setSelect2] = useState("");

  const choices = ["Checking", "Saving", "Credit Card"];
  const [value, setvalue] = useState("");

  const [balance, setBalance] = useState(0);
  


  const changeSelectOptionHandler = (event) => {
    const { name, value } = event.target;
    setSelect((next) => {
      return { ...next, [name]: value };
    });
    setvalue(value);

  };
  


 
  let keys = Object.values(select);
  const list = choices.filter((choice) => choice != keys);
  // const options = choices.map((el) => <option key={el}>{el}</option>);
  const options = list.map((el) => <option key={el}>{el}</option>);

  console.log(select)
  console.log(select2)



  useEffect(() => {
    const valueHandler = () => {
      if (value === "Checking") {
        setBalance(props.data.checking);
       
       
      } else if (value === "Saving") {
        setBalance(props.data.saving);
     
      } else {
        setBalance(props.data.creditCard);
     
      }
    };
    valueHandler();
  }, [value]);


  const newChoices = options.map(item => item.key)





  return (
    <div className=" flex justify-center items-center h-full">
      <form
        action=""
        className=" bg-white w-full h-full flex items-center justify-between p-24  "
      >
        <div className=" ">
          <h1 className="px-10">From</h1>
          <label className="" htmlFor="money">
            <select
              className="bg-gray-200 "
              name="option1"
              id=" money"
              onChange={changeSelectOptionHandler}
            >
              <option> . </option>
              <option> Checking </option>
              <option> Saving </option>
              <option> Credit Card </option>
            </select>
            <br />${balance}
          </label>
        </div>

        <div>
          <h1>Amount</h1>$
          <input className="bg-gray-300" type="number" />
        </div>
        <div>
          <div>
            <h1>To</h1>
            <select className=" bg-gray-200" name="option2">
              {options }
            </select>
            <br />$
          </div>
        </div>
      </form>
    </div>
  );
}

export default Selector;

//{ choice.map(choices => choices.label)  }
