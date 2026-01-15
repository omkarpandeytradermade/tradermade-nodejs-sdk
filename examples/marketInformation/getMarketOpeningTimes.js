import tm from "../../lib/tradermade.js"

async function example_GetMarketOpenTiming(){

    const data = await tm.getMarketOpenTiming();
    console.log(JSON.stringify(data,null,2));
};

example_GetMarketOpenTiming().catch(console.error)