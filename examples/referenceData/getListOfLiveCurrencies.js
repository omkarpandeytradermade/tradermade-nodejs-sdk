import tm from "../../lib/tradermade.js"

async function example_GetLiveCurrencyList(){

    const data = await tm.getLiveCurrencyList()
    console.log(data);
};

example_GetLiveCurrencyList().catch(console.error)