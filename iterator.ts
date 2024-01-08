interface IRecursion {
  next(): void;
  skip(step: number): void;
}

class Recursion implements IRecursion {
  private currNum: number;
  private nextNum: number;

  constructor() {
    this.currNum = 0;
    this.nextNum = 1;
  }

  next(): void {
    const newNext = this.currNum + this.nextNum;
    this.currNum = this.nextNum;
    this.nextNum = newNext;
    console.log("RESULT:", newNext);
  }

  skip(step: number): void {
    for (let i = 0; i < step; i++) {
      this.next();
    }
  }
}

const recursive = new Recursion();
// recursive.next();
// recursive.next();
// recursive.next();
recursive.skip(3);
recursive.next();
recursive.next();
recursive.next();
