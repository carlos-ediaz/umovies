"use client";

import {Button} from '@nextui-org/button';
import NavigationBar from './components/NavigationBar';
import MovieCard from './components/MovieCard';
import { getTrendMovies } from './api/movies';
import { useState } from 'react';

export default function Home() {
  
  return (
    <>
      <NavigationBar/>
      <MovieCard/>
      <Button onClick={() => getTrendMovies()}>
        Generate
      </Button>
    </>
    
  );
}
