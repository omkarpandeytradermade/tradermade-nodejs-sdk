# TraderMade Node.js SDK

Official Node.js client library for the TraderMade Data API.

## 🚀 Installation

Create a `src` folder for your project and install the package inside it.

```bash
mkdir src
cd src
npm init -y
npm install tradermade-sdk

```

## 🛠️ Project Setup

Before running the code, set up your project files inside the `src` folder.

**1. Create your .env file**
Create a file named `.env` inside `src` and add your API key:

```env
TRADERMADE_API_KEY=your_api_key_here

```

**2. Create your script**
Create a file named `index.js` inside `src` and paste the code examples below.

**3. Run your code**
Run the script from your terminal:

```bash
node index.js

```

---

## 🔑 Getting Started

First, import the library and initialize the client. 

```javascript
import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

```

---

## 📚 Usage Examples

After creating the client, making calls to the TraderMade API is easy. Below are examples for fetching different types of market data.

### 1. Convert Currency

Convert a specific amount from one currency to another using live exchange rates.

```javascript
import TraderMade from 'tradermade-sdk';

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetConvertCurrencyAmount(){
    try {
        const data = await tm.getConvertCurrencyAmount(
            "EUR",   // From Currency
            "GBP",   // To Currency
            "1000"   // Amount
        );
        console.log("Conversion Result:", data);
    }
    catch (error) {
        console.error(error)
    }
};

example_GetConvertCurrencyAmount().catch(console.error)

```

### 2. Get Historical Tick Data

Fetch raw tick data for a specific currency pair and time range.

```javascript
import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetHistoricalTickData() {
  try {
    const data = await tm.getHistoricalTickData(
      "GBPUSD",
      "2026-01-12 15:00",
      "2026-01-12 15:30"
    );
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

example_GetHistoricalTickData();

```

### 3. Get Time Series Data

Fetch daily time series data for analysis.

```javascript
import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetTimeSeriesData() {
  try {
    const data = await tm.getTimeSeriesData(
      "EURUSD",
      "2026-01-08",
      "2026-01-10",
      "daily",
      "1",
      "records"
    );
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

example_GetTimeSeriesData();

```