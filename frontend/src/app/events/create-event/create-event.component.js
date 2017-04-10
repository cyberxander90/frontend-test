export const CreateEventComponent = {
    template: require('./create-event.html'),
    controller: class CreateEventComponent{
        $onInit(){
            this.title = '';
            this.description = '';
            this.location = '';
            this.imageUrl = '';
            this.times = [];
        }

        onImageUrlUpdated($event){
            console.log($event);
        }

        onTimesUpdated($event){
            console.log($event);
        }
    }
};