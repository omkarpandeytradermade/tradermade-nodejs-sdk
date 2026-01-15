import tm from "../../lib/tradermade.js"

async function example_GetDataAsPandasDataFrame(){

    const data = await tm.getDataAsPandasDataFrame(
        "EURUSD",
        "2025-04-01",
        "2025-05-09",
        "index",
        "close"
    )
    console.log(data);
};

example_GetDataAsPandasDataFrame().catch(console.error);