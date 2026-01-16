import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetConvertCurrencyAmount() {
  const data = await tm.getConvertCurrencyAmount("EUR", "GBP", "1000");
  console.log(data);
}

example_GetConvertCurrencyAmount().catch(console.error);
