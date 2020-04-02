// function sum(x: number, y: number): number {
//   return 1 + 2;
// }
//
// sum(1, 2);
//
// function sumArray(numbers: number[]): number {
//   return numbers.reduce((acc, current) => acc + current, 0);
// }
//
// const total = sumArray([1, 2, 3, 4, 5]);
//
// function returnNothing(): void {
//  console.log('I am just saying hello world');
// }

// interface
interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());
});
