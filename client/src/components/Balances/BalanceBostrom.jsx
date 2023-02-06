import React from 'react'
import { SigningStargateClient } from "@cosmjs/stargate";
import { checkIbcListReturnAlias } from '../../utils'
import { useState, useEffect } from "react";
import LogoBoot from "../../assets/boot.png"

function BalanceBostrom() {

    const [AllBalancesBoot, setAllBalancesBoot] = useState()
    const ibcListsBoot = [
    {

    }
  ];

  

  

  useEffect(() => {
    if (!window.keplr) {
      alert("Please install keplr extension");
    } else {
      const chainId = "bostrom";
      async function getAddress() {
        await window.keplr.enable(chainId);
        const offlineSigner = window.keplr.getOfflineSigner(chainId);
        const accounts = await offlineSigner.getAccounts();
        const Address = accounts[0].address;
        const client = await SigningStargateClient.connectWithSigner(
          "https://rpc.cosmos.directory/bostrom",
          offlineSigner
        );
        await client.getAllBalances(Address)
        .then(data => {
        setAllBalancesBoot(data);
        console.log("data boot", data)
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
            
            <img src={LogoBoot} width="70" className="mx-auto"/>
            <ul>
      {AllBalancesBoot && AllBalancesBoot.map(wallet => (
        <li className="text-white" >
          - { checkIbcListReturnAlias(wallet.denom, ibcListsBoot) }: { wallet.amount }
        </li>
      ))}
    </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BalanceBostrom