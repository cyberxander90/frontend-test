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
            var eventDetailsUri = this.$state.href('events.details-event', {id: this.event.id}, {absolute: true})

            this.twitterLink = 'https://twitter.com/intent/tweet?' +
                'text=' + 'Iré al ' + this.event.title +
                ' @ ' + this.event.dates[0] + ' ' + encodeURI(eventDetailsUri);

        }
    }
};