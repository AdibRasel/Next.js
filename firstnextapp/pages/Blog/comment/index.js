import { useRouter } from "next/router";

function index() {
    const router = useRouter()
    return (
        <div>
            this is comment this is router = {router}
        </div>
    );
}

export default index;