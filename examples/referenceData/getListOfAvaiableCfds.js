import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetCfdList() {
  const data = await tm.getCfdList();
  console.log(data);
}

example_GetCfdList().catch(console.error);
