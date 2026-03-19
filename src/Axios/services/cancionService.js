import { lastfmAxios } from '../axiosConfig';

export const buscarCanciones = async (nombreCancion) => {
    try {
        const response = await lastfmAxios.get('', {
            params: {
                method: 'track.search',
                track: nombreCancion,
                api_key: 'd1a811f624177e9705738166bf301dc8',
                format: 'json'
            }
        });
        return response.data?.results?.trackmatches?.track || [];
    } catch (error) {
        console.error("Error buscando canciones:", error);
    }
};

export const obtenerInfoCancion = async (nombreArtista, nombreCancion) => {
    try {
        const response = await lastfmAxios.get('', {
            params: {
                method: 'track.getInfo',
                artist: nombreArtista,
                track: nombreCancion,
                api_key: 'd1a811f624177e9705738166bf301dc8',
                format: 'json'
            }
        });
        return response.data.track;
    } catch (error) {
        console.error("Error obteniendo info de la canción:", error);
    }
};