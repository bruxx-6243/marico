import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import NotFoundPage from "./pages/NotFoundPage";
import { SinglePage } from "./pages/blog/SinglePage";
import { SignUp } from "./pages/SignUp";
import { MainLayout } from "./layouts/MainLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { LogIn } from "./pages/LogIn";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/:id"
            element={
              <ProtectedRoute>
                <SinglePage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
