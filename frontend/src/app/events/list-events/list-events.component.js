export const ListEventsComponent = {
    template: require('./list-events.html'),
    controller: class ListEventsComponent{

        constructor(eventsService){
            this.eventsService = eventsService;
        }

        $onInit(){
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
    }
};