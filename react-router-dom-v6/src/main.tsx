import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import About from "./pages/about";
import { Menu } from "./components/Menu";
import { Posts } from "./pages/Posts";
import { Redirect } from "./pages/Redirect";
import { NotFount } from "./pages/NotFound";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        {/* <Route path="/posts/:id" element={<Posts />} /> */}
        <Route  path="/posts" element={<Posts />}>
          <Route path=':id' element={<div>Olá</div>}/>
        </Route>
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
