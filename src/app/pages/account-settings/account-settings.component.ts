import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  providers: [SettingsService],
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(private _settings: SettingsService) { }

  ngOnInit() {
    this.check()
  }

  private changeThmeColor(theme: string, link: any) {
    this.checkClass(link)
    this._settings.loadTheme(theme)
  }

  private checkClass(link: any) {
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores){
      ref.classList.remove('working')
    }
    link.classList.add('working')
  }

  private check() {
    const selectores: any = document.getElementsByClassName('selector');
    const theme = this._settings.settings.theme
    for (const ref of selectores){
      if (ref.getAttribute('data-theme') === theme ) {
        ref.classList.add('working')
        break;
      }
    }
  }
}
