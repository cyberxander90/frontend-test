import './date-selector.scss';

export const DateSelectorComponent = {
    template: require('./date-selector.html'),
    bindings: {
        dates: '<',
        onDatesUpdated: '&',
        editable: '<'
    },
    controller: class DateSelectorComponent{

        constructor(moment){
            this.moment = moment;
        }

        $onInit(){
            this.newDate = null;
            this.dates = this.dates || [];
        }

        // add a new date
        addDate(){
            var newDate = this.moment(this.newDate).toDate();

            // check if already exist the new dateTime
            if(this.existDate(this.newDate)){
                return;
            }

            this.dates.push(this.moment(newDate));

            this.onDatesUpdated({
                $event: {
                    dates: this.dates
                }
            });
        }

        removeDate(dateTime){
            this.dates.splice(this.dates.indexOf(dateTime), 1);

            this.onDatesUpdated({
                $event: {
                    dates: this.dates
                }
            });
        }

        existDate(date){
            return this.dates.find(item => this.moment(item).isSame(date));
        }

        canAddNewDate(){
            return this.newDate && !this.existDate(this.newDate);
        }
    }
};