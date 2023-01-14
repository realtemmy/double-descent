import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Home from "./routes/home/home";
import SignIn from "./routes/signIn/sign-in";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
