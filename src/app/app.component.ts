import { SettingsService, SharedService, SidebarService } from './services/service.index';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SettingsService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _settings: SettingsService) {
    this._settings.loadSettings();
  }
}
