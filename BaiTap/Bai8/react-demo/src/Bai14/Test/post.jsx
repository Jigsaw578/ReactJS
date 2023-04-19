import { useParams } from "react-router-dom";

export default function PostDetails() {
    const params = useParams();
    const postId = params.postId

    return (
        <div>
            Post Id = {postId}
        </div>
    )
}