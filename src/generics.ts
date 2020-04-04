// function merge(a: any, b: any) {
//   return {
//     ...a,
//     ...b
//   };
// }
//
// const merged = merge({ foo: 1 }, { bar: 1 });
// 타입 추론이 모두 깨진 상태, 결과가 any 라는 것은 merged 안에 무엇이 있는지 알 수 없다는 것

function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });
// 받는 인자는 무슨 타입이든 받되, 사용시 타입이 깨지지 않게 한다.

function wrap<T>(param: T) {
  return {
    param
  }
}

const wrapped = wrap(10);

// interface 에서의 generics
interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c']
};

// type alias 에서의 generics
type Items2<T> = {
  list: T[];
}

const items2: Items2<string> = {
  list: ['a', 'b', 'c']
};

// class 에서의 generics
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());


