import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetHistoricalTickData() {
  const data = await tm.getHistoricalTickData(
    "GBPUSD",
    "2026-01-12 15:00",
    "2026-01-12 15:30",
    "json"
  );
  console.log(data);
}

example_GetHistoricalTickData().catch(console.error);
