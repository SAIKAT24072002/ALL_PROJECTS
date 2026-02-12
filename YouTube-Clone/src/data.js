export const API_KEY = "AIzaSyBCEn7ylo1YoGBLF4TOpbZP0yYmIAz1eA8";

export const Client_secret = "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";

export const Client_ID = "427907456069-bq74smifr40rvldgul71f842ddcs9j69";

export function valueConverter(value) {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
}
