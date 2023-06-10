import { UnsplashUser } from "@/models/unsplash-user";

interface PageProps {
    params: {username: string},
}

export default async function Page({ params: { username }}: PageProps) {
    const fetchUrl = `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    console.log ('fetchurl');
    console.log(fetchUrl)
    const response = await fetch(fetchUrl);
    const user: UnsplashUser = await response.json();
    return (
        <div>
            <h1>{user.username}</h1>
            <p>First name: {user.first_name}</p>
            <p>Last name: {user.last_name}</p>
            <a href={`https://unsplash.com/${user.username}`}>Unsplash profile</a>
        </div>
    )
}