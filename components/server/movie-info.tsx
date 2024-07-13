import styles from "styles/movie-info.module.css";
import {API_URL} from "util/constant"; // tsconfig baseurl 설정

interface MovieDetail {
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    homepage: string;
}

export const getMovie = async (id : string) : Promise<MovieDetail>  => {
    console.log(`Fetching Movie Detail (id : ${id} time ${Date.now()}`);
    // await new Promise(resolve => setTimeout(resolve, 3000));

    const res = await fetch(`${API_URL.MOVIE_BASE}/${id}`);
    return await res.json();
}

export default async function MovieInfo({id} : {id : string}) {
    const movie = await getMovie(id);
    // return <h1>Movie Title : {movie.title}</h1>

    return (
        <div className={styles.container}>
            <img className={styles.poster}
                 src={movie.poster_path}
                 alt={movie.title} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                {/* 이모지 : ctrl cmd space */}
                {/* number.toFixed() : 자리수 설정 */}
                <h3>⭐️ {movie.vote_average?.toFixed(1)}</h3>
                <p>{movie.overview}</p>

                <a href={movie.homepage} target={"_blank"}>
                    Homepage &rarr;
                </a>
            </div>
        </div>
    )
}