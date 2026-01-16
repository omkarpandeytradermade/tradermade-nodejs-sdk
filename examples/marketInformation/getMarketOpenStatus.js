import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetOpenMarketStatus() {
  const data = await tm.getOpenMarketStatus();
  console.log(data);
}

example_GetOpenMarketStatus().catch(console.error);
