import { useEffect, useState } from "react";
import { rawgAPI } from "./api/api";
import "./App.css";

import Search from "./components/Search/Search";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import { BrowserRouter, Route } from "react-router-dom";
import MyLibrary from "./components/MyLibrary/MyLibrary";
import TopGames from "./components/LastGames/LastGames";
import Game from "./components/Games/Game/Game";
import Home from "./components/Home/Home";
import GenreGameListwithRouter from "./components/Home/GenreGameList/GenreGameList";
import LastGames from "./components/LastGames/LastGames";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="sidebar">
          <Logo />

          <Menu />
        </div>
        <div className="content">
          <Search />
          <Route
            exact
            path="/"
            render={() => <Home title="trending games" />}
          />
          <Route path="/mylibrary" render={() => <MyLibrary />} />
          <Route path="/lastgames" render={() => <LastGames />} />
          <Route path="/game/:gameId?" render={() => <Game />} />
          <Route
            path="/genre/:genres?"
            render={() => <GenreGameListwithRouter />}
          />
        </div>

        <div className="favorite">
          <div className="favoriteGames">
            <img src="" alt="Game Name" title="Game Name" />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
