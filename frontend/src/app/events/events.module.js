import angular from 'angular';

import { ListEventsComponent } from './list-events/list-events.component';

export const EventsModule = angular
    .module('app.events',[

    ])
    .component('listEvents', ListEventsComponent)
    .name;