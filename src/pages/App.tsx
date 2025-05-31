import { Link } from "react-router";

function App() {
  return (
    <div className="flex justify-center flex-col gap-2 items-center h-screen">
      <h1 className="text-[100px] font-bold">Hello World</h1>
      <div className="bg-blue">
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default App;
