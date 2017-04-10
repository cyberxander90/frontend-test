export const CreateEventComponent = {
    template: require('./create-event.html'),
    controller: class CreateEventComponent{

        constructor(eventsService, moment){
            this.eventsService = eventsService;
            this.moment = moment;
        }

        $onInit(){
            this.title = 'pp';
            this.description = 'pp2';
            this.location = 'pp3';
            this.imageUrl = 'http://media.cubadebate.cu/wp-content/uploads/2017/04/alba03-300x250.jpg';
            this.isValidImageUrl = null;
            this.dates = [];
        }

        onImageUrlUpdated($event){
            this.imageUrl = $event.imageUrl;
            this.isValidImageUrl = $event.isValid;
        }

        onDatesUpdated($event){
            this.dates = $event.dates;
        }

        createEvent(){
            var event = {
                title: this.title,
                description: this.description,
                location: this.location,
                eventImage: this.imageUrl,
                dates: this.dates.map(item => this.moment(item).toDate())
            };

            this.eventsService.createEvent(event);
        }
    }
};