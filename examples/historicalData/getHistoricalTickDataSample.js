import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetHistoricalTickDataSample() {
  const data = await tm.getHistoricalTickDataSample(
    "GBPUSD",
    "2026-01-12 15:00",
    "2026-01-12 15:30",
    "csv"
  );
  console.log(data);
}

example_GetHistoricalTickDataSample().catch(console.error);
