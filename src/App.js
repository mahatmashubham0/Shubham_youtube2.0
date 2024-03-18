import React from "react";
import Header from "./components/Header";
import VideoDetails from './components/VideoDetails'
import Feed from "./components/Feed";
import SearchResult from './components/SearchResult'
import { AppConetext } from "./context/ContextApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <AppConetext>
        <BrowserRouter>
            <div className="h-full flex flex-col">
              <Header />
                <Routes>
                  <Route path="/" exact element={<Feed />}/>
                  <Route path="/searchResults/:searchQuery" element={<SearchResult />}/>
                  <Route path="/video/:id" element={<VideoDetails />}/>
                </Routes>
            </div>
        </BrowserRouter>
    </AppConetext>
  );
};

export default App;
