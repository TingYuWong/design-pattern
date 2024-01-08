interface IObserver {
  update(notification: string): void;
}

interface IYoutuber {
  register(o: IObserver): void;
  remove(o: IObserver): void;
  notify(): void;
}

class Youtuber implements IYoutuber {
  public name: string;
  private observers: IObserver[];

  constructor(name: string) {
    this.name = name;
    this.observers = [];
  }

  register(o: IObserver): void {
    this.observers.push(o);
  }

  remove(o: IObserver): void {
    const index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  notify(): void {
    for (const o of this.observers) {
      const notification = `${this.name} 出新影片了！！！！！！！！`;
      o.update(notification);
    }
  }
}

class Observer implements IObserver {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(notification: string): void {
    console.log("🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔");
    console.log(`${this.name}! ${notification}`);
    console.log("==============================\r\n");
  }
}

const Tina = new Observer("Tina");
const Cathy = new Observer("Cathy");

const RIIZE = new Youtuber("RIIZE");
const BTS = new Youtuber("BTS");
const ATEENZ = new Youtuber("ATEENZ");

RIIZE.register(Tina);
BTS.register(Tina);
BTS.register(Cathy);
ATEENZ.register(Cathy);

RIIZE.notify();
BTS.notify();
ATEENZ.notify();
