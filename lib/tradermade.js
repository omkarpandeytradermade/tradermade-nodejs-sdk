import TraderMade from "../index.js";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY || "api_key");

export default tm;