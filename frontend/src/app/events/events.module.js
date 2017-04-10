import angular from 'angular';

import { ListEventsComponent } from './list-events/list-events.component';
import { EventsService } from './services/events.service';
import { AllEventsComponent } from './all-events/all-events.component';
import { HighlightEventsComponent } from './highlight-events/highlight-events.component';
import { DetailsEventComponent } from './details-event/details-event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { FloatingActionButtonComponent } from './floating-action-button/floating-action-button.component'
import { CardEventComponent } from './card-event/card-event.component';
import { BtnShareComponent } from './btn-share/btn-share.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { dateTimePickerDirective } from './date-selector/date-time-picker.directive';
import { eventsModuleRoutes } from './events.routes';
import { getTimeFilter } from './date-selector/get-time.filter';
import { getDateFilter } from './date-selector/get-date.filter';

export const EventsModule = angular
    .module('app.events',[

    ])
    .component('listEvents', ListEventsComponent)
    .component('allEvents', AllEventsComponent)
    .component('highlightEvents', HighlightEventsComponent)
    .component('detailsEvent', DetailsEventComponent)
    .component('createEvent', CreateEventComponent)
    .component('floatingActionBtn', FloatingActionButtonComponent)
    .component('cardEvent', CardEventComponent)
    .component('btnShare', BtnShareComponent)
    .component('dateSelector', DateSelectorComponent)
    .component('imageSelector', ImageSelectorComponent)
    .directive('dateTimePicker', dateTimePickerDirective)
    .service('eventsService', EventsService)
    .filter('getTime', getTimeFilter)
    .filter('getDate', getDateFilter)
    .config(eventsModuleRoutes)
    .name;