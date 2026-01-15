import tm from "../../lib/tradermade.js"

async function example_GetHistoricalTickData(){

    const data = await tm.getHistoricalTickData(
        "GBPUSD",
        "2026-01-12 15:00",
        "2026-01-12 15:30"
    )
    console.log(data);
};

example_GetHistoricalTickData().catch(console.error)