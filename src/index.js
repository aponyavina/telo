'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";


import clubSelect from './modules/clubSelect';
import togglePopup from './modules/togglePopup';
import scrolling from './modules/scrolling';

//club-select
clubSelect();

//toggle-popup
togglePopup();

//scrolling
scrolling();

