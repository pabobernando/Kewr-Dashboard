import React,{useState, useEffect} from "react";
import axios from "axios";
import LogoOsmo from "../../assets/osmosis.svg"


function PriceCheckOsmo({onDataOsmo,onDataZoneGrav,onDataZoneIris,onHasilOsmo,onHasilZoneGrav,onHasilZoneIris}) {

    const urlOsmo = "https://osmosis-api.polkachu.com/osmosis/gamm/v1beta1/pools/1/prices?base_asset_denom=uosmo&quote_asset_denom=ibc%2F27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
    const urlOsmoGrav = "https://api.osl.zone/osmosis/gamm/v1beta1/pools/625/prices?base_asset_denom=uosmo&quote_asset_denom=ibc%2FE97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44"
    const urlOsmoIris = "https://osmosis-api.polkachu.com/osmosis/gamm/v1beta1/pools/8/prices?base_asset_denom=ibc%2F7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0&quote_asset_denom=ibc%2F27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"

  useEffect(() => {
    axios.get(urlOsmo)
        .then(response => {
         console.log("osmo",response.data.spot_price)
         if(onDataOsmo){
          onDataOsmo(response.data.spot_price)
         }
    })
        .catch(error => {
        console.log(error)
    })
    axios.get(urlOsmoGrav)
        .then(response => {
            console.log(response.data.spot_price)
            if(onDataZoneGrav){
              onDataZoneGrav(response.data.spot_price)
            }
        })
        .catch(error => {
            console.log(error)
        })
    axios.get(urlOsmoIris)
        .then(response => {
            console.log("iki iris e osmo",response.data.spot_price)
            if(onDataZoneIris){
              onDataZoneIris(response.data.spot_price)
            }
        })
        .catch(error => {
            console.log(error)
        })
  })

  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
       <div className="bg-gray border border-purple-400 rounded-lg shadow-xl p-5">
    <div className="flex flex-row items-center">
    <div className="flex-shrink pr-4">
          <div className="rounded-full bg-black">
              <img src={LogoOsmo} width="70"/>
            </div>
          </div>
      <div className="flex-1 text-right md:text-center">
        <h1 className="font-bold uppercase text-purple-400 mb-3">- Osmosis -</h1>
        <p className="font-bold text-1xl text-purple-400">
              OSMO : {onHasilOsmo ? onHasilOsmo : "00000000"}
            </p>

            <p className="font-bold text-1xl text-purple-400">
              GRAV : {onHasilZoneGrav ? onHasilZoneGrav : "00000000"}
            </p>

            <p className="font-bold text-1xl text-purple-400">
              IRIS : {onHasilZoneIris ? onHasilZoneIris : "00000000"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCheckOsmo;
