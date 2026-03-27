import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/common/login";
import Register from "./pages/common/register";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/common/home";
function App() {
  return (
    <BrowserRouter>
      {/* Toast container */}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedRoute>
          <Home />
        </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

