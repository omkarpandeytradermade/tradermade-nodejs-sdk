import tm from "../../lib/tradermade.js"

async function example_GetStreamCurrencyList(){

    const data = await tm.getStreamCurrencyList()
    console.log(data);
};

example_GetStreamCurrencyList().catch(console.error)