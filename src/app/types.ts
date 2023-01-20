export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  color?: string | null;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  sparkline?: string[] | null;
  lowVolume: boolean;
  coinrankingUrl: string;
  "24hVolume": string;
  btcPrice: string;
}

export interface Stats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
}

export interface SerializedError {
  name?: string;
  message?: string;
  stack?: string;
  code?: string;
}

export interface MainMenuItem {
  name: string;
  path: string;
  icon: React.ReactElement;
}

export interface StatTitle {
  [key: string]: string;
}

export interface History {
  price: string;
  timestamp: number;
}

////// coin details types
export interface CoinDetails {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: Link[];
  supply: Supply;
  numberOfMarkets: number;
  numberOfExchanges: number;
  "24hVolume": string;
  marketCap: string;
  fullyDilutedMarketCap: string;
  price: string;
  btcPrice: string;
  priceAt: number;
  change: string;
  rank: number;
  sparkline: string[];
  allTimeHigh: AllTimeHigh;
  coinrankingUrl: string;
  tier: number;
  lowVolume: boolean;
  listedAt: number;
  notices: any;
  tags: string[];
}

interface Link {
  name: string;
  type: string;
  url: string;
}

interface Supply {
  confirmed: boolean;
  supplyAt: number;
  max: string;
  total: string;
  circulating: string;
}

interface AllTimeHigh {
  price: string;
  timestamp: number;
}

//// ^^^

export interface News {
  _type: string;
  name: string;
  url: string;
  image?: Image | null;
  description: string;
  about?: AboutEntity[] | null;
  provider?: ProviderEntity[] | null;
  datePublished: string;
  category?: string | null;
  mentions?: ProviderEntityOrMentionsEntity[] | null;
}
interface Image {
  _type: string;
  thumbnail: Thumbnail;
}
interface Thumbnail {
  _type: string;
  contentUrl: string;
  width: number;
  height: number;
}
interface AboutEntity {
  _type: string;
  readLink: string;
  name: string;
}
interface ProviderEntity {
  _type: string;
  name: string;
  image?: Image1 | null;
}
interface Image1 {
  _type: string;
  thumbnail: Thumbnail1;
}
interface Thumbnail1 {
  _type: string;
  contentUrl: string;
}
interface ProviderEntityOrMentionsEntity {
  _type: string;
  name: string;
}

///// ^^^^^
