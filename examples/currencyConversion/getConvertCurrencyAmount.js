import tm from "../../lib/tradermade.js"

async function example_GetConvertCurrencyAmount(){

    const data = await tm.getConvertCurrencyAmount(
        "EUR",
        "GBP",
        "1000"
    )
    console.log(data);
};

example_GetConvertCurrencyAmount().catch(console.error)