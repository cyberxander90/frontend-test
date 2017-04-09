export const DetailsEventComponent = {
    template: require('./details-event.html'),
    controller: class DetailsEventComponent{

        constructor(eventsService){
            this.eventsService = eventsService;
        }

        $onInit(){
            this.eventsService
                .getEvent(1)
                .then(
                    event => {
                        this.event = event;
                        console.log(event)
                    },
                    error => {
                        console.log(error);
                    }
                )
        }
    }
};