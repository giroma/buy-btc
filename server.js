const express = require('express');
const axios = require('axios')

const app = express();
const port = process.env.PORT || 5000; //for deployment

  app.get('/BTCUSD', (req, res) => {
    axios.get('https://api.bitfinex.com/v1/pubticker/btcusd')
    .then(function (response) {
        res.send({ data: response.data.last_price });
      })
    .catch(function (error) {
      console.log(error);
    });
  })

app.listen(port, () => console.log(`Listening on port ${port}`));
