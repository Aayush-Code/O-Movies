import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MovieLounge from './MovieLounge';
import Theater from './MovieHall/Theater';
import Checkout from './MovieHall/Checkout';
import { featuresPageData, featuresBannerData } from '../featuresPageData';
import Logo from '../images/Film_color.svg';

/**
 * HomePage Component- Contains header and Route to different screens
 * 
 * Child components:
 * MovieLounge- Dynamic rendering of movies using movieHallConfig object
 * Theater- Seats selection screen
 * Checkout- Seats selected summary and confirmation
 * 
 */

const HomePage = (props: any) => {
  const { movieHallConfig } = props;

  return (
    <React.Fragment>
      <div className="o-movies-home-page">
        <div className="nav-bar">
          <div className="nav-bar-logo-container">
            <img src={Logo} height={"50px"} alt="Movie Booking Logo" />
            <h2>O/Movies</h2>
          </div>
        </div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MovieLounge}>
              <MovieLounge featuresPageData={featuresPageData} featuresBannerData={featuresBannerData} />
            </Route>
            <Route exact path="/bookingseats/:moviename" component={Theater}>
              <Theater movieHallConfig={movieHallConfig} />
            </Route>
            <Route exact path="/bookingseats/:moviename/checkout" component={Checkout}>
              <Checkout />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
