import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

// import '../assets/css/main.css';

import Header from '../js/components/header';
import Footer from '../js/components/footer';
import SiteInfo from '../js/components/site-info';
import HelpPage from '../js/components/help-page';


document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<Header />,
                                                  document.getElementById('reactHeader'));} );

document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<Footer />,
                                                  document.getElementById('reactFooter'));} );

document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<SiteInfo />,
                                                  document.getElementById('reactSiteInfo'));} );

document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<HelpPage />,
                                                  document.getElementById('reactHelpPage'));} );
