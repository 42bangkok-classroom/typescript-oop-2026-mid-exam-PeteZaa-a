import axios from "axios";

interface FullAlbum {
    userId:number
    id:number
    title:number
    photos: Object
}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

export async function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]> {
    try {
        const getAlbum = await axios.get(ALBUMS_URL)

        const getPhotos = await axios.get(PHOTOS_URL)

        const albumData = getAlbum.data.userId

        

    } catch (error) {
        throw new Error ("Errror rrr")
    }
}



mapPhotoToAlbum()
