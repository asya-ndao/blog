import { useState } from "react";
import axios from "axios";


export default function CommentCreate( {postId}: { postId: string } ) {

    const [content, setContent] = useState("");
    
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Send a post request to create
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });
        setContent("");
    }

  return (
    <div>
      <form onSubmit={onSubmit} className="mb-5">
        <div className="py-5">
          <label htmlFor="title" className="block">
            New Comment
          </label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-2 p-2 border border-gray-400 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
