"use client";

import React, { useEffect, useState } from 'react'
import { getTrendMovies } from '../api/movies'
import { BASE_IMG_URL } from '../api/constants';
import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";
import { useRouter } from 'next/navigation';

interface Movies {
    id: number;
    title: string;
    poster_path: string;
}
export default function Trending() {
    const router = useRouter();
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
                <h4 className="font-bold text-large mb-6">Trending Now</h4>
                <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 d-flex justify-center">
                    {movies.map((item, index) => (
                            <Card key={index} className="py-4 d-flex justify-center items-center justify-center" isPressable onPress={() => router.push(`/movie/${item.id}`)}>
                                <CardBody className="overflow-visible py-2 d-flex justify-center items-center">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl d-flex"
                                        src={`${BASE_IMG_URL}${item.poster_path}`}
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
