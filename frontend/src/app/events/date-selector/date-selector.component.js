import './date-selector.scss';

export const DateSelectorComponent = {
    template: require('./date-selector.html'),
    bindings: {
        times: '<',
        onTimesUpdated: '&'
    },
    controller: class DateSelectorComponent{

        $onInit(){
            this.newDate = null;
            this.newPrice = 0;
            this.times = this.times || [];
        }

        addDateTime(){
            var newDateTime = moment(this.newDate).toDate();

            // check if already exist the new dateTime
            if(this.times.find(item => moment(item.dateTime).isSame(newDateTime))){
                return;
            }

            this.times.push({
                dateTime: newDateTime,
                price: this.newPrice
            });

            this.onTimesUpdated({
                $event: {
                    times: this.times
                }
            });
        }

        removeDateTime(dateTime){
            this.times.splice(this.times.indexOf(dateTime), 1);

            this.onTimesUpdated({
                $event: {
                    times: this.times
                }
            });
        }
    }
};