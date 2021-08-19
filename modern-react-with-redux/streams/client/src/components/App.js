import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            Page One
            <Link to="/pagetwo">Go to page two</Link>
        </div>
    );
};

const PageTwo = () => {
    return (
        <div>
            Page Two
            <Link to="/">Go to page one</Link>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={PageOne} />
                <Route path="/pagetwo" component={PageTwo} />
            </BrowserRouter>
        </div>
    );
};

export default App;