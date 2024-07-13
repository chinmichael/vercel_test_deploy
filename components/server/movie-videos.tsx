import styles from "styles/movie-videos.module.css"
import {API_URL} from "util/constant"; // tsconfig baseurl 설정

interface MovieVideo {
    id: string;
    key: string;
    name: string;
}

const getVideos = async (id : string) : Promise<Array<MovieVideo>> => {
    console.log(`Fetching Movie Videos (id : ${id} time ${Date.now()}`);
    // await new Promise(resolve => setTimeout(resolve, 3000));

    const res = await fetch(`${API_URL.MOVIE_BASE}/${id}/videos`);
    return await res.json();
}

export default async function MovieVideos({id} : {id : string}) {
    const videos = await getVideos(id);
    // return <h1>{JSON.stringify(videos)}</h1>

    return (
        <div className={styles.container}>
            {
                videos?.map(video => (
                    <iframe
                        key={video.id}
                        // embedded player : https://www.youtube.com/watch?v={id} -> https://www.youtube.com/embed/{id}
                        src={`https://youtube.com/embed/${video.key}`}
                        allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'}
                        allowFullScreen
                        title={video.name}
                    />
                ))
            }
        </div>
    )
}