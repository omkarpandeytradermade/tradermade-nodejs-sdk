import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetTimeSeriesData() {
  const tm = new TraderMade();
  tm.setRestApiKey("F_rt91jDCXM6UwBKj75L");
  const data = await tm.getTimeSeriesData(
    "EURUSD",
    "2026-01-08",
    "2026-01-10",
    "daily",
    "1",
    "index"
  );
  console.log(data);
}

example_GetTimeSeriesData().catch(console.error);
