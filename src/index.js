'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";


import clubSelect from './modules/clubSelect';
import visitCallbackForms from './modules/visitCallbackForms';

//club-select
clubSelect();

//visit-callback-forms
visitCallbackForms();
