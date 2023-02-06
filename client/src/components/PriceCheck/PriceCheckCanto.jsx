import React,{useState, useEffect} from 'react'
import axios from 'axios'

function PriceCheckCanto({
    onDataCantoWeth,
    onHasilCantoWeth,
    onDataCantoUsdc,
    onHasilCantoUsdc,
    onDataCantoUsdt,
    onHasilCantoUsdt,
    onDataCanto,
    onHasilCanto,
}) {
    const urlCanto = "https://slingshot.finance/api/v3/trade/"


    useEffect(() => {
            // weth
        axios({
            method: 'post',
            url: urlCanto,
            headers: {
              'Content-Type': 'application/json',
              'liquidityzone': 'canto'
            },
            data: JSON.stringify({
                fromAmount: "1",
                from: "0xeceeefcee421d8062ef8d6b4d814efe4dc898265",
                gasOptimized: false,
                limit: "99",
                threeHop: true,
                to: "0x5fd55a1b9fc24967c4db09c513c3ba0dfa7ff687",
                _unsafe: false
            })
          })
            .then(response => {
                console.log("CANTO",response.data.estimatedOutput)
                if(onDataCantoWeth){
                    onDataCantoWeth(response.data.estimatedOutput)
                }
            })
            .catch(error => console.error(error));
                // akhir weth

            // usdc
            axios({
                method: 'post',
                url: urlCanto,
                headers: {
                  'Content-Type': 'application/json',
                  'liquidityzone': 'canto'
                },
                data: JSON.stringify({
                    fromAmount: "1000000",
                    from: "0xeceeefcee421d8062ef8d6b4d814efe4dc898265",
                    gasOptimized: false,
                    limit: "99",
                    threeHop: true,
                    to: "0x80b5a32e4f032b2a058b4f29ec95eefeeb87adcd",
                    _unsafe: false
                })
              })
                .then(response => {
                    console.log("USDC",response.data.estimatedOutput)
                    if(onDataCantoUsdt){
                        onDataCantoUsdt(response.data.estimatedOutput)
                    }
                })
                .catch(error => console.error(error));
            // akhir usdc

            //  usdt

            axios({
                method: 'post',
                url: urlCanto,
                headers: {
                  'Content-Type': 'application/json',
                  'liquidityzone': 'canto'
                },
                data: JSON.stringify({
                    fromAmount: "1000000",
                    from: "0xeceeefcee421d8062ef8d6b4d814efe4dc898265",
                    gasOptimized: false,
                    limit: "99",
                    threeHop: true,
                    to: "0xd567b3d7b8fe3c79a1ad8da978812cfc4fa05e75",
                    _unsafe: false
                })
              })
                .then(response => {
                    console.log("USDT",response.data.estimatedOutput)
                    if(onDataCantoUsdc){
                        onDataCantoUsdc(response.data.estimatedOutput)
                    }
                })
                .catch(error => console.error(error));

            // akhir usdt

            // canto

            axios({
                method: 'post',
                url: urlCanto,
                headers: {
                  'Content-Type': 'application/json',
                  'liquidityzone': 'canto'
                },
                data: JSON.stringify({
                    fromAmount: "1",
                    from: "0xeceeefcee421d8062ef8d6b4d814efe4dc898265",
                    gasOptimized: false,
                    limit: "99",
                    threeHop: true,
                    to: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                    _unsafe: false
                })
              })
                .then(response => {
                    console.log("USDT",response.data.estimatedOutput)
                    if(onDataCanto){
                        onDataCanto(response.data.estimatedOutput)
                    }
                })
                .catch(error => console.error(error));

            // akhir canto

    })
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
       <div className="bg-gray border border-green-400 rounded-lg shadow-xl p-5">
    <div className="flex flex-row items-center">
      <div className="flex-1 text-right md:text-center">
        <h1 className="font-bold uppercase text-green-400 mb-3">- CANTO -</h1>
        <p className="font-bold text-1xl text-green-400">
              WETH : {onHasilCantoWeth ? onHasilCantoWeth : "00000000"}
            </p>

            <p className="font-bold text-1xl text-green-400">
            USDC :  {onHasilCantoUsdc ? onHasilCantoUsdc : "00000000"}
            </p>

            <p className="font-bold text-1xl text-green-400">
              USDT :  {onHasilCantoUsdt ? onHasilCantoUsdt : "00000000"}
            </p>

            <p className="font-bold text-1xl text-green-400">
              CANTO : {onHasilCanto ? onHasilCanto : "00000000"}  
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceCheckCanto