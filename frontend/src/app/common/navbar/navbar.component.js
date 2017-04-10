export const NavbarComponent = {
    template: require('./navbar.html'),
    controller: class NavbarComponent{
        constructor($rootScope){
            this.$rootScope = $rootScope;
        }
    }
};