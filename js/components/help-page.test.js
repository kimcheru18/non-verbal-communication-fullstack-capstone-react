import React from 'react';
import {shallow, mount, render} from 'enzyme';

import HelpPage from './help-page';

describe('<HelpPage />', () => {
    it('Renders without crashing', () => {
        shallow(<HelpPage />);
                });
    });
