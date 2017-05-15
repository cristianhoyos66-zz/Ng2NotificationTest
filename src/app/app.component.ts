import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private _service: NotificationsService) {}

    public options = {
        position: ["top", "right"],
        lastOnBottom: true,
        timeOut: 999 
    };

    create() {
        this._service.error(
            'Some Title',
            'Some content',
            {
                showProgressBar: true,
                pauseOnHover: true,
                clickToClose: true
            }
        )
    }
}