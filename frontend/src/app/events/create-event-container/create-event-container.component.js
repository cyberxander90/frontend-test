export const CreateEventContainerComponent = {
    template: require('./create-event-container.html'),
    controller: class CreateEventContainerComponent{

        constructor(eventsService, moment, toastr, $state){
            this.eventsService = eventsService;
            this.moment = moment;
            this.toastr = toastr;
            this.$state = $state;
        }

        $onInit(){
            this.title = '';
            this.description = '';
            this.location = '';
            this.imageUrl = '';
            this.isValidImageUrl = null;
            this.dates = [];
            this.showErrors = false;
            this.isSaving = false;
        }

        onImageUrlUpdated($event){
            this.imageUrl = $event.imageUrl;
            this.isValidImageUrl = $event.isValid;
        }

        onDatesUpdated($event){
            this.dates = $event.dates;
        }

        createEvent(){
            if(!this.title || !this.description || !this.location || !this.imageUrl || !this.dates.length){
                this.showErrors = true;
                this.toastr.warning('Please complete the form!');
                return;
            }

            var event = {
                title: this.title,
                description: this.description,
                location: this.location,
                eventImage: this.imageUrl,
                dates: this.dates.map(item => this.moment(item).toDate())
            };

            this.isSaving = true;
            this.eventsService.createEvent(event)
                .then(
                    () => {
                        this.$state.go('events.list-events');
                        this.toastr.success('Event successfully created!')
                    },
                    error => {
                        this.isSaving = false;
                        this.toastr.error('Failed to create the event!')
                    }
                );
        }
    }
};