import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetHourlyHistoricalData() {
  const data = await tm.getHourlyHistoricalData("2025-05-09-14:00", "GBPUSD");
  console.log(data);
}

example_GetHourlyHistoricalData().catch(console.error);
