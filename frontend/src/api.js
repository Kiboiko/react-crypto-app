// import { cryptoAssets, cryptoData } from "./data";
// //54RL7IZhcMGBt/eoerailyrmJU2Rs69tzqbHfZVOY4g=
// export function fakeFetchCrypto() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(cryptoData);
//     }, 1);
//   });
// }

// export function fetchAssets() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(cryptoAssets);
//     }, 1);
//   });
// }

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     'X-API-KEY': '54RL7IZhcMGBt/eoerailyrmJU2Rs69tzqbHfZVOY4g='
//   }
// };

// fetch('https://openapiv1.coinstats.app/coins', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

import { cryptoAssets, cryptoData } from "./data"; // Убедитесь, что путь правильный

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

export function fakeFetchCrypto() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": API_KEY,
    },
  };

  return fetch(`${BASE_URL}/coins`, options)
    .then((res) => {
      if (!res.ok) {
        // if (res.status === 401) {
        //   console.warn("API key not accepted, using local data");
        //   return cryptoData;
        // }
        throw new Error(`Network response was not ok: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => {
      console.error("Error fetching crypto data:", err);
      // return cryptoData;
    });
}

export function fetchAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 1);
  });
}
