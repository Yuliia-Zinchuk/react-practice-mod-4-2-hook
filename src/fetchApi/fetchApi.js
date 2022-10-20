import axios from 'axios';

const apikey = 'd47AAdRAEr5lEuJGd3tPEazzAwdlrSDk';
axios.defaults.baseURL =
  'https://app.ticketmaster.com/discovery/v2/events.json';

export const fetchApi = async page => {
  const config = {
    params: {
      apikey,
      page,
    },
  };

  return await axios(config);
};
