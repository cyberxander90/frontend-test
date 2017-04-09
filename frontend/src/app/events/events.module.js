import angular from 'angular';

import { ListEventsComponent } from './list-events/list-events.component';
import { EventsService } from './services/events.service';

export const EventsModule = angular
    .module('app.events',[

    ])
    .component('listEvents', ListEventsComponent)
    .service('eventsService', EventsService)
    .name;