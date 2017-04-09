export class EventsService{

    constructor($http, $q){
        'ngInject';

        this.$http = $http;
        this.$q = $q;
    }

    // get all events sorted by date
    getEvents(){
        return this.$http
            .get('/data/events.json')
            .then(
                response => response.data,
                error => {
                    // give an error treatment
                    // ...
                    return this.$q.reject(error);
                }
            );
    }

    // get the highlight events
    getHighLightEvents(){
        return this.$http
            .get('/data/events-highlight.json')
            .then(
                response => response.data,
                error => {
                    // give an error treatment
                    // ...
                    return this.$q.reject(error);
                }
            );
    }

    getEvent(id){
        return this.$http
            .get('/data/events.json')
            .then(
                response => response.data.find(
                    (item) => item.id == id
                ),
                error => {
                    // give an error treatment
                    // ...
                    return this.$q.reject(error);
                }
            )
    }
}