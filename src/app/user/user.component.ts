import { Component, Input } from "@angular/core";

@Component({
    template: ` <h3>{{data.login}}</h3>
    <img [src]="data.avatar_url" width="150" height="150" class="img-circle"/>`,
})
export class UserComponent {
    @Input()
    data;
}

