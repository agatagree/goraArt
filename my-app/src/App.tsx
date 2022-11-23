import styles from './App.module.scss';
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className={styles.layout}>
      <NavBar />
      <div className={styles.content}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
