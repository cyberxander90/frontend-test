export function eventsModuleRoutes($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('events', {
            url: '/events',
            template: "<ui-view></ui-view>",
            abstract: true
        })
        .state('events.list-events', {
            url: '/',
            component: 'listEventsContainer'
        })
        .state('events.details-event', {
            url: '/{id: int}',
            component: 'detailsEventContainer'
        })
        .state('events.create-event', {
            url: '/create',
            component: 'createEvent'
        });

    $urlRouterProvider.otherwise('/events/');
}