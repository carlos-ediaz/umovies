"use client";

import React, { useContext, useEffect, useState } from 'react'
import { getFavorites, getMovieInfo, getSessionId } from '../api/movies';
import { Card, CardBody, CardFooter, Pagination } from '@nextui-org/react';
import Image from 'next/image';
import { BASE_IMG_URL } from '../api/constants';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Favorites() {

    interface Movies {
        id: number;
        title: string;
        poster_path: string;
    }
    const sessionId = localStorage.getItem("session_id");
    const [favMovies, setFavMovies] = useState<Movies[]>([]);
    const [nPages, setNPages] = useState<number>(1);

    const searchParams = useSearchParams();
    const page: string = searchParams.get('page')! ;
    const npage: number = parseInt(page);
    const router = useRouter();


    localStorage.getItem("session_id")


    async function fetchInfo(sessionId: any) {
        try {
            console.log(sessionId)
            const { info, pages } = await getFavorites(sessionId, npage)
            setFavMovies(info);
            setNPages(pages);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchInfo(sessionId);
    }, [])


    return (
        <div className='m-6'>
            <h4 className="font-bold text-large mb-6">Favorites</h4>
            <Pagination className="m-2" onChange={ (number) => {
                window.location.replace (`/favorites?page=${number}`);
                }
              } 
                isCompact size="sm" showControls total={nPages} initialPage={parseInt(searchParams.get("page")!)}/>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 d-flex justify-center">
                    {favMovies.map((item, index) => (
                        <Card key={index} className="py-4 d-flex justify-center items-center justify-center" isPressable onPress={() => router.push(`/movie/${item.id}`)}>
                            <CardBody className="overflow-visible py-2 d-flex justify-center items-center">
                                <Image
                                    alt="Card background"
                                    className="object-cover rounded-xl d-flex"
                                    src={ item.poster_path? 
                                        `${BASE_IMG_URL}/${item.poster_path}`
                                        : "https://i.imgur.com/Z8tNeZO.jpeg"}
                                    width={270}
                                    height={270}
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
