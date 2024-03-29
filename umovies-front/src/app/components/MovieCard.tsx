import React from 'react'
import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";
import imageCard from "../img/img-card.jpeg";

export default function MovieCard(movies) {

    
    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {movies.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <div className='movieContainer'>
            <h1>{item.title}</h1>
          </div>
        ))}
          {/*
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
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
            </Card>*/}
        
        </div>
    )
}
