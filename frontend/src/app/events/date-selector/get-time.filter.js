import angular from 'angular';

export function getTimeFilter(){
    return function(date){
        if(!date){
            return '';
        }

        var momentDate = date;
        if(angular.isString(date)){
            momentDate = moment(date);
        }

        return moment(momentDate).format('hh:mm a');
    }
}