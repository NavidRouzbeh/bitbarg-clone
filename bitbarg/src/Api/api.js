import axios from 'axios';


export const options = axios.create({
  method: 'GET',
  baseURL:'https://coinranking1.p.rapidapi.com',

  headers: {
    'X-RapidAPI-Key': '1ac67c4601msh7f3a55b35017018p1a85b2jsn719ba0c78fc0',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
})
