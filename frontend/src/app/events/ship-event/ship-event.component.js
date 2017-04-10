import './ship-event.scss';

export const ShipEventComponent = {
    template: require('./ship-event.html'),
    bindings: {
        event: '<',
        onClicked: '&'
    }
};