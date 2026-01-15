import tm from "../../lib/tradermade.js"

async function example_GetHistoricalTickDataSample(){

    const data = await tm.getHistoricalTickDataSample(
      "GBPUSD",
      "2026-01-12 15:00",
      "2026-01-12 15:30"
    )
    console.log(data);
};

example_GetHistoricalTickDataSample().catch(console.error)