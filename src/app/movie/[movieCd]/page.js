'use client'
import { getMovieDetailByMovieCd } from "@/api/MovieAPI";
import Link from "next/link";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import "@/app/globals.css";

export default function MovieDetail() {

    const {movieCd} = useParams();

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchMovieDetail = async() => {
            const data = await getMovieDetailByMovieCd(movieCd);
            setMovie(data);
        }
        fetchMovieDetail();
    }, [])
    console.log(movie);

    return(
        movie&&
        <>
            <div className="content-col">
                <h1>{movie.movieNm} ({movie.movieNmEn})</h1>
                <p>러닝 타임 : {movie.showTm}분</p>
                <p>국가 : {movie.nations?.map((nation) => nation.nationNm)}</p>
                <p><strong>출연</strong></p>
                <div className="actor">
                    {movie.actors?.map((actor, index) => (
                        <p className="actor:hover" key={index}>{actor.peopleNm}</p>
                    ))}
                </div>
                <Link href='/movie'><strong>목록으로</strong></Link>
            </div>
 
        </>
    )
}