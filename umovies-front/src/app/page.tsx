"use client";

import {Button} from '@nextui-org/button';
import NavigationBar from './components/NavigationBar';
import MovieCard from './components/MovieCard';
import { getTrendMovies } from './api/movies';
import { useState } from 'react';

export default function Home() {
  interface MovieInfo {
    title: string;
    adult: boolean;
    original_language: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}
const [moviesInfo, setMoviesInfo] = useState<{}>({});

async function getTrending(): Promise<void>{
    try {
        const info = await getTrendMovies();
        setMoviesInfo(info); //Here is where I'm getting the title error
  
    } catch (error) {
        console.error(error);
    }
}
  return (
    <>
      <MovieCard info={moviesInfo}/>
      <Button onClick={() => getTrendMovies()}>
        Generate
      </Button>
    </>
    
  );
}
