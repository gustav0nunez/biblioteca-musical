import { lastfmAxios } from "../axiosConfig";

export const buscarArtistas = async (nombreArtista) => {
    try {
        const response = await lastfmAxios.get ('', {
            params: {
                method: 'artist.search',
                artist: nombreArtista,
                api_key: 'd1a811f624177e9705738166bf301dc8',
                format: 'json'
            }
        });
        return response.data.results.artistmatches.artist;
    } catch (error) {
        console.log("Error al buscar artistas", error); 
    }
}

export const obtenerTopCancionesArtista = async (nombreArtista) => {
    try {
        const response = await lastfmAxios.get('', {
            params: {
                method: 'artist.gettoptracks',
                artist: nombreArtista,
                api_key: 'd1a811f624177e9705738166bf301dc8',
                format: 'json'
            }
        });
        return response.data.toptracks.track; 
    } catch (error) {
        console.error("Error obteniendo top canciones:", error);
    }
};

export const obtenerArtistasSimilares = async (nombreArtista) => {
    try {
        const response = await lastfmAxios.get('', {
            params: {
                method: 'artist.getsimilar',
                artist: nombreArtista,
                api_key: 'd1a811f624177e9705738166bf301dc8',
                format: 'json'
            }
        });
        return response.data.similarartists.artist; 
    } catch (error) {
        console.error("Error obteniendo artistas similares:", error);
    }
};