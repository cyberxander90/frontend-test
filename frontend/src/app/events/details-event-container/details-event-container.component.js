import './details-event-container.scss';

export const DetailsEventContainerComponent = {
    template: require('./details-event-container.html'),
    controller: class DetailsEventContainerComponent{

        constructor(eventsService, $stateParams){
            this.eventsService = eventsService;
            this.eventId = $stateParams.id;
            this.failedToLoadEvent = false;
        }

        $onInit(){
            this.eventsService
                .getEvent(this.eventId)
                .then(
                    event => {
                        this.event = event;
                        console.log(event)
                    },
                    error => {
                        console.log(error);
                        this.failedToLoadEvent = true;
                    }
                )
        }
    }
};