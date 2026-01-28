import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public notification = signal<string | null>(null);

  show(message: string) {
    this.notification.set(message);
    setTimeout(() => { this.hide() }, 2000);
  }

  hide() {
    this.notification.set(null);
  }
}
