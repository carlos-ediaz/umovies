"use client";

import { BASE_IMG_URL } from '@/app/api/constants';
import { getMovieInfo, getSearchMovies } from '@/app/api/movies';
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import {Chip} from "@nextui-org/react";


export default function Search() {
  const params = useParams<{ query: string }>();
  const { query } =params;

  interface Movies {
    id: number;
    title: string;
    poster_path: string;
    }
    const [movies, setMovies] = useState<Movies[]>([]);

    async function fetchInfo() {
        try {
            const res = await getSearchMovies(query);
            setMovies(res);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchInfo();
    }, [])


    if (movies?.length>0) {
      return (
          <div className='m-6'>
              <h4 className="font-bold text-large mb-6">Search Results</h4>
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
