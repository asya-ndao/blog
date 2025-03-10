import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default function App() {
  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <div className="max-w-3xl mx-auto bg-slate-100 rounded-md p-5  space-y-6">
        <h1 className="font-bold text-2xl text-center">Create Post</h1>
        <PostCreate />
        <hr />
        <h1 className="font-bold text-2xl">Posts</h1>
        <PostList />
      </div>
    </main>
  );
}
