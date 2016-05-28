
import {Observable} from 'rxjs/observable'

declare interface IStatus{
  type: string
}

export declare interface  IHorizon {
  connect():void

  disconnect():void

  onReady():Observable<IStatus>

  status():Observable<IStatus>

  onDisconnected(): Observable<IStatus>

  onSocketError(): Observable<IStatus>
}

declare function Horizon(): IHorizon;

export const HORIZON = 'HORIZON'

export let horizon = Horizon()

horizon.connect()
