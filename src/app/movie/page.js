'use client'
import MovieCard from "@/item/MovieCard";
import "@/app/globals.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getMovieList } from "@/api/MovieAPI";

export default function Movie() {
    const [movieList, setMovieList] = useState([]);
    
    const router = useRouter();

    useEffect(() => {
        const fetchMovies = async() => {
            const data = await getMovieList();
            setMovieList(data);
        };
        fetchMovies();
    }, [])

    return (
        <div>
            {movieList.map(movie => <MovieCard key={movie.movieCd} movie={movie}/>)}
        </div>
    )
}