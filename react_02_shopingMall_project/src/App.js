import './App.css';
import Header from "./components/header/Header";
import {useState} from "react";
import myPaintings from "./dataObject/paintingData";
import Content from "./components/Content";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"
import Root from "./components/Root";
import View from "./components/pages/View";
import About from "./components/pages/About";
import Company from "./components/pages/Company";
import Terms from "./components/pages/Terms";
import Cart from "./components/pages/Cart";
import NotFindPageError from "./components/pages/NotFindPageError";
import List from "./components/pages/List";
import axios from "axios";

function App() {
    let [paintings, setPaintings] = useState(myPaintings);
    let navigate = useNavigate();

    return (
        <Root>
            <Header />
            <Content>
            <Routes>
                <Route path="/" element={<>
                    <List paintings={paintings} />
                    <button onClick={()=>{
                        axios.get('https://codingapple1.github.io/shop/data2.json')
                            .then((result)=>{
                                const copy = [...paintings, ...result.data];
                                console.log(copy);
                                setPaintings(copy);
                            })
                            .catch(()=>{
                                alert('요청 실패');
                            })
                    }}>+</button>
                </>}/>
                <Route path="/view/:id" element={<View painting={paintings}/>}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/about" element={<About navigate={navigate} />}>
                    <Route path="company" element={<Company />} />
                    <Route path="terms" element={<Terms />} />
                </Route>
                <Route path="*" element={<NotFindPageError />}/>
            </Routes>
            </Content>
        </Root>
    );
}

export default App;
