angular.module('app')
    .component('users', {
        template: `
            <h1>Users</h1>
            <div class="well" ng-repeat="user in vm.users">
               <user [data]="user"></user>
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