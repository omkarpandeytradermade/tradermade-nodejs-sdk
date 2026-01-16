import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetHistoricalCurrencyList() {
  const data = await tm.getHistoricalCurrencyList();
  console.log(data);
}

example_GetHistoricalCurrencyList().catch(console.error);
