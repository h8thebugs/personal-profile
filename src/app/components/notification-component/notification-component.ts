import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification-service';

@Component({
  selector: 'app-notification-component',
  imports: [],
  templateUrl: './notification-component.html',
  styleUrl: './notification-component.scss',
})
export class NotificationComponent {
  constructor(public notificationService: NotificationService) {
  }
}
