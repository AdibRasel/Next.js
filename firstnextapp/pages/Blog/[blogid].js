import {useRouter} from "next/router";





function BlogDetails() {

    const router = useRouter();
    const blogID = router.query.blogid

    console.log(blogID, data())

    return (
        <div>
            <h1>This is blog details page {blogID} </h1>
            <h2>this is api = </h2>
        </div>
    );
}

export default BlogDetails;