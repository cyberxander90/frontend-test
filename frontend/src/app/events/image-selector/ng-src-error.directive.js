export function ngSrcErrorDirective(DEFAULT_EMPTY_IMAGE, $timeout){
    'ngInject';

    return {
        link: function(scope, elem, attrs) {
            elem.bind('error', function() {
                if (attrs.src != attrs.ngSrcError && attrs.src != DEFAULT_EMPTY_IMAGE) {
                    $timeout(() => {
                        attrs.$set('src', attrs.ngSrcError || DEFAULT_EMPTY_IMAGE);
                    });
                }
                console.log('ng-src-error')
            });
        }
    }
}