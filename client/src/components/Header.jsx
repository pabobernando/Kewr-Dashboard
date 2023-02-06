import { Link } from "react-router-dom";
import logo from "../assets/kewr.png";
import keplr from "../assets/keplr.png"
import React,{useState,useEffect} from "react";

function Header() {

    const [addressKeplr, setAddressKeplr] = useState('');

  //  keplr
 async function handleClick(chain) {
  const chainId = chain ? chain : 'cosmoshub-1'
  await window.keplr.enable(chainId)
  const offlineSigner = window.getOfflineSigner(chainId);
  const accounts = await offlineSigner.getAccounts();
  setAddressKeplr(accounts[0].address)
 }
// akhir keplr

//  Metamask 

  return (
    <header>
    <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center ">
            <a href="/" className="flex items-center">
                <img src={logo} className="mr-3 h-6 sm:h-9" />
                <span className="text-white self-center text-xl font-semibold whitespace-nowrap dark:text-white">Kewr Foundation</span>
            </a>
            <div className="flex items-center lg:order-2 border border-white hover:bg-white">
            <img src={keplr} width="30"/>
            <button onClick={() => handleClick('cosmoshub-1')} className=" text-white hover:text-black font-bold py-1 px-3 rounded">{addressKeplr ? addressKeplr : "Connect Keplr"}</button>
            </div>
        </div>
    </nav>
</header>
  );
}

export default Header;
