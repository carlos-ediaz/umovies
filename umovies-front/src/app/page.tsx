"use client";
import {NextSeo} from 'next-seo';

export default function Home() {
  
  return (
    <>
      <NextSeo 
        title="UMovies: Search online movies"
        description="Easily find and save your favorites movies"
        openGraph={{
          title: 'Search online movies',
          description: 'Easily find and save your favorites movies',
          images: [
            {
              url: 'https://i.imgur.com/Z8tNeZO.jpeg',
              width: 720,
              height: 720,
              alt: 'Default image',
              type: 'image/jpeg',
            }
          ],
          siteName: 'UMovies',
        }}
      />
    </>
    
  );
}
