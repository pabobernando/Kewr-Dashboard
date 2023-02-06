import React from "react";
import SendCoin from "../components/SendCoin";
import SendIbcCoin from "../components/SendIbcCoin";


function PageTwo() {
  return (
  <div className="flex flex-row justify-around">
      <SendCoin />
      <SendIbcCoin />
</div>
  );
}

export default PageTwo;
