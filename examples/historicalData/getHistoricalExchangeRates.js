import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetHistoricalExchangeRates() {
  const data = await tm.getHistoricalExchangeRates("2021-04-22", "EURUSD","UK100");
  console.log(data);
}

example_GetHistoricalExchangeRates().catch(console.error);
