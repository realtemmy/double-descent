import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Home from "./routes/home/home";
import Shop from "./routes/shop/shop";
import SignIn from "./routes/signIn/sign-in";
import SignUp from "./routes/signUp/signUp";
import Footer from "./components/footer/footer";

import { fetchProductAsync } from "./redux/product/product-action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductAsync());
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
