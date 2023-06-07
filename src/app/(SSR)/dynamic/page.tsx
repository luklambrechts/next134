import { UnsplashImage } from "@/models/unsplash.image"
import Image from "next/image"
import Link from "next/link"
import { Alert } from "@/components/bootstrap"

export const metadata = {
    title: "Dynamic fetching - nextjs 13.4 image gallery",
  };

export const revalidate = 0;
export default async function Page() {
    console.log(process.env.UNSPLASH_ACCESS_KEY)
    const fetchpath = `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    console.log("fetchpath")
    console.log(fetchpath);
    const response = await fetch(fetchpath, { 
        // cache: "no-cache" 
        // next: { revalidate: 0 } 
    })
    const image: UnsplashImage = await response.json()

    const width = Math.min(image.width, 500)
    const height = (width /image.width) * image.height

    return(
        <div className="d-flex flex-column align-items-center">
        <Alert>
        </Alert>
        <Image
            src={image.urls.raw}
            width={width}
            height={height}
            alt={image.description}
            className="rounded shadow mw-100 h-100"                
        />
        by <Link href={"/users/" + image.user.username}>{image.user.username}</Link> 
        
    </div>
    );
}
