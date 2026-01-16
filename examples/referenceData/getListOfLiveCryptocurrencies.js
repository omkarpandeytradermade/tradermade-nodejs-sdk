import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetCryptoList() {
  const data = await tm.getCryptoList();
  console.log(data);
}

example_GetCryptoList().catch(console.error);
