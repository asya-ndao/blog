import axios from "axios";
import { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import { PostInterface } from "./types/post.type";
import CommentList from "./CommentList";

export default function PostList() {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = Object.values(posts).map(post => {
    return (
      <div 
      className="max-w-sm min-w-[220px] bg-white rounded-lg shadow-lg p-4" 
      key={post.id}
      >
        <div>
          <h3 className="block text-lg font-medium"> {post.title} </h3>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id}/>
        </div>
      </div>
    );
  });

  return <div className="w-full flex gap-4 items-center justify-center flex-wrap"> {renderPosts}</div>;
}
