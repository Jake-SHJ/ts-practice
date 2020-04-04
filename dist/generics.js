"use strict";
// function merge(a: any, b: any) {
//   return {
//     ...a,
//     ...b
//   };
// }
//
// const merged = merge({ foo: 1 }, { bar: 1 });
// 타입 추론이 모두 깨진 상태, 결과가 any 라는 것은 merged 안에 무엇이 있는지 알 수 없다는 것
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 1 });
// 받는 인자는 무슨 타입이든 받되, 사용시 타입이 깨지지 않게 한다.
function wrap(param) {
    return {
        param: param
    };
}
var wrapped = wrap(10);
var items = {
    list: ['a', 'b', 'c']
};
var items2 = {
    list: ['a', 'b', 'c']
};
// class 에서의 generics
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: true,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
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
