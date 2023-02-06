import React from 'react'


function AddCosmoshubTestnet() {
    const handleClick = () => {
      window.keplr.experimentalSuggestChain({
        chainId: "hendri-1",
        chainName: "Osmosis mainnet",
        rpc: "https://rpc-osmosis.blockapsis.com",
        rest: "https://lcd-osmosis.blockapsis.com",
  
        stakeCurrency: {
          coinDenom: "OSMO",
          coinMinimalDenom: "uosmo",
          coinDecimals: 6,
          coinGeckoId: "none"
        },
        bip44: {
          coinType: 118,
        },
        bech32Config: {
          bech32PrefixAccAddr: "osmo",
          bech32PrefixAccPub: "osmopub",
          bech32PrefixValAddr: "osmovaloper",
          bech32PrefixValPub: "osmovaloperpub",
          bech32PrefixConsAddr: "osmovalcons",
          bech32PrefixConsPub: "osmovalconspub"
        },
        currencies: [{
          coinDenom: "OSMO",
          coinMinimalDenom: "uosmo",
          coinDecimals: 6,
          coinGeckoId: "none"
        }],
        feeCurrencies: [{
          coinDenom: "OSMO",
          coinMinimalDenom: "uosmo",
          coinDecimals: 6,
          coinGeckoId: "none"
        }],
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.04
        }
      });
    };
  
    return (
        <button class="bg-teal-200 hover:bg-teal-400 text-gray-800 font-semibold py-2 px-4 border  rounded shadow" onClick={handleClick}>✚ | Cosmoshub Testnet </button>
      );
  }

  

export default AddCosmoshubTestnet

