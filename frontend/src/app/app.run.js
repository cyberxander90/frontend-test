export function appRun($rootScope, $state){
    'ngInject';

    // store the previous route name and params, to allow return the previous page
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $rootScope.previousStateName = fromState.name;
        $rootScope.previousStateParams = fromParams;
        alert('ok')
    });

    // to go to the previous page
    $rootScope.back = function () {
        if (!$rootScope.previousStateName) {
            $state.go('events.list-events');
        }
        else {
            $state.go($rootScope.previousStateName, $rootScope.previousStateParams);
        }
    };
}