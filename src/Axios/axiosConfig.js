import axios from 'axios';

export const lastfmAxios = axios.create({
    baseURL: 'http://ws.audioscrobbler.com/2.0/'
});