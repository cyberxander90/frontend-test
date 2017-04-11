import './navbar.scss';

export const NavbarComponent = {
    template: require('./navbar.html'),
    controller: class NavbarComponent{

        constructor($transitions, $state, HOME_STATE){
            this.$transitions = $transitions;
            this.$state = $state;
            this.HOME_STATE = HOME_STATE;
            this.goHome = false;
        }

        $onInit(){
            this.$transitions.onSuccess({}, () => {
                this.goHome = this.$state.current.name != this.HOME_STATE;
            });
        }
    }
};