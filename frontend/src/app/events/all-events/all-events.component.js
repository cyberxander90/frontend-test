export const AllEventsComponent = {
    template: require('./all-events.html'),
    bindings: {
        events: '<'
    },
    controller: class AllEventsComponent{

        constructor(screenSize){
            'ngInject';

            this.screenSize = screenSize;
        }

        $onInit(){
            this.desktop = this.screenSize.on('md, lg', (match) => {
                this.desktop = match;
            });
            this.phone = this.screenSize.on('sm', (match) => {
                this.phone = match;
            });
            this.phone = this.screenSize.on('xs', (match) => {
                this.mobile = match;
            });
        }
    }
};