import { useEffect, useState } from "react";
import { rawgAPI } from "./api/api";
import "./App.css";

import Search from "./components/Search/Search";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import MyLibrary from "./components/MyLibrary/MyLibrary";
import Game from "./components/Games/Game/Game";
import GenreGameListwithRouter from "./components/Home/GenreGameList/GenreGameList";
import LastGames from "./components/LastGames/LastGames";
import FavoriteSidebar from "./components/FavoriteSidebar/FavoriteSidebar";
import HomewithRouter from "./components/Home/Home";

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
          <Route exact path="/">
            <Redirect to="/games/" />
          </Route>
          <Route
            path="/games/:pageId?"
            render={() => (
              <HomewithRouter
                title="trending games"
                key={window.location.pathname}
              />
            )}
          />
          <Route path="/mylibrary" render={() => <MyLibrary />} />
          <Route path="/lastgames" render={() => <LastGames />} />
          <Route
            path="/game/:gameId?"
            render={() => <Game key={window.location.pathname} />}
          />
          <Route
            path="/genre/:genres?/:pageId?"
            render={() => (
              <GenreGameListwithRouter key={window.location.pathname} />
            )}
          />
        </div>

        <div className="favorite">
          <FavoriteSidebar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
