import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetStreamCurrencyList() {
  const data = await tm.getStreamCurrencyList();
  console.log(data);
}

example_GetStreamCurrencyList().catch(console.error);
