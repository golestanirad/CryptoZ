import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//// thunks
export const fetchCoinRanking = createAsyncThunk(
  "crypto/fetchCoinRanking",
  async () => {
    const response = await axios.request(getCoinsOptions());
    return response.data.data;
  }
);

export const fetchCoinDetails = createAsyncThunk(
  "crypto/fetchCoinDetails",
  async (coinId: string) => {
    const response = await axios.request(getCoinOptions(coinId));
    return response.data.data.coin;
  }
);

export const fetchCoinHistory = createAsyncThunk(
  "crypto/fetchCoinHistory",
  async (data: { coinId: string; timePeriod?: string }, _) => {
    const { coinId, timePeriod = "5y" } = data;
    const response = await axios.request(
      getCoinHistoryOptions(coinId, timePeriod)
    );
    return response.data.data.history;
  }
);

export const fetchNews = createAsyncThunk("crypto/fetchNews", async () => {
  const response = await axios.request(getNewsOptions());
  return response.data.value;
});

///// axios options

const getCoinsOptions = () => ({
  method: "GET",
  url: `${process.env.REACT_APP_CRYPTO_API_URL}/coins`,
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "5y",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "100",
    offset: "0",
  },
  headers: coinApiHeader,
});

const getCoinOptions = (coinId: string) => ({
  method: "GET",
  url: `${process.env.REACT_APP_CRYPTO_API_URL}/coin/${coinId}`,
  params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "30d" },
  headers: coinApiHeader,
});

const getCoinHistoryOptions = (coinId: string, timePeriod: string = "5y") => ({
  method: "GET",
  url: `${process.env.REACT_APP_CRYPTO_API_URL}/coin/${coinId}/history`,
  params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod },
  headers: coinApiHeader,
});

const getNewsOptions = () => ({
  method: "GET",
  url: `${process.env.REACT_APP_NEWS_API_URL}/news/search`,
  params: {
    q: "Cryptocurrency",
    freshness: "Day",
    textFormat: "Raw",
    safeSearch: "Off",
  },
  headers: newsApiHeader,
});

const coinApiHeader = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
};

const newsApiHeader = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
};
