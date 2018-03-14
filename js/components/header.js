import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Header(props) {
    return (
        <header id="header-wrapper">
            <h1><span>B.E.K</span> Lingo</h1>
            <h4><i>non-verbal communication</i></h4>
        </header>
    )
}
