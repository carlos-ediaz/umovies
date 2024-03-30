"use client";

import { BASE_IMG_URL } from '@/app/api/constants';
import { getMovieInfo } from '@/app/api/movies';
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import {Chip} from "@nextui-org/react";


export default function Movie() {
  const params = useParams<{ id: string }>();
  const { id } =params;
  let m_id: number = parseInt(id, 10);
  interface Movie {
    id: number;
    adult: boolean;
    title: string;
    backdrop_path: string;
    poster_path: string;
    homepage: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    genres: { id: number, name: string }[],
  }

  const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        fetchInfo();
    }, [])

    async function fetchInfo() {
        try {
            const res = await getMovieInfo(m_id);
            setMovie(res);
        } catch (error) {
            console.log(error)
        }
    }

    if (movie) {
      return (
        <Card className="py-4 d-flex flex-row">
          <CardBody className="overflow-visible py-2 d-flex justify-start items-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={`${BASE_IMG_URL}/${movie.poster_path}`}
              width={270}
              height={270}
            />
          </CardBody>
          <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
            <Link href={movie.homepage}>
              <h4 className="font-bold text-large">{movie.title}</h4>
            </Link>
            <p className="text-tiny">Adult: {movie.adult? "Yes": "No"}</p>
            <p className="text-tiny">
              <strong>Synopsis: </strong>
              {movie.overview}
              </p>
            <small className="text-default-500">Rating: {movie.vote_average}/10 ({movie.vote_count} reviews)</small>
            <br/>
            <div className='d-flex'>
            <p className="text-tiny">Genres:</p>
            {
              movie.genres.map((genre, index) => (
                <Chip className="mr-1 mb-1" key={index}>{genre.name}</Chip>
              ))
            }
            </div>
            
          </CardFooter>
        </Card>
      )
    }
}
