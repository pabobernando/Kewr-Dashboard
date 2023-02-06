import React, { useState,useEffect } from "react";
import BalanceCrescent from "./Balances/BalanceCrescent";
import BalanceDummy from "./Balances/BalanceDummy";
import BalanceOsmosis from "./Balances/BalanceOsmosis";
import PriceCheckCanto from "./PriceCheck/PriceCheckCanto";
import PriceCheckCrescent from "./PriceCheck/PriceCheckCrescent";
import PriceCheckIris from "./PriceCheck/PriceCheckIris";
import PriceCheckOsmo from "./PriceCheck/PriceCheckOsmo";

function PriceCheck() {

  const [isiInput, setIsiInput] = useState()
  
  // state crescent
  const [dataBcre, setDataBcre] = useState()
  const [dataGrav, setDataGrav] = useState()
  const [dataUsd, setDataUsd] = useState()
  const [hasilBcre, setHasilBcre] = useState()
  const [hasilGrav, setHasilGrav] = useState()
  const [hasilUsd, setHasilUsd] = useState()
  // akhir state crescent

  //  state osmo
  const [dataOsmo, setDataOsmo] = useState()
  const [dataZoneGrav, setDataZoneGrav] = useState()
  const [dataZoneIris, setDataZoneIris] = useState()
  const [hasilOsmo, setHasilOsmo] = useState()
  const [hasilZoneGrav, setHasilZoneGrav] = useState()
  const [hasilZoneIris, setHasilZoneIris] = useState()
  //  akhir osmo

  // iris
  const [dataLpt3Standard, setDataLpt3Standard] = useState()
  const [dataLpt3Token, setDataLpt3Token] = useState()
  const [hasilLpt3, setHasilLpt3] = useState()
  const [dataLpt6Standard, setDataLpt6Standard] = useState()
  const [dataLpt6Token, setDataLpt6Token] = useState()
  const [hasilLpt6, setHasilLpt6] = useState()
  const [dataLpt4Standard, setDataLpt4Standard] = useState()
  const [dataLpt4Token, setDataLpt4Token] = useState()
  const [hasilLpt4, setHasilLpt4] = useState()
  // akhir iris

  // canto
  const [dataCantoWeth, setDataCantoWeth] = useState()
  const [hasilCantoWeth, setHasilCantoWeth] = useState()
  const [dataCantoUsdc, setDataCantoUsdc] = useState()
  const [hasilCantoUsdc, setHasilCantoUsdc] = useState()
  const [dataCantoUsdt, setDataCantoUsdt] = useState()
  const [hasilCantoUsdt, setHasilCantoUsdt] = useState()
  const [dataCanto, setDataCanto] = useState()
  const [hasilCanto, setHasilCanto] = useState()
  
  // akhir canto


  // crescent
  const handleDataBcre = value => {
    setDataBcre(value)
  }

  const handleDataGrav = value => {
    setDataGrav(value)
  }

  const handleDataUsd = value => {
    setDataUsd(value)
  }
  // akhir crescent

  // osmo

  const handleDataOsmo = value => {
    setDataOsmo(value)
  }

  const handleDataZoneGrav = value => {
    setDataZoneGrav(value)
  }

  const handleDataZoneIris = value => {
    setDataZoneIris(value)
  }

  // akhir osmo

  // iris
  const handleDataLpt3Standard = value => {
    setDataLpt3Standard(value)
  }

  const handleDataLpt3Token = value => {
    setDataLpt3Token(value)
  }

  const handleDataLpt6Standard = value => {
    setDataLpt6Standard(value)
  }

  const handleDataLpt6Token = value => {
    setDataLpt6Token(value)
  }

  const handleDataLpt4Standard = value => {
    setDataLpt4Standard(value)
  }

  const handleDataLpt4Token = value => {
    setDataLpt4Token(value)
  }

  // akhir iris

  // canto

  const handleDataCantoWeth = value => {
    setDataCantoWeth(value)
  }

  const handleDataCantoUsdc = value => {
    setDataCantoUsdc(value)
  }

  const handleDataCantoUsdt = value => {
    setDataCantoUsdt(value)
  }

  const handleDataCanto = value => {
    setDataCanto(value)
  }

  // akhir canto

  const addPrice = (event) => {
    event.preventDefault()
    setHasilBcre(dataBcre * isiInput)
    setHasilGrav(isiInput * dataBcre / dataGrav)
    setHasilUsd(isiInput * dataUsd)
    setHasilOsmo(isiInput * dataOsmo)
    setHasilZoneGrav(isiInput * dataOsmo / dataZoneGrav)
    setHasilZoneIris(isiInput * dataZoneIris)
    setHasilLpt3(isiInput * dataLpt3Standard / dataLpt3Token)
    setHasilLpt6(isiInput * dataLpt3Standard / dataLpt3Token * dataLpt6Token / dataLpt6Standard)
    setHasilLpt4(isiInput * dataLpt3Standard / dataLpt3Token * dataLpt4Token / dataLpt4Standard)
    setHasilCantoWeth(isiInput * dataCantoWeth / 1000000000000)
    setHasilCantoUsdc(isiInput * dataCantoUsdc / 1000000)
    setHasilCantoUsdt(isiInput * dataCantoUsdt / 1000000)
    setHasilCanto(isiInput * dataCanto / 1000000000000)
  }

  const handleChange = (event) => {
    setIsiInput(event.target.value)
    setHasilBcre("")
    setHasilGrav("")
    setHasilUsd("")
    setHasilOsmo("")
    setHasilZoneGrav("")
    setHasilZoneIris("")
    setHasilLpt3("")
    setHasilLpt6("")
    setHasilLpt4("")
    setHasilCanto("")
    setHasilCantoUsdc("")
    setHasilCantoUsdt("")
    setHasilCantoWeth("")
  }

  return (
    <div
      id="main"
      className="main-content flex-1 bg-gray mt-12 md:mt-2 pb-24 md:pb-5"
    >
      <div className="bg-gray-800 pt-3">
        <div className=" flex flex-wrap justify-between rounded-tl-3xl border border-white p-4 shadow text-2xl text-white">
          <h1 className="font-bold pl-2">Price Checker</h1>
          <form onSubmit={addPrice} >
            <input onChange={handleChange}  placeholder="Atom Amount..." className="bg-gray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 "></input>
          </form>
        </div>
      </div>
      <div className="flex flex-wrap">
        <PriceCheckOsmo 
        onDataOsmo={handleDataOsmo} 
        onDataZoneGrav={handleDataZoneGrav} 
        onDataZoneIris={handleDataZoneIris} 
        onHasilOsmo={hasilOsmo} 
        onHasilZoneGrav={hasilZoneGrav} 
        onHasilZoneIris={hasilZoneIris}/>

        <PriceCheckCrescent 
        onDataBcre={handleDataBcre} 
        onDataGrav={handleDataGrav} 
        onDataUsd={handleDataUsd} 
        onHasilBcre={hasilBcre} 
        onHasilGrav={hasilGrav} 
        onHasilUsd={hasilUsd}/>

        <PriceCheckIris 
        onDataLpt3Standard={handleDataLpt3Standard}
        onDataLpt3Token={handleDataLpt3Token}
        onHasilLpt3={hasilLpt3}
        onDataLpt6Standard={handleDataLpt6Standard}
        onDataLpt6Token={handleDataLpt6Token}
        onHasilLpt6={hasilLpt6}
        onDataLpt4Standard={handleDataLpt4Standard}
        onDataLpt4Token={handleDataLpt4Token}
        onHasilLpt4={hasilLpt4}
        />
        <PriceCheckCanto 
        onDataCantoWeth={handleDataCantoWeth} 
        onHasilCantoWeth={hasilCantoWeth}
        onDataCantoUsdc={handleDataCantoUsdc}
        onHasilCantoUsdc={hasilCantoUsdc}
        onDataCantoUsdt={handleDataCantoUsdt}
        onHasilCantoUsdt={hasilCantoUsdt}
        onDataCanto={handleDataCanto}
        onHasilCanto={hasilCanto}
        />
        <PriceCheckCrescent />
        <PriceCheckIris />
        <PriceCheckOsmo />
      </div>
    </div>
  );
}

export default PriceCheck;
