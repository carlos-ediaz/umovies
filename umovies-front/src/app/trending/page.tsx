"use client";

import { Button } from '@nextui-org/react'
import React from 'react'
import { getTrendMovies } from '../api/movies'

export default function Trending() {
  return (
    <>
        <div>Trending Movies</div>
        <Button onClick={() => getTrendMovies()}>
            Generate
        </Button>
    </>
    
  )
}
