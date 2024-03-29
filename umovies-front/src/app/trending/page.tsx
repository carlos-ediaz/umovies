"use client";

import React, { useEffect, useState } from 'react'
import { getTrendMovies } from '../api/movies'
import { BASE_IMG_URL } from '../api/constants';
import axios from "axios";
import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";

interface Movies {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    genre_ids: number[];

}
export default function Trending() {
    
    const [movies, setMovies] = useState<Movies[]>([]);

    useEffect(() => {
        fetchInfo();
    }, [])

    async function fetchInfo() {
        try {
            const res = await getTrendMovies();
            setMovies(res);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    if (movies?.length>0) {
        return (
            <div className='m-6'>
                <h2 className="text-2xl">Trending Movies</h2>
                <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 d-flex justify-center">
                    {movies.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <Card className="py-4 d-flex justify-center items-center justify-center">
                        <CardBody className="overflow-visible py-2 d-flex justify-center items-center">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl d-flex"
                                src={`${BASE_IMG_URL}/${item.poster_path}`}
                                width={270}
                            />
                        </CardBody>
                        <CardFooter className="pb-0 pt-2 px-4 flex-col items-center justify-center d-flex">
                            <h4 className="font-bold text-large d-flex">{item.title}</h4>
                        </CardFooter>
                    </Card>
                    ))}
                </div>
            </div>
        )
    }
}
