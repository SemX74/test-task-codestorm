import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./Page/Auth/Auth";
import Home from "./Page/Home/Home";
import Layout from "./Page/Layout/Layout";
import { useAppSelector } from "./Redux/Hooks";
import RequireAuth from "./Service/RequireAuth";

function App() {
  const token = useAppSelector((state) => state.data.token);
  const navigate = useNavigate();
  useEffect(() => {
    token && navigate("/");
  }, [token]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Auth />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
