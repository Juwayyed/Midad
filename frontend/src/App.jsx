import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import MemoDetailPage from "./pages/MemoDetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div>
      {/* Testing Toaster Notifications */}
      <button onClick={() => toast.success("Congrats")}>Click Me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/memo/:id" element={<MemoDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
