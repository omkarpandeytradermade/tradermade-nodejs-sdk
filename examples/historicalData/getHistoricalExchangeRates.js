import tm from "../../lib/tradermade.js"


async function example_GetHistoricalExchangeRates() {

    const data = await tm.getHistoricalExchangeRates(
        "2021-04-22",
        "EURUSD"              
    );
    console.log(data);
}

example_GetHistoricalExchangeRates().catch(console.error)