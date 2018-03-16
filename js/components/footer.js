import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Footer(props) {
    return (
        <footer role="content-info">
            <div>
                <p>© Kimberly Kearney</p>
                <p>
                    <a href="https://www.linkedin.com/in/kimberly-kearney" target="_blank">LinkedIn</a> |
                    <a href="https://github.com/kimcheru18" target="_blank">Github</a>
                </p>

            </div>

            <div id="flaticon-credit">
                <p>Icon made by </p>

                <a href="https://roundicons.com/">roundicons.com </a>
                <p>&</p>
                <a href="https://smashicons.com/">smashicons.com </a>

                <p>from www.flaticon.com E.g.: Icon made by Freepik from www.flaticon.com </p>
            </div>

        </footer>
    )
}
