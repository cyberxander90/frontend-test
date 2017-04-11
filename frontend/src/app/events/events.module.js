import angular from 'angular';

import { ListEventsContainerComponent } from './list-events-container/list-events-container.component';
import { EventsService } from './events.service';
import { AllEventsComponent } from './all-events/all-events.component';
import { HighlightEventsComponent } from './highlight-events/highlight-events.component';
import { DetailsEventContainerComponent } from './details-event-container/details-event-container.component';
import { CreateEventContainerComponent } from './create-event-container/create-event-container.component';
import { FloatingActionButtonComponent } from './floating-action-button/floating-action-button.component'
import { CardEventComponent } from './card-event/card-event.component';
import { BtnShareComponent } from './btn-share/btn-share.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { ShipEventComponent } from './ship-event/ship-event.component';
import { dateTimePickerDirective } from './date-selector/date-time-picker.directive';
import { ngSrcErrorDirective } from './image-selector/ng-src-error.directive';
import { eventsModuleRoutes } from './events.routes';
import { dateFormat } from './filters/date-format.filter';

export const EventsModule = angular
    .module('app.events',[

    ])
    .component('listEventsContainer', ListEventsContainerComponent)
    .component('allEvents', AllEventsComponent)
    .component('highlightEvents', HighlightEventsComponent)
    .component('detailsEventContainer', DetailsEventContainerComponent)
    .component('createEventContainer', CreateEventContainerComponent)
    .component('floatingActionBtn', FloatingActionButtonComponent)
    .component('cardEvent', CardEventComponent)
    .component('btnShare', BtnShareComponent)
    .component('dateSelector', DateSelectorComponent)
    .component('imageSelector', ImageSelectorComponent)
    .component('shipEvent', ShipEventComponent)
    .directive('dateTimePicker', dateTimePickerDirective)
    .directive('ngSrcError', ngSrcErrorDirective)
    .service('eventsService', EventsService)
    .filter('dateFormat', dateFormat)
    .config(eventsModuleRoutes)
    .name;