'use client'
import MovieCard from "@/item/MovieCard";
import "@/app/globals.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getMovieList } from "@/api/MovieAPI";

export default function Movie() {
    const [movieList, setMovieList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    
    const router = useRouter();

    useEffect(() => {
        const fetchMovies = async() => {
            const data = await getMovieList();
            setMovieList(data);
        };
        fetchMovies();
    }, [])

    const onClickHandler = () => {
        router.push(`/movie/search?movieName=${searchValue}`)
    }

    return (
        <>
            <div className="content-row">
                <div>
                    <input
                        type="search"
                        name="movieName"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={(e) => {if(e.key === 'Enter'){onClickHandler();}}}
                    />
                    <button onClick={onClickHandler}>검색</button>
                </div>
                <div>
                    {movieList.map(movie => <MovieCard key={movie.movieCd} movie={movie}/>)}
                </div>                
            </div>

        </>

    )
}