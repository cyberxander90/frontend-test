import './floating-action-button.scss';

export const FloatingActionButtonComponent = {
    template: require('./floating-action-button.html'),
    bindings: {
        title: '@',
        glyphicon: '@',
        isDisabled: '<'
    },
    controller: class FloatingActionButtonComponent{

    }
};