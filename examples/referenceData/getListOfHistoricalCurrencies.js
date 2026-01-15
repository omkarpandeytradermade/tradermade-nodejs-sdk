import tm from "../../lib/tradermade.js"

async function example_GetHistoricalCurrencyList(){

    const data = await tm.getHistoricalCurrencyList()
    console.log(data);
};

example_GetHistoricalCurrencyList().catch(console.error)