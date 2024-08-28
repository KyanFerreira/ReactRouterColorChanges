import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Red from './pages/Red';
import Blue from './pages/Blue';
import Home from './pages/Home';

function App() {
const [count, setCount] = useState(0)

return (
<>
<div id="container">
<div id="navbar">
<Link to="/">Home Page</Link>
<Link to="/blue">Blue</Link>
<Link to="/red">Red</Link>

</div>
<div id="main-section">
<Routes>
<Route path="/blue" element={<Blue/>} />
<Route path="/red" element={<Red/>} />
<Route path="/" element={<Home/>} />
</Routes>
</div>
</div>
</>
)
}

export default App
