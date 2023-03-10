import React from "react";

function BalanceDummy() {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
      <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className="rounded-full p-5 bg-green-600">
              <i className="fas fa-tasks fa-2x fa-inverse"></i>
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h2 className="font-bold uppercase text-gray-600">No Data</h2>
            <p className="font-bold text-3xl">No price</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceDummy;
