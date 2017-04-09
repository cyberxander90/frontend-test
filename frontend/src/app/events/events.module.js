import angular from 'angular';

import { ListEventsComponent } from './list-events/list-events.component';
import { EventsService } from './services/events.service';
import { AllEventsComponent } from './all-events/all-events.component';
import { HighlightEventsComponent } from './highlight-events/highlight-events.component';
import { DetailsEventComponent } from './details-event/details-event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { FloatingActionButtonComponent } from './floating-action-button/floating-action-button.component'
import { eventsModuleRoutes } from './events.routes';

export const EventsModule = angular
    .module('app.events',[

    ])
    .component('listEvents', ListEventsComponent)
    .component('allEvents', AllEventsComponent)
    .component('highlightEvents', HighlightEventsComponent)
    .component('detailsEvent', DetailsEventComponent)
    .component('createEvent', CreateEventComponent)
    .component('floatingActionBtn', FloatingActionButtonComponent)
    .service('eventsService', EventsService)
    .config(eventsModuleRoutes)
    .name;