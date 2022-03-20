import { Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import Account from "pages/Account";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Account" element={<Account />} />
    </Routes>
  );
}
