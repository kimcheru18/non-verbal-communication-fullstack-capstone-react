import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function SiteInfo(props) {
    return (
        <main id="site-info-wrapper" className="hide-everything">

            <div id="site-info-para1">
                <img src="assets/icon-images/flower.png" alt="" />
                <p>This <span>non-verbal communication </span> app is for anyone who has suffered some type of brain injury and has difficulty with verbal communication.</p>
            </div>

            <div id="site-info-para2">
                <p>It is a simple way to communicate without the need to search through long lists of words to find what you want to say.</p>
            <div>

            </div>
                <br />
                <p>You or your caregiver can create cards with images that include a text description.</p>
            </div>

            <div id="site-info-para3">
                <p><span>To get started...</span> select "ADD NEW" from the navigation bar then follow the prompts step by step to create a card.</p>
                <br />
                <p>Cards, Categories, Subcategories and Items can be updated or deleted in the Show All page.</p>

                <div id="site-info-images">
                    <img src="assets/icon-images/sneakers.png" alt="" />
                    <img src="assets/icon-images/bonsai.png" alt="" />
                    <img src="assets/icon-images/armchair-1.png" alt="" />
                    <img src="assets/icon-images/coffee-machine.png" alt="" />
                </div>
            </div>

        </main>
    )
}
