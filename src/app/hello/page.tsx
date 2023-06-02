import { resolve } from "path"

export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return <div> Hello, Nextjs 13 !</div>
}