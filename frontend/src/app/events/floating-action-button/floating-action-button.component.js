import './floating-action-button.scss';

export const FloatingActionButtonComponent = {
    template: require('./floating-action-button.html'),
    bindings: {
        text: '@',
        fa: '@',
        isDisabled: '<',
        onClicked: '&'
    },
    controller: class FloatingActionButtonComponent{

    }
};