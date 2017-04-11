import angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';

import { CommonModule } from './common/common.module';
import { EventsModule } from './events/events.module';
import { AppComponent } from './app.component';
import { appRun } from './app.run';
import * as constants from './app.constants';

export const AppModule = angular
    .module('app', [
        'ui.router',
        'ui.bootstrap',
        'matchMedia',
        CommonModule,
        EventsModule
    ])
    .component('app', AppComponent)
    .constant('moment', moment)
    .constant('toastr', toastr)
    .run(appRun)
    .name;

// register constants
for (let id in constants) {
        angular.module(AppModule).constant(id, constants[id]);
}