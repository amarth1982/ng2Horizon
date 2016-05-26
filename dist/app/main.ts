import {bootstrap} from '@angular/platform-browser-dynamic'
import {provide} from '@angular/core'

import {AppComponent} from './app'

import {HORIZON, horizon} from './horizon'

horizon.onReady(()=>{
  console.info('horizon connected to rethinkDB server...')
  console.info('bootstrapping angluar2 application...')
  bootstrap(AppComponent, [
    provide(HORIZON, {
      useValue: horizon
    })
  ])
})
