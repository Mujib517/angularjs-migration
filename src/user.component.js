angular.module('app')
    .component('user', {
        template: ` <h3>{{$ctrl.data.login}}</h3>
                    <img src="{{$ctrl.data.avatar_url}}" width="150" height="150" class="img-circle"/>`,
        bindings: {
            data: '<'
        }
    });