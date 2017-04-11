import './btn-share.scss';

export const BtnShareComponent = {
    template: require('./btn-share.html'),
    bindings: {
        event: '<'
    },
    controller: class BtnShareComponent{

        constructor($state){
            this.$state = $state;
        }

        $onInit(){
            // event page
            var eventDetailsUri = this.$state.href('events.details-event', {id: this.event.id}, {absolute: true})

            // twitter
            this.twitterLink = 'https://twitter.com/intent/tweet?' +
                'text=' + 'Iré al ' + this.event.title +
                ' @ ' + this.event.dates[0] + ' ' + encodeURI(eventDetailsUri);

            // ... here can include more share like facebook,...

        }
    }
};