import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { NotificationService } from 'src/app/services/notification-service';
import { TranslateService } from '@ngx-translate/core';

@Directive({
  selector: '[appCopyToClipboard]',
})
export class CopyToClipboard implements OnInit {
  private readonly saveIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
    `;
  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
    private readonly notificationService: NotificationService,
    private readonly translationService: TranslateService) { }

  ngOnInit() {
    const iconElement = this.renderer.createElement('span');
    this.renderer.addClass(iconElement, 'copy-to-clipboard-icon');
    this.renderer.setProperty(iconElement, 'innerHTML', this.saveIcon);
    this.renderer.appendChild(this.el.nativeElement, iconElement);
  }

  @HostListener('click')
  async onClick() {
    await this.copyToClipboard(this.el.nativeElement.innerText);
    const message: string = this.translationService.instant('app.copied')
    this.notificationService.show(message);
  }

  private async copyToClipboard(text: string) {
    await navigator.clipboard.writeText(text);
  }
}
