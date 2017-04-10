export const ListEventsContainerComponent = {
    template: require('./list-events-container.html'),
    controller: class ListEventsContainerComponent {

        constructor(eventsService, $state, $timeout) {
            'ngInject';
            this.eventsService = eventsService;
            this.$state = $state;
            this.$timeout = $timeout;
        }

        $onInit() {
            this.eventsService
                .getEvents()
                .then(
                    events => this.events = events,
                    (error) => {
                        console.log(error)
                    }
                );

            this.eventsService
                .getHighLightEvents()
                .then(
                    highlights => this.highlights = highlights,
                    error => {
                        console.log(error);
                    }
                );
        }

        goToCreateEvent() {
            this.$timeout(
                () => {
                    this.$state.go(this.eventsService.getCreateEventState());
                });
        }
    }
};