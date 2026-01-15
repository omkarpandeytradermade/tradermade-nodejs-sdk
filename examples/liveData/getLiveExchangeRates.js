import tm from "../../lib/tradermade.js"

async function example_GetLiveExchangeRates() {

    const data = await tm.getLiveExchangeRates();
    console.log(data);
}

example_GetLiveExchangeRates().catch(console.error)