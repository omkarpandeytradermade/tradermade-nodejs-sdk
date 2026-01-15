import tm from "../../lib/tradermade.js"

async function example_GetTimeSeriesData(){

    const data = await tm.getTimeSeriesData(
        "EURUSD",
        "2026-01-08",
        "2026-01-10",
        "daily",
        "1",
        "records"
    )
    console.log(data);
};

example_GetTimeSeriesData().catch(console.error)