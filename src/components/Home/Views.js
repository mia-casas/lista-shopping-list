import React, { useEffect, useState } from 'react';
import HomePage from './Home';
import RecipeSearch from '../site/RecipeSearch';
import APIURL from '../../helpers/environment';
import {Route, Link, Switch} from 'react-router-dom';
import {routerList, routerDiv} from '../../Styles.js';
import FAQ from './FAQ'

const Views = (props) => {

    return(
        <div>
            <h1>Get Started!</h1>
            <div style={routerDiv}>
                <ul>
                    <li style={routerList}><Link className="navLink" style={{textDecoration: 'none', color: "#323232", fontWeight: "bold"}} to='/HomePage'>Shopping List</Link></li>
                    <li style={routerList}><Link className="navLink" style={{textDecoration: 'none', color: "#323232", fontWeight: "bold"}}to='/RecipeSearch'>Find Recipes</Link></li>
                    <li style={routerList}><Link className="navLink" style={{textDecoration: 'none', color: "#323232", fontWeight: "bold"}}to='/FAQ'>FAQ</Link></li>
                </ul>
            </div>

            <p>Are you going to the grocery store and forgetting to buy specific items? Need a space to plan for your trip? Create a <a><Link to='/HomePage'>shopping List</Link></a> to make your shopping experience effortless.</p>
            <br />
            <p>Unsure what to cook for your next meal? Get some ideas from our <a><Link to='/RecipeSearch'>recipe finder</Link></a>.</p>
    
            <Switch>
                <Route exact path='/RecipeSearch'><RecipeSearch /></Route>
                <Route exact path='/HomePage'><HomePage /></Route>
                <Route exact path='/FAQ'><FAQ /></Route>
            </Switch>
            </div>
    )
}

export default Views