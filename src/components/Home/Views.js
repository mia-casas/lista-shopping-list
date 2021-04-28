import React, { useEffect, useState } from 'react';
import {Container} from 'reactstrap';
import HomePage from './Home';
import RecipeSearch from '../site/RecipeSearch';
import APIURL from '../../helpers/environment';
import {Route, Link, Switch} from 'react-router-dom';

const Views = (props) => {

    return(
        <div>

            <div>
                <ul>
                    <li><Link to='/RecipeSearch'>Find Recipes</Link></li>
                    <li><Link to='/HomePage'>Shopping List</Link></li>
                </ul>
            </div>
            <Switch>
                <Route exact path='/RecipeSearch'><RecipeSearch /></Route>
                <Route exact path='/HomePage'><HomePage /></Route>
            </Switch>
            </div>
    )
}

export default Views