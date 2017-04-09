export const ListEventsComponent = {
    template: require('./list-events.html'),
    controller: class ListEventsComponent{
        $onInit(){
            this.events = [
                {
                    id: 1,
                    title: 'mundial de futbol'
                },
                {
                    id: 2,
                    title: 'Serie del caribe'
                }
            ]
        }
    }
};