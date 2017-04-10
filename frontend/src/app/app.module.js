import angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-media-queries';

import 'moment';
import 'bootstrap/js/transition';
import 'bootstrap/js/collapse';
import 'eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min';

import { CommonModule } from './common/common.module';
import { EventsModule } from './events/events.module';

import './app.scss';
import { AppComponent } from './app.component';

export const AppModule = angular
    .module('app', [
        'ui.router',
        'ui.bootstrap',
        'matchMedia',
        CommonModule,
        EventsModule
    ])
    .component('app', AppComponent)
    .name;