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

            <div id="flaticon-credit">
                <p>Icon made by</p>

                <a href="https://roundicons.com/">https://roundicons.com/  </a>
                <p>&</p>
                <a href="https://smashicons.com/">https://smashicons.com/ </a>

                <p>from www.flaticon.com E.g.: Icon made by Freepik from www.flaticon.com </p>
                </div>

                <div id="app-author">
            <p>© 2018 Kimberly Kearney</p>
            </div>

            <ul id="contact-info-ul">
                <li class="contact-info">
                    <a href="mailto:kimberly_kearney@comcast.net?subject=Hello" target="_blank" aria-label="Email Kimberly">
                    <i aria-hidden class="fas fa-envelope" title="Email">
                    </i>
                    </a>
                </li>

                <li class="contact-info">
                    <a href="https://github.com/kimcheru18" target="_blank" aria-label="View GitHub profile">
                    <i aria-hidden class="fab fa-github" title="Github">
                    </i>
                    </a>
                </li>

                <li class="contact-info">
                    <a href="https://angel.co/kimberly-kearney" target="_blank" aria-label="View AngelList profile">
                    <i aria-hidden class="fab fa-angellist" title="AngelList">
                    </i>
                    </a>
                </li>

                <li class="contact-info">
                    <a href="https://www.linkedin.com/in/kimberly-kearney/" target="_blank" aria-label="View LinkedIn profile">
                    <i aria-hidden class="fab fa-linkedin" title="LinkedIn">
                    </i>
                    </a>
                </li>
            </ul>

        </footer>
    )
}
