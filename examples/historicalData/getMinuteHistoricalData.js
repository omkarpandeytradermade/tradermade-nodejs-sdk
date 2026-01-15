import tm from "../../lib/tradermade.js"

async function example_GetMinuteHistoricalData(){

    const data = await tm.getMinuteHistoricalData(
        "2019-10-10-13:24",
        "EURUSD"
    )
    console.log(data);
};

example_GetMinuteHistoricalData().catch(console.error)