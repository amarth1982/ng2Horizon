import { Component, EventEmitter, Input, Output, OnInit, OnDestroy, NgZone, Inject } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common'

import {HORIZON} from './horizon'

@Component({
    selector: 'app',
    templateUrl: '/app/app.html',
    directives: [CORE_DIRECTIVES],
    providers: [],
    styleUrls: [],
    pipes: []
})

export class AppComponent implements OnInit, OnDestroy {

  constructor(@Inject(HORIZON) private _horizon:any, private _zone: NgZone) {}

  ngOnInit() {
    this._horizon('users').fetch().subscribe(result => {console.log(result) })
  }

  ngOnDestroy() {
  }

}
