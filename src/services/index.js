import axios from "axios";

/* export const api = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v2"
}); */

export const corona1 = axios.create({
  baseURL: "https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com"
});

export const corona2 = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v2"
});

export const corona3 = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v2"
});
