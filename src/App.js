import styles from './App.module.css';
import Login from './components/login/Login';
import Maker from './components/maker/Maker';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App({ authService }) {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
          <Route path="/maker" exact element={<Maker authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
