import React,{useEffect, useState} from "react";
import LogoOsmo from '../../assets/osmosis.svg';
import { SigningStargateClient } from "@cosmjs/stargate";
import { checkIbcListReturnAlias } from '../../utils'

function BalanceOsmosis() {

  const [AllBalancesOsmo, setAllBalancesOsmo] = useState()
  const ibcListsOsmosis = [
    {
        "denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        "alias": "ATOM (ATOM/Channel-0)"
      },
      {
        "denom": "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
        "alias": "EVMOS (EVMOS/Channel-204)"
      },
      {
        "denom": "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0",
        "alias": "LUNC (terra-luna/Channel-72)"
      },
      {
        "denom": "ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4",
        "alias": "BOOT (BOSTROM/Channel-95)"
      },
      {
        "denom": "ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9",
        "alias": "LUNA (Terra 2.0/Channel-251)"
      },
      {
        "denom": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
        "alias": "USDC (Axelar/Channel-208)"
      },
      {
        "denom": "uosmo",
        "alias": "OSMO"
      },
      {
        "denom": "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
        "alias": "DVPN (Sentinel/Channel-2)"
      },
      {
        "denom" : "ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC",
        "alias" : "MNTL"
      }
  ];

  

  

  useEffect(() => {
    if (!window.keplr) {
      alert("Please install keplr extension");
    } else {
      const chainId = "osmosis-1";
      async function getAddress() {
        await window.keplr.enable(chainId);
        const offlineSigner = window.keplr.getOfflineSigner(chainId);
        const accounts = await offlineSigner.getAccounts();
        const Address = accounts[0].address;
        const client = await SigningStargateClient.connectWithSigner(
          "https://osmosis-rpc.stakely.io",
          offlineSigner
        );
        await client.getAllBalances(Address)
        .then(data => {
        setAllBalancesOsmo(data);
        console.log("data osmo", data)
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
            
            <img src={LogoOsmo} width="100" className="mx-auto"/>
            <ul>
      {AllBalancesOsmo && AllBalancesOsmo.map(wallet => (
        <li className="text-white" >
          - { checkIbcListReturnAlias(wallet.denom, ibcListsOsmosis) }: { wallet.amount }
        </li>
      ))}
    </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceOsmosis;
