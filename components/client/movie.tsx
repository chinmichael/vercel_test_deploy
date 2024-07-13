"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '/styles/movie.module.css';

interface MovieProps {
    title: string;
    id: string;
    poster_path: string;
}

export default function Movie({title, id, poster_path} : MovieProps) {
    const router = useRouter();

    return (
        <div className={styles.movie}>
            <img src={poster_path} alt={title}
                 onClick={() => router.push(`/movies/${id}`)} />
            <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    )
}


