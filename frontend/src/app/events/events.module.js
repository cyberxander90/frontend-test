import angular from 'angular';

import { ListEventsComponent } from './list-events/list-events.component';
import { EventsService } from './services/events.service';
import { AllEventsComponent } from './all-events/all-events.component';
import { HighlightEventsComponent } from './highlight-events/highlight-events.component';
import { DetailsEventComponent } from './details-event/details-event.component';

export const EventsModule = angular
    .module('app.events',[

    ])
    .component('listEvents', ListEventsComponent)
    .component('allEvents', AllEventsComponent)
    .component('highlightEvents', HighlightEventsComponent)
    .component('detailsEvent', DetailsEventComponent)
    .service('eventsService', EventsService)
    .name;