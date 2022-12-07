import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import { SingleArtWork } from "./components/SingleArtWork/SingleArtWork";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { MessagePage } from "./components/utils/messages/MessagePage";
import { Basket } from "./components/Shop/Basket/Basket";
import { Search } from "./components/Search/Search";
import { NavBar } from "./components/NavBar/NavBar";
import { SignUp } from "./components/Authorization/SignUp/SignUp";
import { ForgotPassword } from "./components/Authorization/ForgotPassword/ForgotPassword";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.layout}>
          <NavBar />
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/:id" element={<SingleArtWork />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/search" element={<Search />} />
              <Route
                path="*"
                element={<MessagePage message={"pageNotFound"} />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
