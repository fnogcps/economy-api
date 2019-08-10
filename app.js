const url = "https://economia.awesomeapi.com.br/all/USD-BRL";
const axios = require("axios");

axios.get(url).then(response => {
  const compraUSD = parseFloat(response.data.USD.bid.replace(",", "."));
  console.log(`Valor de compra: R$ ${compraUSD.toFixed(2)}`);
});
