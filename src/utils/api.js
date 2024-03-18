import axios from "axios";

const BASE_URL = 'https://youtube-data8.p.rapidapi.com';

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'f0ad1e0b86mshf7cea513b4db7afp10c675jsnab7367815f5a',
    'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
  }
};


// exprie = "f0ad1e0b86mshf7cea513b4db7afp10c675jsnab7367815f5a"

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`,options);
  console.log(data);
  return data;
};
