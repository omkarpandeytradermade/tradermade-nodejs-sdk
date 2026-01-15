import tm from "../../lib/tradermade.js"

async function example_GetCfdList(){
    
    const data = await tm.getCfdList();
    console.log(data);
};

example_GetCfdList().catch(console.error)