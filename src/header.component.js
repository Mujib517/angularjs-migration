angular.module('app')
    .component('myHeader', {
        template: `<header>
        <nav class="navbar navbar-inverse">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">Angular App</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/users">Users</a></li>
          </ul>
        </div>
      </nav>
    </header>`
    });