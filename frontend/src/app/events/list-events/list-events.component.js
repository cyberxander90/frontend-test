export const ListEventsComponent = {
    template: require('./list-events.html'),
    controller: class ListEventsComponent {

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