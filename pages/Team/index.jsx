import React from "react";

function index() {
  return (
    <div className=" w-[500px]  sm:container  mx-auto">
      <div className=" sm:container  h-[500px] mx-auto  relative  bg-black/60 flex items-center justify-center flex-col ">
        <img
          className=" object-cover  w-full h-full mix-blend-overlay  absolute "
          src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <h1 className=" text-white text-5xl  md:text-7xl font-extrabold border-b-4 border-white">
          {" "}
          Meet the Team
        </h1>
      </div>
      <div className=" grid place-items-center min-h-screen  ">
        <div className=" p-4 max-w-5xl grid gap-4  aspect-square  grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
          <div className=" col-span-2 md:col-span-3 lg:col-span-4 bg-blue-100 p-4 ">
            <p className="  text-2xl sm:text-4xl   font-serif   ">
              We’re not just your bankers, we’re your neighbors. We’re proud to
              serve the communities we live, work, and worship in. Get to know
              our team and the power of personal relationships.
            </p>
          </div>
          <div className="   h-auto  border-b-4 border-blue-500  ">
            <img
              className=" object-cover "
              src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h1 className=" text-left text-2xl font-bold text-blue-800">
              Rick Ryann
            </h1>
            <h2 className=" text-xl italic ">Senior Vice President</h2>
          </div>
          <div className="  h-auto  border-b-4 border-blue-500 ">
            <img
              className=" object-cover"
              src="https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h1 className=" text-left text-2xl font-bold text-blue-800">
              Austin Miller
            </h1>
            <h2 className=" text-xl italic "> Vice President</h2>
          </div>
          <div className=" object-cover h-auto  border-b-4 border-blue-500 ">
          
            <img
              src="https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h1 className=" text-left text-2xl font-bold text-blue-800">
              Kristen Soles
            </h1>
            <h2 className=" text-xl italic "> Real Estate Manager</h2>
          </div>
          <div className=" h-auto object-cover   border-b-4 border-blue-500 ">
            <img
              src="https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h1 className=" text-left text-2xl font-bold text-blue-800">
              Ellen Lin
            </h1>
            <h2 className=" text-xl italic "> Cash Managegment Senior</h2>
          </div>
          <div className=" h-auto object-cover  border-b-4 border-blue-500 ">
            <img
              src="https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h1 className=" text-left text-2xl font-bold text-blue-800">
              James Webber
            </h1>
            <h2 className=" text-xl italic "> Real Estate Lending</h2>
          </div>
          <div className=" h-auto object-cover  border-b-4 border-blue-500 ">
            <img
              src="https://images.pexels.com/photos/2422287/pexels-photo-2422287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              />
            <h1 className=" text-left text-2xl font-bold text-blue-800">
              Nicole Jones
            </h1>
            <h2 className=" text-xl italic "> Cash Management Sales/Team Leader</h2>
              </div>{" "}
            <div className=" h-auto  object-cover border-b-4 border-blue-500">
              <img
                src="https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <h1 className=" text-left text-2xl font-bold text-blue-800">
                Tim Preston
              </h1>
              <h2 className=" text-xl italic "> Financial Center Manager</h2>
            </div>
            <div className=" h-auto  object-cover  border-b-4 border-blue-500">
              <img
                src="https://images.pexels.com/photos/4342400/pexels-photo-4342400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <h1 className=" text-left text-2xl font-bold text-blue-800">
                Nike Samuels
              </h1>
              <h2 className=" text-xl italic "> Cash Management</h2>
            </div>
        </div>
      </div>
     
    </div>
  );
}

export default index;
