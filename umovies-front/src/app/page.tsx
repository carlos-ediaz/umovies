"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";


export default function Home() {
  const params = useParams();
  const {id} = params;
  return (
    <>
      <p>Home page ${id}</p>
    </>
    
  );
}
