export function dateTimePickerDirective($timeout) {
    'ngInject';

    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            var options = scope.$eval(attrs.dateTimePicker);
            elem.datetimepicker(options).on('dp.change', (function (event) {
                $timeout(() => {
                    scope.$ctrl.newDate = event.date;
                });
            }));

            // see bootstrap-datetime-picker options on http://eonasdan.github.io/bootstrap-datetimepicker/
            // format: 'LL' | 'LT'
        }
    }
}