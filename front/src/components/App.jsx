import React from "react";
import {Routes, Route} from "react-router-dom";
// import Home from "./Home";
import Main from "./Main.jsx";
import Reciept from "./Reciept.jsx";
import About from "./About.jsx";
import Notfondpage from "./Notfondpage.jsx";
import "../styles/App.css"
import Layout from "./Layout.jsx";
import Reciepts from "./Reciepts.jsx";

function App() {
    return (
        <>


            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />}/>
                    <Route path="reciept" element={<Reciept />}/>
                    <Route path="reciept/:id" element={<Reciepts />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="*" element={<Notfondpage />}/>
                </Route>
            </Routes>
        </>

    );
}

export default App;