import React, { useState } from 'react';
import { SigningStargateClient, assertIsBroadcastTxSuccess } from '@cosmjs/stargate';

function SendCoin() {
    // state to hold the form values
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");
    const [memo, setMemo] = useState("");

    // function to handle form submission
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            // check if the Keplr extension is installed
            if (!window.getOfflineSigner || !window.keplr) {
                alert("Please install the Keplr extension");
                return;
            }

            // initialize the chain
            await window.keplr.experimentalSuggestChain({
                chainId: "osmosis-1",
                chainName: "Osmosis mainnet",
                rpc: "https://rpc-osmosis.blockapsis.com",
                rest: "https://lcd-osmosis.blockapsis.com",
                stakeCurrency: {
                    coinDenom: "OSMO",
                    coinMinimalDenom: "uosmo",
                    coinDecimals: 6,
                },
                // other chain parameters
            });
            await window.keplr.enable("osmosis-1");

            // get the offline signer
            const offlineSigner = window.getOfflineSigner("osmosis-1");
            const accounts = await offlineSigner.getAccounts();

            //connect to the client
            const client = await SigningStargateClient.connectWithSigner(
                "https://rpc-osmosis.blockapsis.com",
                offlineSigner
            );

            // convert the amount to the minimal denomination and format it as a string
            const amountInMinimalDenomination = (parseFloat(amount) * 1000000).toFixed(0);
            const amountFinal = [{
                denom: 'uosmo',
                amount: amountInMinimalDenomination.toString(),
            }];

            // set the transaction fee
            const fee = {
                amount: [{
                    denom: 'uosmo',
                    amount: '5000',
                }],
                gas: '200000',
            }


            // Send the transaction
            const response = await client.sendTokens(accounts[0].address, recipient, amountFinal, fee, memo);
            assertIsBroadcastTxSuccess(response)
            console.log(`Transaction sent: ${response.transactionHash}`);
            alert(`Transaction sent: ${response.transactionHash}`);
        } catch (error) {
            console.error("Error sending transaction: ", error);
            alert(`An error occurred while sending the transaction: ${error.message}`);
        }
    }

    return (
        <div>
        <div className='flex flex-col'>Trnasfer Coin</div>
<form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Recipient:</label>
                <input className="border border-gray-400 p-2 w-full" type="text" value={recipient} onChange={e => setRecipient(e.target.value)} required/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Amount:</label>
                <input className="border border-gray-400 p-2 w-full" type="text" value={amount} onChange={e => setAmount(e.target.value)} required/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Memo:</label>
                <input className="border border-gray-400 p-2 w-full" type="text" value={memo} onChange={e => setMemo(e.target.value)} />
            </div>
            <div className="text-center">
                <input className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600" type="submit" value="Send" />
            </div>
        </form>
    </div>
    )
}

export default SendCoin;