const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.send("Tes123");
    });

app.get("/balances/osmo", async (req, res) => {
        try {
            const response = await axios({
                url: "https://api.osmosis.interbloc.org/cosmos/bank/v1beta1/balances/osmo1g7dna0gp4nec5rza4q25htj0cjgswrxejx7dwh",
                method: "get",
            });
            res.status(200).json(response.data);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    });

app.get("/balances/iris", async (req, res) => {
        try {
            const response = await axios({
                url: "https://lcd-iris.keplr.app/cosmos/bank/v1beta1/balances/iaa1g7dna0gp4nec5rza4q25htj0cjgswrxe0ldv65",
                method: "get",
            });
            res.status(200).json(response.data);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    });

app.get("/balances/crescent", async (req, res) => {
        try {
            const response = await axios({
                url: "https://mainnet.crescent.network:1317/cosmos/bank/v1beta1/balances/cre1g7dna0gp4nec5rza4q25htj0cjgswrxe747cdg",
                method: "get",
            });
            res.status(200).json(response.data);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    });

    

app.listen(5000, () => {
    console.log('server running at 5000')
    })

