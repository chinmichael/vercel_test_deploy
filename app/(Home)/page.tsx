// React Client Side Data Fetch
// client component -> can't use metadata object

// "use client"
//
// import {useEffect, useState} from 'react';
//
// export default function Home() {
//
//     const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
//
//     const [movies, setMovies] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//
//     const getMovies = async () => {
//         console.log("클라이언트 브라우저에 표시됨!!");
//
//         const res = await fetch(API_URL);
//         const json = await res.json();
//         setMovies(json == null ? [] : json);
//         // setIsLoading(false); // 시점을 정확히 하기위해 useEffect 분리
//     }
//
//     useEffect(() => {
//         getMovies();
//     }, []); // update only mount
//
//     useEffect(() => {
//         if(isLoading && movies !== null) setIsLoading(false);
//     }, [movies]);
//
//     return (
//         <div>
//             { isLoading ? <h1>...Loading</h1> : JSON.stringify(movies) }
//         </div>
//     )
// }


import Link from "next/link";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    console.log("서버 콘솔에서만 보임!!")

    // for loading test
    await new Promise(resolve => setTimeout(resolve, 1000));

    const res = await fetch(API_URL);
    return await res.json();
}

export const metadata = {
    title: `Home Page`
}

export default async function HomePage() { // async func for data fetching
    const movies = await getMovies();
    // return <div>{ JSON.stringify(movies) }</div>
    return (
        <div>
            {
                movies?.map(item => (
                    <li key={item.id}>
                        <Link href={`/movies/${item.id}`}>{item.title}</Link>
                    </li>
                ))
            }
        </div>
    )
}
