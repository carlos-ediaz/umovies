"use client";

import { Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { getTrendMovies } from '../api/movies'
import { TRENDING } from '../api/constants';
import axios from "axios";
import MovieCard from '../components/MovieCard';
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
                <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                    {movies.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <Card shadow="sm" isPressable onPress={() => console.log(`${item.id}`)}>
                    <CardBody className="overflow-visible p-0">
                        <Image
                          shadow="sm"
                          radius="lg"
                          width="100%"
                          alt={item.title}
                          className="w-full object-cover h-[140px]"
                          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
                        />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                        <b>{item.title}</b>
                        <p className="text-default-500">{item.overview}</p>
                    </CardFooter>
                  </Card>
                    ))}
                </div>
            </div>
        )
    }
}
