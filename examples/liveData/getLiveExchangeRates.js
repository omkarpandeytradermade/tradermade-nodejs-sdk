import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetLiveExchangeRates() {
  const data = await tm.getLiveExchangeRates('GBPUSD',
       'UK100',
       'USDJPY');
  console.log(data);
}

example_GetLiveExchangeRates().catch(console.error);
