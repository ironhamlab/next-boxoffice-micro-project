'use client'
import MovieCard from "@/item/MovieCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getMovieList, getMovieBySearch } from "@/api/MovieAPI.js";

export default function MovieSearchResult() {
    const searchParam = useSearchParams();
    const movieName = searchParam.get('movieName')
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const fetchAndFilter = async() => {
            const allMovies = await getMovieList();

            if (movieName) {
                const filtereddata = getMovieBySearch(allMovies, movieName);
                setMovieList(filtereddata);
            } else {
                setMovieList(allMovies);
            }
        };
        
        fetchAndFilter();
    }, [movieName]);

    return (
        <>
            <h1>'{movieName}' 검색 결과</h1>
            <div>
                {movieList.length > 0 ? (movieList.map (movie => <MovieCard key={movie.movieCd} movie={movie}/>)
            ) : (
                <p>검색 결과가 없습니다.</p>
            )}
            </div>
        </>
    )
}