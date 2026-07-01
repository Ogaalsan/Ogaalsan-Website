import { useEffect } from "react"
import { useRouter } from "next/router"
import data from "../util/blog.json"

export default function BlogDetails() {
    const router = useRouter()
    
    useEffect(() => {
        // Redirect to the first blog post using dynamic route
        if (data && data.length > 0) {
            router.replace(`/blog/${data[0].id}`)
        }
    }, [router])

    return null
}
