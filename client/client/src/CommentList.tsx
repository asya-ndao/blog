import { useState, useEffect } from "react";
import axios from "axios";
import { CommentInterface } from "./types/comment.type";



export default function CommentList( {postId} : {postId: string} ) {
    const [comments, setComments] = useState<CommentInterface[]>([]);

    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

        setComments(res.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>;
    });

    return <ul className="list-disc p-2">{renderedComments}</ul>
}