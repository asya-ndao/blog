import { useState } from "react";
import axios from "axios";

export default function PostCreate() {
  const [title, setTitle] = useState<string>("");

  const onSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
        title
    });

    setTitle("");

  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="py-5 flex items-center gap-1">
          <label className="flex items-center gap-2 "> Title </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-400 rounded-lg grow"
          />
        </div >
        <button
          type="submit"
          className="w-16 border bg-indigo-500 hover:bg-fuchsia-500 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
