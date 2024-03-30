"use client";

import { BASE_IMG_URL } from '@/app/api/constants';
import { getSearchMovies } from '@/app/api/movies';
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import Image from 'next/image';
import { useParams, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import {Pagination} from "@nextui-org/react";

export default function Search() {
  const router = useRouter();
  const params = useParams<{ query: string }>();
  const searchParams = useSearchParams();
  const {query} = params;
  const page: string = searchParams.get('page')! ;
  const npage: number = parseInt(page);

  interface Movies {
    id: number;
    title: string;
    poster_path: string;
    }

    const [movies, setMovies] = useState<Movies[]>([]);
    const [nPages, setNPages] = useState<number>(1);
    
    async function fetchInfo() {
        try {
            const{ info, pages} = await getSearchMovies(query, npage);
            setMovies(info);
            setNPages(pages);
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
              <Pagination className="m-2" onChange={ (number) => {
                window.location.replace (`/search/${query}?page=${number}`);
                }
              } 
                isCompact size="sm" showControls total={nPages} initialPage={parseInt(searchParams.get("page")!)}/>
              <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 d-flex justify-center">
                  {movies.map((item, index) => (
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
}
