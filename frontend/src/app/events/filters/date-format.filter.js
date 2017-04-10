export function dateFormat(){
    return function(date, format){

        if(format == 1){
            // JUL 24 @ 2017
            format = 'MMM D [@] YYYY'
        }
        if(format == 2){
            // JUL 24 @ 19:30
            format = 'MMM D [@] HH:MM'
        }
        if(format == 3){
            // JUL 24 @ 1930
            format = 'MMM D [@] HHMM'
        }
        if(format == 4){
            // 24 JUL
            format = 'D MMM'
        }
        if(format == 5){
            // 19:30
            format = 'HH:MM'
        }

        return moment(date).format(format);
    };
}