angular.module('app')
    .component('users', {
        template: `
            <h1>Users</h1>
            <div class="well" ng-repeat="user in vm.users">
                <h3>{{user.login}}</h3>
                <img src="{{user.avatar_url}}" width="150" height="150" class="img-circle"/>
            </div>
        `,
        controllerAs: 'vm',
        controller: function (userService) {
            var vm = this;
            userService.get()
                .then(function (res) {
                    console.log(res);
                    vm.users = res.data;
                })
        }
    });