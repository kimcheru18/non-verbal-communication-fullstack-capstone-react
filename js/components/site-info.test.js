import React from 'react';
import {shallow, mount, render} from 'enzyme';

import SiteInfo from './site-info';

describe('<SiteInfo />', () => {
    it('Renders without crashing', () => {
        shallow(<SiteInfo />);
                });
    });
