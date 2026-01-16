import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetDataAsPandasDataFrame() {
  const data = await tm.getDataAsPandasDataFrame(
    "EURUSD",
    "2025-04-01",
    "2025-05-09",
    "index",
    "close"
  );
  console.log(data);
}

example_GetDataAsPandasDataFrame().catch(console.error);
