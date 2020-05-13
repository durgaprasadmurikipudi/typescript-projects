type Callback = () => void;

export class Event {
  events: { [key: string]: Callback[] } = {};

  on(eventName:string, callback: Callback): void {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    handlers.forEach((callback: Callback):void => { callback() })
  }
};