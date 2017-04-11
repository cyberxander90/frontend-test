export class EventsService{

    constructor($http, $q, API_ROOT, toastr){

        this.$http = $http;
        this.$q = $q;
        this.API_ROOT = API_ROOT;
        this.toastr = toastr;
    }

    // get all events
    getEvents(){
        return this.$http
            .get(this.API_ROOT +  '/events')
            .then(
                response => {
                    return response.data.events
                },
                error => {
                    this.manageError(error);
                    return this.$q.reject(error);
                }
            );
    }

    // get the highlight events
    getHighLightEvents(){
        return this.$http
            .get(this.API_ROOT +  '/events/featured')
            .then(
                response => {
                    return response.data.events
                },
                error => {
                    this.manageError(error);
                    return this.$q.reject(error);
                }
            );
    }

    // get event by id
    getEvent(id){
        return this.$http
            .get(this.API_ROOT +  '/events/' + id)
            .then(
                response => {
                    return response.data.event;
                },
                error => {
                    this.manageError(error);
                    return this.$q.reject(error);
                }
            );
    }

    // create an event
    createEvent(event){

        return this.$http({
                url: this.API_ROOT +  '/events/',
                method: 'POST',
                data: JSON.stringify({event: event}),
                headers: {'Content-Type': 'application/json'}
            })
            .then(
                response => {
                    return response.data.event;
                },
                error => {
                    this.manageError(error);
                    return this.$q.reject(error);
                }
            );
    }

    // todo. the error treatment must be in service's consumers, not here. (this must be resolved for next deploy)
    manageError(error){
        this.toastr.error(error.data || 'Error!!!')
    }
}