import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  providers: [SidebarService],
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public _sidebar: SidebarService) { }

  ngOnInit() {
  }

}
