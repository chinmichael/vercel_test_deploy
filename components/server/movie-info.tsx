import {API_URL} from "../../app/(Home)/page";

const getMovie = async (id) => {
    console.log(`Fetching Movie Detail (id : ${id} time ${Date.now()}`);
    await new Promise(resolve => setTimeout(resolve, 3000));

    const res = await fetch(`${API_URL}/${id}`);
    return await res.json();
}

export default async function MovieInfo({id} : {id : string}) {
    const movie = await getMovie(id);
    return <h1>Movie Title : {movie.title}</h1>
}