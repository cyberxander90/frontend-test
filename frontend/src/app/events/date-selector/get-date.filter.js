import angular from 'angular';

export function getDateFilter(){
    return function(date){
        //if(!date){
        //    return '';
        //}
        //
        //var momentDate = date;
        //if(angular.isString(date)){
        //    momentDate = moment(date);
        //}

        return moment(date).format('D/M/YYYY');
    }
}