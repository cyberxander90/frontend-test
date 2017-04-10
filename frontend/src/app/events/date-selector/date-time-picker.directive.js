export function dateTimePickerDirective($timeout, $compile) {
    return {
        require: '?ngModel',
        restrict: 'A',
        link: function (scope, elem, attrs, ngModel) {
            var options = scope.$eval(attrs.dateTimePicker);
            elem.datetimepicker(options).on('dp.change', (function (event) {
                $timeout(() => {
                    scope.$ctrl.newDate = event.date;
                })
            }));

            // see bootstrap-datetime-picker options on http://eonasdan.github.io/bootstrap-datetimepicker/
            // format: 'LL' | 'LT'
        }
    }
}