import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import React, { useState } from "react";
import { PasswordCheck } from "./components/PasswordCheck";
import { Game } from "./components/TicTacToe";
import Button from "./components/Button";
import Input from "./components/Input";
import example from "./components/ReactHooks";
import InfiniteScroller from "./components/InfiniteScroll";
import Slider from "./components/Slider/Slider";
import Accordion from "./components/accordion/Accordion";
import FilterContainer from "./components/Filter/FilterContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Gallery from "./pages/Gallery";
import OtherPage from "./pages/OtherPage";
import Effect from "./pages/Effect";
import Page from "./pages/SectionApp";
import ImageApp from "./pages/imageApp";
import TaskApp from "./pages/TaksApp";
import EscapeHatches from "./pages/EscapeHatches";
function App() {
  // Class function example for

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/other-page" element={<OtherPage />} />
            <Route path="/effect" element={<Effect />}></Route>
            <Route path="/section-app" element={<Page />} />
            <Route path="/image-app" element={<ImageApp />} />
            <Route path="/task-app" element={<TaskApp />} />
            <Route path="/escape-hatch" element={<EscapeHatches/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
