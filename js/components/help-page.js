import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function HelpPage(props) {
    return (
        <main id="help-page-wrapper" className="hide-everything">
            <div>
                <p>I have a card on the SHOW ALL page that has a blank image.</p>
                <p>Go back to the ADD NEW page and search for the card, select an icon image and be sure to press "save."</p>
            </div>

            <div>
                <p>I have created a new category, subcategory or item but it is not selected in the dropdown list.</p>
                <p>After you have created a category, subcategory or item, you must select it from the dropdown list.</p>
            </div>

            <div>
                <p>Why are there cards in the app that I did not create?</p>
                <p>This app is currently not set up to allow users to create an individual login, therefore, anytime a user adds a card, it will be added to the universal database that all users will see.</p>
            </div>

            <div>
                <p>I can't find an icon to match my item.</p>
                <p>Currently there are a select number of icons for food, clothing, household items and sewing hobbies.</p>
            </div>
        </main>
    )
}
