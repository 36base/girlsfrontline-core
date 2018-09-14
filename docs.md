# API Reference

## Exports

### init\(options\): Promise&lt;{}&gt;

라이브러리 내부의 i18next를 초기화 하고 Promise를 반환합니다.

### [i18next](https://github.com/i18next/i18next)

### dolls: [Doll\[\]](docs.md#doll)

전술 인형 데이터

### equips: Equip\[\]

장비 데이터

### Fairies: Fairy\[\]

전술 요정 데이터

### api

## Importing

### ES6+

```javascript
import {init} from 'girlsfrontline-core';
```

### ES5 \(CommonJS\)

```javascript
var init = require('girlsfrontline-core').init;
```

### ES5 \(UMD build\)

```javascript
var init = gfcore.init;
```

## Doll

### get name\(\): string

```javascript
console.log(doll.name);
// 콜트 리볼버
```

### get illust\(\): string

해당 전술인형의 illustrator 반환

### get voice\(\): string

해당 전술인형의 voice actor 반환

### get stats\(\): IStats

```javascript
doll.level = 70;
doll.dummyLink = 3;
doll.favor = 200;
console.log(doll.stats);
// {
//   hp: 280,
//   pow: 29,
//   hit: 52,
//   rate: 54,
//   dodge: 75
// }
```

### get effect\(\): IEffect

```javascript
doll.dummyLink = 3;
console.log(doll.effect);
// {
//   effectCenter: 5,
//   effectPos: [1, 2, 4, 7, 8],
//   effectType: 'all',
//   gridEffect: {
//     hit: 37,
//     rate: 22,
//   },
// }
doll.dummyLink = 5;
console.log(doll.effect);
// {
//   effectCenter: 5,
//   effectPos: [1, 2, 4, 7, 8],
//   effectType: 'all',
//   gridEffect: {
//     hit: 50,
//     rate: 30,
//   },
// }
```

### get skill1\(\): ISkill

### get skill2\(\): ISkill \| null

```javascript
doll.skillLevel = 7;
console.log(doll.skill);
// {
//   id: '109401',
//   codename: 'Clear',
//   name: '"조금 더 완벽하게!"',
//   description: '공격을 멈추고 다섯 차례 연주한다, 매 연주는 무작위 아군 하나의 화력과 명중을 25%(Glory Light 장착시 33%) 상승시킨다, 중첩 불가, 연주당 지속시간 각 3초.',
//   cooldownType: 'frame',
//   initialCooldown: 180,
//   cooldown: 261,
//   detail: {
//     '쿨타임': '8.7초',
//     '화력 상승치': '25%',
//     '명중 상승치': '25%',
//   },
//   consumption: 0,
// }
doll.skillLevel = 10;
console.log(doll.skill);
// {
//   id: '109401',
//   codename: 'Clear',
//   name: '"조금 더 완벽하게!"',
//   description: '공격을 멈추고 다섯 차례 연주한다, 매 연주는 무작위 아군 하나의 화력과 명중을 30%(Glory Light 장착시 40%) 상승시킨다, 중첩 불가, 연주당 지속시간 각 3초.',
//   cooldownType: 'frame',
//   initialCooldown: 180,
//   cooldown: 240,
//   detail: {
//     '쿨타임': '8초',
//     '화력 상승치': '30%',
//     '명중 상승치': '30%',
//   },
//   consumption: 0,
// }
```

### get obtain\(\): IObtain\[\]

```javascript
console.log(dolls.obtain);
// [{ 
//   id: 206,
//   description: '기간한정 이벤트【Glory Day】2-3클리어 보상',
// }]
```

### get skins\(\): ISkin\[\]

```javascript
console.log(doll.skin);
// [{
//   id: 509,
//   name: '포터블 여왕 2세',
// }]
```

### get/set level\(\): number

기본값: 100

MOD3일 경우\(id &gt; 20000\) 기본값: 120

```javascript
doll.level = 80;
console.log(doll.level);
// 80

doll.level = 0;
// Error: `level` must be greater than 0

doll.level = 121;
// Error: `level` must be less than 121
```

### get/set favor\(\): number

인형의 호감도. 기본값: 50

```javascript
doll.favor = 0;
console.log(doll.favor)
// 0

doll.favor = -1;
// Error: `favor` must be greater than -1
```

### get/set skillLevel\(\): number

기본값: 10

```javascript
doll.skillLevel = 8;
console.log(doll.skillLevel);
// 8

doll.skillLevel = 0;
// Error: `skillLevel` must be greater than 0

doll.skillLevel = 11;
// Error: `skillLevel` must be less than 11
```

### get/set dummyLink\(\): number

기본값: 5

```javascript
doll.dummyLink = 3;
console.log(doll.dummyLink);
// 3

doll.dummyLink = 0;
// Error: `dummyLink` must be greater than 0

doll.dummyLink = 6;
// Error: `dummyLink` must be less than 6
```

### id: number

### rank: number

| Value | Description |
| :--- | :--- |
| 2 | ⭐⭐ |
| 3 | ⭐⭐⭐ |
| 4 | ⭐⭐⭐⭐ |
| 5 | ⭐⭐⭐⭐⭐ |
| 7 | 🌟 \(**Extra\)** |

### type: string

| Value |
| :--- |
| hg |
| smg |
| ar |
| rf |
| mg |
| sg |

### buildTime: number

```javascript
doll.buildTime;
// 29400 => 08:10:00
```

### codename: string

```javascript
console.log(doll.codename);
// M1873
```

### mindupdate: IMindupdate\[\] \| undefined

마인드맵 업그레이드 비용

```javascript
console.log(doll.mindupdate);
// [{
//   core: 20,
//   mempiece: 200
// },
// {
//   core: 40,
//   mempiece: 1000
// },
// {
//   core: 60,
//   mempiece: 2000
// }]
// or undefined
```

### equip1: string\[\]

### equip2: string\[\]

### equip3: string\[\]

착용 가능한 장비 type 목록

### grow: number

스탯 계산용 데이터 \(인형 성장 배율\)

