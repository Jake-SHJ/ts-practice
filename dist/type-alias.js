"use strict";
var person2 = {
    name: 'Human'
};
var expert2 = {
    name: 'Jake',
    skills: ['js', 'react']
};
var people2 = [person2, expert2];
var color = 'red';
var colors = ['red', 'orange'];
// 우리가 이번에 type 과 interface 를 배웠는데, 어떤 용도로 사용을 해야 할까요?
// 무엇이든 써도 상관 없는데 일관성 있게만 쓰시면 됩니다.
// 구버전의 타입스크립트에서는 type 과 interface 의 차이가 많이 존재했었는데 이제는 큰 차이는 없습니다.
// 다만 라이브러리를 작성하거나 다른 라이브러리를 위한 타입 지원 파일을 작성하게 될 때는 interface 를 사용하는것이 권장 되고 있습니다
