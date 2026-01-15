# TraderMade Node.js SDK

Official Node.js client library for the TraderMade Data API.

## 🚀 Installation

Install the package via npm:

```bash
npm install tradermade-nodejs-sdk

```

## 🔑 Getting Started

First, import the library and initialize the client with your API key.

```javascript
import TraderMade from 'tradermade-nodejs-sdk';

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

```

---

## 📚 Usage Examples

After creating the client, making calls to the TraderMade API is easy. Below are examples for fetching different types of market data.

### 1. Get Historical Tick Data

Fetch raw tick data for a specific currency pair and time range.

```javascript
import TraderMade from 'tradermade-nodejs-sdk';

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

### 2. Get Minute Historical Data

Retrieve OHLC (Open, High, Low, Close) data for a specific minute.

```javascript
import TraderMade from 'tradermade-nodejs-sdk';

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function example_GetMinuteHistoricalData() {
    try {
        const data = await tm.getMinuteHistoricalData(
            "2019-10-10-13:24",
            "EURUSD"
        );
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

example_GetMinuteHistoricalData();

```

### 3. Get Time Series Data

Fetch daily time series data for analysis.

```javascript
import TraderMade from 'tradermade-nodejs-sdk';

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