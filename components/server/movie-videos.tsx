import {API_URL} from "../../app/(Home)/page";

const getVideos = async (id) => {
    console.log(`Fetching Movie Videos (id : ${id} time ${Date.now()}`);
    await new Promise(resolve => setTimeout(resolve, 3000));

    const res = await fetch(`${API_URL}/${id}/videos`);
    return await res.json();
}

export default async function MovieVideos({id} : {id : string}) {
    const videos = await getVideos(id);
    return <h1>{JSON.stringify(videos)}</h1>
}