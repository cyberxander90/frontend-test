import angular from 'angular';
import 'angular-ui-router';

import { CommonModule } from './common/common.module';
import { EventsModule } from './events/events.module';

import './app.scss';
import { AppComponent } from './app.component';

export const AppModule = angular
    .module('app', [
        'ui.router',
        CommonModule,
        EventsModule
    ])
    .component('app', AppComponent)
    .name;