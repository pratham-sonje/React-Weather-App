import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy Loading
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
