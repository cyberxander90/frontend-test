export const AppComponent = {
    template: require('./app.html'),
    controller: class AppComponent{

        constructor(){
            // ...
        }

        $onInit(){
            this.greeting = 'Hello World!!!';
        }
    }
};