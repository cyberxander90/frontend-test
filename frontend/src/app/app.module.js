import angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angular-media-queries';

import { CommonModule } from './common/common.module';
import { EventsModule } from './events/events.module';
import { AppComponent } from './app.component';
import { appRun } from './app.run';

export const AppModule = angular
    .module('app', [
        'ui.router',
        'ui.bootstrap',
        'matchMedia',
        CommonModule,
        EventsModule
    ])
    .component('app', AppComponent)
    .run(appRun)
    .name;