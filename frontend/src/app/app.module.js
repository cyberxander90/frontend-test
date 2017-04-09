import angular from 'angular';
import 'angular-ui-router';

import './app.scss';
import { AppComponent } from './app.component';

export const AppModule = angular
    .module('app', [
        'ui.router'
    ])
    .component('app', AppComponent)
    .name;