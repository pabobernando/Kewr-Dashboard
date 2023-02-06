import React,{useEffect,useState} from "react";
import axios from "axios";
import LogoIris from '../../assets/irisnet.svg'

function PriceCheckIris({
  onDataLpt3Standard,
  onDataLpt3Token,
  onHasilLpt3,
  onDataLpt6Standard,
  onDataLpt6Token,
  onHasilLpt6,
  onDataLpt4Standard,
  onDataLpt4Token,
  onHasilLpt4
}) {

    const urlLpt3Iris = "https://lcd-iris.keplr.app/irismod/coinswap/pools/lpt-3"
    const urlLpt6Grav = "https://lcd-iris.keplr.app/irismod/coinswap/pools/lpt-6"
    const urlLpt4Usdc = "https://lcd-iris.keplr.app/irismod/coinswap/pools/lpt-4"

  useEffect(() => {
    axios.get(urlLpt3Iris)
    .then(response => {
      if(onDataLpt3Standard){
        onDataLpt3Standard(response.data.pool.standard.amount)
      }
      if(onDataLpt3Token){
        onDataLpt3Token(response.data.pool.token.amount)
      }
    })
    .catch(error => {
      console.log(error)
    })
    axios.get(urlLpt6Grav)
    .then(response => {
      if(onDataLpt6Standard){
        onDataLpt6Standard(response.data.pool.standard.amount)
      }
      if(onDataLpt3Token){
        onDataLpt6Token(response.data.pool.token.amount)
      }
    })
    axios.get(urlLpt4Usdc)
    .then(response => {
      if(onDataLpt4Standard){
        onDataLpt4Standard(response.data.pool.standard.amount)
      }
      if(onDataLpt4Token){
        onDataLpt4Token(response.data.pool.token.amount)
      }
    })
  })


  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
       <div className="bg-gray border border-pink-400 rounded-lg shadow-xl p-5">
    <div className="flex flex-row items-center">
      <div className="flex-shrink pr-4">
          <div className="rounded-full bg-black">
              <img src={LogoIris} width="70"/>
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
        <h1 className="font-bold uppercase text-pink-400 mb-3">- IRIS -</h1>
        <p className="font-bold text-1xl text-pink-400">
              IRIS : {onHasilLpt3 ? onHasilLpt3 : "00000000"}
            </p>

            <p className="font-bold text-1xl text-pink-400">
            GRAV : {onHasilLpt6 ? onHasilLpt6 : "00000000"} 
            </p>

            <p className="font-bold text-1xl text-pink-400">
              USDC : {onHasilLpt4 ? onHasilLpt4 : "00000000"} 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCheckIris;
