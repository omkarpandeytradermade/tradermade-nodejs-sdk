import { Client } from "./src/client.js";
import {
  TIME_SERIES_FORMAT,
  TIME_SERIES_INTERVAL,
  TIME_SERIES_PERIOD,
  DATA_EXPORTS_PANDAS_DF_FIELDS,
  DATA_EXPORTS_PANDAS_DF_FORMAT,
} from "./src/constants.js";

class TraderMade {
  constructor() {
    this.apiKey = null;
    this.client = null;
  }

  _validateApiKey(apiKey) {
    if (typeof apiKey !== "string" || apiKey.trim() === "") {
      throw new Error("Api key must be a non empty string.");
    }
  }

  //Set Rest api key
  setRestApiKey(apiKey) {
    this._validateApiKey(apiKey);
    this.apiKey = apiKey;
    this.client = new Client(apiKey);
  }

  //Get Rest api key
  getRestApiKey() {
    return this.apiKey;
  }

  //Get Live Exchange Rates​
  async getLiveExchangeRates(currency) {
    if (!currency) {
      throw new Error("currency is required.");
    }
    const data = await this.client.get("/live", {
      currency,
    });
    return data;
  }

  //Get List of Live Currencies​
  async getLiveCurrencyList() {
    const data = await this.client.get("/live_currencies_list");
    return data;
  }

  //Get List of Streaming Instruments​
  async getStreamCurrencyList() {
    const data = await this.client.get("/streaming_currencies_list");
    return data;
  }

  //Get List of Live Cryptocurrencies​
  async getCryptoList() {
    const data = await this.client.get("/live_crypto_list");
    return data;
  }

  //Get List of Historical Currencies​
  async getHistoricalCurrencyList() {
    const data = await this.client.get("/historical_currencies_list");
    return data;
  }

  //Get List of Available CFDs​
  async getCfdList() {
    const data = await this.client.get("/cfd_list");
    return data;
  }

  //Get Historical Exchange Rates​
  async getHistoricalExchangeRates(date, currency) {
    if (!date || !currency) {
      throw new Error("date_time,currency are required.");
    }

    const data = await this.client.get("/historical", {
      currency,
      date,
    });
    return data;
  }

  //Get Hourly Historical Data​
  async getHourlyHistoricalData(date_time, currency) {
    if (!date_time || !currency) {
      throw new Error("date_time,currency are required.");
    }

    const data = await this.client.get("/hour_historical", {
      date_time,
      currency,
    });
    return data;
  }

  //Get Minute Historical Data​
  async getMinuteHistoricalData(date_time, currency) {
    if (!date_time || !currency) {
      throw new Error("date_time,currency are required.");
    }
    const data = await this.client.get("/minute_historical", {
      date_time,
      currency,
    });
    return data;
  }

  //Get Historical Tick Data​
  async getHistoricalTickData(symbol, startDate, endDate, format) {
    if (!symbol || !startDate || !endDate) {
      throw new Error("symbol, startDate and endDate are required.");
    }
    const start = encodeURIComponent(startDate);
    const end = encodeURIComponent(endDate);
    const data = await this.client.get(
      `/tick_historical/${symbol}/${start}/${end}`,
      { format }
    );
    return data;
  }

  async getHistoricalTickDataSample(symbol, startDate, endDate, format) {
    if (!symbol || !startDate || !endDate || !format) {
      throw new Error("Symbol,startDateTime and endDateTime are required.");
    }
    const startDateAndTime = encodeURIComponent(startDate);
    const endDateAndTime = encodeURIComponent(endDate);
    const data = await this.client.get(
      `/tick_historical_sample/${symbol}/${startDateAndTime}/${endDateAndTime}`,
      { format }
    );
    return data;
  }

  //Get Time Series Data
  async getTimeSeriesData(
    currency,
    startDate,
    endDate,
    interval,
    period,
    format
  ) {
    if (!TIME_SERIES_FORMAT.includes(format)) {
      throw new Error(
        `Invalid format.Please use one of : ${TIME_SERIES_FORMAT}`
      );
    }
    if (!TIME_SERIES_INTERVAL.includes(interval)) {
      throw new Error(
        `Invalid interval.Please use one of : ${TIME_SERIES_INTERVAL}`
      );
    }
    const periodNum = Number(period);
    if (!TIME_SERIES_PERIOD[interval]?.includes(periodNum)) {
      throw new Error(
        `Invalid period.Please use one of : ${TIME_SERIES_PERIOD[interval].join(
          ", "
        )} `
      );
    }
    const data = await this.client.get("/timeseries", {
      currency,
      start_date: startDate,
      end_date: endDate,
      interval,
      period: periodNum,
      format,
    });
    return data;
  }

  //Get Market Open Status
  async getOpenMarketStatus() {
    const data = await this.client.get("/market_open_status");
    return data;
  }

  //Get Market Opening Times
  async getMarketOpenTiming() {
    const data = await this.client.get("/market_opening_times");
    return data;
  }

  //Convert Currency Amount
  async getConvertCurrencyAmount(from, to, amount) {
    const data = await this.client.get("/convert", {
      from,
      to,
      amount,
    });
    return data;
  }

  //Get Data as Pandas DataFrame
  async getDataAsPandasDataFrame(currency, startDate, endDate, format, fields) {
    if (!DATA_EXPORTS_PANDAS_DF_FORMAT.includes(format)) {
      throw new Error(
        `Invalid format.Please use one of : ${DATA_EXPORTS_PANDAS_DF_FORMAT}`
      );
    }
    if (!DATA_EXPORTS_PANDAS_DF_FIELDS.includes(fields)) {
      throw new Error(
        `Invalid format.Please use one of : ${DATA_EXPORTS_PANDAS_DF_FIELDS}`
      );
    }
    const data = await this.client.get("/pandasDF", {
      currency,
      start_date: startDate,
      end_date: endDate,
      format,
      fields,
    });
    return data;
  }
}
export default TraderMade;
