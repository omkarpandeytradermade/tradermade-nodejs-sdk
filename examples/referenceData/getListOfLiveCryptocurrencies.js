import tm from "../../lib/tradermade.js"

async function example_GetCryptoList(){

    const data = await tm.getCryptoList()
    console.log(data);
};

example_GetCryptoList().catch(console.error)