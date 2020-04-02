interface Person {
  name: string;
  age?: number;
}
interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: 'Human',
  age: 20
};

const expert: Developer = {
  name: 'Jake',
  skills: ['JS', 'react']
};

const people: Person[] = [person, expert];