import { UnsplashImage } from "@/models/unsplash.image"
import Image from "next/image"

export default async function Page() {
    console.log(process.env.UNSPLASH_ACCESS_KEY)
    const fetchpath = `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    console.log("fetchpath")
    console.log(fetchpath);
    const response = await fetch(fetchpath)
    const image: UnsplashImage = await response.json()

    const width = Math.min(image.width, 500)
    const height = (width /image.width) * image.height

    return (
        <div className="d-flex flex-column align-items-center">
            <Image
                src={image.urls.raw}
                width={width}
                height={height}
                alt={image.description}                
            />
        </div>
    )
}