import { resolve } from "path"

export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    throw Error("Basinga");
    return <div> Hello, Nextjs 13 !</div>
}