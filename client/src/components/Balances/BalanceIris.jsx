import React, { useState,useEffect } from "react";
import LogoIris from "../../assets/irisnet.svg";
import { checkIbcListReturnAlias } from "../../utils";
import { SigningStargateClient } from "@cosmjs/stargate";

function BalanceIris() {

  const [AllBalancesIris, setAllBalancesIris] = useState()
  const ibcListIris = [
    {
      "denom" : "uiris",
      "alias" : "IRIS"
    },
    {
      "denom" : "ibc/6DF82C1C886C15A5D1F514D30318C7C1431B08EABE7658E6A582CCFC52D8E0AB",
      "alias" : "IOV (STARNAME/Channel-32)"
    },
    {
      "denom" : "ibc/E244B968EE0D1EC047E7516F6ABECE7B68E9FD93B4BD8D08D13642247416BB17",
      "alias" : "WETH (GRAVITY/Channel-29)"
    },
    {
      "denom" : "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
      "alias" : "ATOM (Cosmos"
    },
    {
      "denom" : "uiris",
      "alias" : "IRIS"
    },
    {
      "denom" : "htltbcbusd",
      "alias" : "BUSD"
    },
    {
      "denom" : "htltbcbnb",
      "alias" : "BNB"
    }
  ];
  

  useEffect(() => {
    if (!window.keplr) {
      alert("Please install keplr extension");
    } else {
      const chainId = "irishub-1";
      async function getAddress() {
        await window.keplr.enable(chainId);
        const offlineSigner = window.keplr.getOfflineSigner(chainId);
        const accounts = await offlineSigner.getAccounts();
        const Address = accounts[0].address;
        const client = await SigningStargateClient.connectWithSigner(
          "https://rpc-iris.keplr.app",
          offlineSigner
        );
      await client.getAllBalances(Address)
      .then(data => {
      setAllBalancesIris(data);
      console.log("iki IRIS",data);
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
            
            <img src={LogoIris} width="70" className="mx-auto"/>
            <ul>
      {AllBalancesIris && AllBalancesIris.map(wallet => (
        <li className="text-white" >
          - { checkIbcListReturnAlias(wallet.denom, ibcListIris) }: { wallet.amount }
        </li>
      ))}
    </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceIris;
