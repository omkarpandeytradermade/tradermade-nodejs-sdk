import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetLiveCurrencyList() {
  const data = await tm.getLiveCurrencyList();
  console.log(data);
}

example_GetLiveCurrencyList().catch(console.error);
