import angular from 'angular';

import { ListEventsComponent } from './list-events/list-events.component';
import { EventsService } from './services/events.service';
import { AllEventsComponent } from './all-events/all-events.component';
import { HighlightEventsComponent } from './highlight-events/highlight-events.component';

export const EventsModule = angular
    .module('app.events',[

    ])
    .component('listEvents', ListEventsComponent)
    .component('allEvents', AllEventsComponent)
    .component('highlightEvents', HighlightEventsComponent)
    .service('eventsService', EventsService)
    .name;