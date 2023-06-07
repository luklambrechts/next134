import { UnsplashImage } from "@/models/unsplash.image"

interface PageProps {
    params: { topic: string},
    // searchParams: { [key: string]: string | string[] | undefined },
}

export default async function Page( { params: { topic } }: PageProps ) {

    const response = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=8&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
    const images: UnsplashImage[] = await response.json()    

    return(
        <div>
        <h1>{topic}</h1>
        {
            images.map(image => {
            <Image
                src={image.urls.raw}
                width={250}
                height={250}
                alt={image.description}
                key={image.urls.raw}
            ></Image>
        })
    
        </div>
    )
}