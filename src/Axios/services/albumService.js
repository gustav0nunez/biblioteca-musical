import { lastfmAxios } from '../axiosConfig';

export const buscarAlbumes = async (nombreAlbum) => {
    try {
        const response = await lastfmAxios.get('', {
            params: {
                method: 'album.search',
                album: nombreAlbum,
                api_key: 'd1a811f624177e9705738166bf301dc8',
                format: 'json'
            }
        });
        return response.data.results.albummatches.album; 
    } catch (error) {
        console.error("Error buscando álbumes:", error);
    }
};

export const obtenerInfoAlbum = async (nombreArtista, nombreAlbum) => {
    try {
        const response = await lastfmAxios.get('', {
            params: {
                method: 'album.getinfo',
                artist: nombreArtista,
                album: nombreAlbum,
                api_key: 'd1a811f624177e9705738166bf301dc8',
                format: 'json'
            }
        });
        return response.data.album; 
    } catch (error) {
        console.error("Error obteniendo info del álbum:", error);
    }
};