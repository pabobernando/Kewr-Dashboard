import React from "react";
import LogoCrescent from "../../assets/crescent.svg"
import { checkIbcListReturnAlias } from "../../utils";
import { SigningStargateClient } from "@cosmjs/stargate";
import { useState, useEffect } from "react";


function BalanceCrescent() {

  const [AllBalancesCrescent, setAllBalancesCrescent] = useState()
  const ibcListCrescent = [
    {
      "denom" : "ubcre",
      "alias" : "BCRE"
    },
    {
      "denom" : "ucre",
      "alias" : "CRE"
    }
]

useEffect(() => {
  if (!window.keplr) {
    alert("Please install keplr extension");
  } else {
    const chainId = "crescent-1";
    async function getAddress() {
      await window.keplr.enable(chainId);
      const offlineSigner = window.keplr.getOfflineSigner(chainId);
      const accounts = await offlineSigner.getAccounts();
      const Address = accounts[0].address;
      const client = await SigningStargateClient.connectWithSigner(
        "https://rpc.cosmos.directory/crescent",
        offlineSigner
      );
      await client.getAllBalances(Address)
      .then(data => {
      setAllBalancesCrescent(data);
      console.log("data Crescent", data)
});
    }
    getAddress();
  }
}, []);

  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
      <div className="bg-grey border border-cyan-300 border-b-4 rounded-lg shadow-xl p-5">
        <div className="flex flex-row items-center">
          {/* <div className="flex-shrink pr-4">
            <div className="rounded-full  bg-black">
              <img src={LogoOsmo} width="70" className="rounded-full" />
            </div>
          </div> */}
          <div className="flex-1 text-center md:text-center align-center">
            
            <img src={LogoCrescent} width="70" className="mx-auto"/>
            <ul>
      {AllBalancesCrescent && AllBalancesCrescent.map(wallet => (
        <li className="text-white" >
          - { checkIbcListReturnAlias(wallet.denom, ibcListCrescent) }: { wallet.amount }
        </li>
      ))}
    </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceCrescent;
