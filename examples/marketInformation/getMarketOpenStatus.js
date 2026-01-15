import tm from "../../lib/tradermade.js"

async function example_GetOpenMarketStatus(){

    const data = await tm.getOpenMarketStatus();
    console.log(data);
};

example_GetOpenMarketStatus().catch(console.error)