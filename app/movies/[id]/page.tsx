import {API_URL} from "../../(Home)/page";
import {Suspense} from "react";
import MovieVideos from "../../../components/server/movie-videos";
import MovieInfo from "../../../components/server/movie-info";

// const getMovie = async (id) => {
//     console.log(`Fetching Movie Detail (id : ${id} time ${Date.now()}`);
//     await new Promise(resolve => setTimeout(resolve, 3000));
//
//     const res = await fetch(`${API_URL}/${id}`);
//     return await res.json();
// }
//
// const getVideo = async (id) => {
//     console.log(`Fetching Movie Videos (id : ${id} time ${Date.now()}`);
//     await new Promise(resolve => setTimeout(resolve, 3000));
//
//     const res = await fetch(`${API_URL}/${id}/videos`);
//     return await res.json();
// }

export const metadata = {
    title: "Movie Detail"
}

export default async function MovieDetail (
    // props
    { params: { id }, searchParams } : { params: {id : string}, searchParams: object }
) {
    // console.log(props);
    // console.log('id ---> ', id);
    // console.log('search params ---> ', searchParams);

    // console.log("start fetching ===== : ", Date.now());

    // 순차 호출로 시간이 지연됨
    // const movie = await getMovie(id);
    // const video = await getVideo(id);

    // const [movie, video] = await Promise.all([getMovie(id), getVideo(id)])

    // console.log("end fetching ===== : ", Date.now());

    return (
        <div>
            <h1>Movie Detail Page</h1>

            {/*<h1>Movie ID : {props?.params?.id}</h1>*/}
            {/*<h1>Movie ID : {id}</h1>*/}
            {/*<h1>Movie Title : {movie.title}</h1>*/}
            {/*<br/>*/}
            {/*<p>{JSON.stringify(video)}</p>*/}

            <Suspense fallback={<h1>Loading Movie Info ...</h1>}>
                <MovieInfo id={id}/>
            </Suspense>

            <Suspense fallback={<h1>Loading Movie Videos ...</h1>}>
                <MovieVideos id={id}/>
            </Suspense>

        </div>
    )
}