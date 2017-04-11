export function dateTimePickerDirective($timeout) {

    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            var options = scope.$eval(attrs.dateTimePicker);
            elem.datetimepicker(options).on('dp.change', (function (event) {
                // todo. this directive must set its value to ngModel, or exposed via an event, instead to the tied scope.$ctrl.newDate
                $timeout(() => {
                    scope.$ctrl.newDate = event.date;
                });
            }));

            // see bootstrap-datetime-picker options on http://eonasdan.github.io/bootstrap-datetimepicker/
            // format: 'LL' | 'LT'
        }
    }
}