import { compareObjBy } from 'helpers/general';

export function getLastPage(data, perPageLimit) {
  return Math.ceil(data.length / perPageLimit);
}

export function getWatchlistCoinsList(coinsData, watchlistCoinCodes) {
  const watchlistCoinsList = watchlistCoinCodes
    .map((coinCode) => {
      const watchedCoin = coinsData.find((coin) => coin.code === coinCode);
      return watchedCoin;
    })
    // In case the coin on watchlistCoinsList (for example when retrieved from localStorage) does no longer exist (coins in coinsData has changed)
    .filter((item) => item !== undefined)
    .sort((a, b) => compareObjBy(a, b, 'rank', true));

  return watchlistCoinsList;
}
