# API Reference

## Exports

### init\(options\): Promise&lt;{}&gt;

라이브러리 내부의 i18next를 초기화 하고 Promise를 반환합니다.

### [i18next](https://github.com/i18next/i18next)

### dolls: [Doll\[\]](docs.md#doll)

전술 인형 데이터

### equips: [Equip\[\]](docs.md#equip)

장비 데이터

### Fairies: [Fairy\[\]](docs.md#fairy)

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

### get/set skillLevel2\(\): number

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

## Equip

### get name\(\): string

```javascript
console.log(equip.name);
// 특수 전술기동장갑
```

### get introduction\(\): string

```javascript
console.log(equip.introduction);
// 철혈 공조가 무너지기 전 남겨놓은 장비로, 외골격의 기동장갑이 사용자의 생존능력을 극대화 시켜주지만, 몸과 정신에 심한 부담을 줍니다.
```

### get stats\(\): IEquipStats

```javascript
equip.level = 10;
console.log(equip.stats);
// {
//   criticalPercent: {
//     min: 34,
//     max: 48,
//   },
// }
```

### get/set level\(\): number

```javascript
// equip.maxLevel === 5
equip.level = equip.maxLevel;
console.log(equip.level);
// 5

equip.level = -1;
// Error: `level` must be greater than -1

equip.level = 6;
// Error: `level` must be less than 6
```

### id: number

### codename: string

```javascript
console.log(equip.codename);
// 配件_光学瞄准镜_N
```

### rank: number

| Value | Description |
| :--- | :--- |
| 2 | ⭐⭐ |
| 3 | ⭐⭐⭐ |
| 4 | ⭐⭐⭐⭐ |
| 5 | ⭐⭐⭐⭐⭐ |

### category: string

| Value |
| :--- |
| accessory |
| ammo |
| doll |

### type: string

| Value |
| :--- |
| none |
| optical |
| holo |
| reddot |
| nightvision |
| apAmmo |
| hpAmmo |
| shotgunShell |
| hvAmmo |
| chip |
| exoSkeleton |
| armorPlate |
| medal |
| suppressor |
| ammunitionBox |
| cloak |
| spPart |
| spClip |

### company: string

```javascript
console.log(equip.company);
// EOT
```

### exclusiveRate: number

경험치 계산용 데이터

### maxLevel: number

[level](docs.md#get-set-level-number-1)의 최대값

### [buildTime](docs.md#buildtime-number): number

### powerup: IPowerup

장비 강화 비용 계산용 데이터

```javascript
console.log(equip.powerup);
// {
//   "mp": 0.45,
//   "ammo": 0.15,
//   "mre": 0.3,
//   "part": 0.15
// }
```

### fitGuns: number\[\] \| undefined

해당 장비를 장착할 있는 인형 목록 \(전용장비 전용\)

```javascript
console.log(equip.fitGuns);
// [
//   101,  => UMP9
//   102,  => UMP40
//   103,  => UMP45
//   20103 => UMP45Mod
// ]
// or undefined
```

## Fairy

### get name\(\): string

```javascript
console.log(fairy.name);
// 야에 사쿠라
```

### get introduce\(\): string

```javascript
console.log(fairy.introduce);
// “피어나거라, 이 슬픈 세상이여”
```

### get description\(\): string

```javascript
console.log(fairy.description);
// 다수의 적에게 대미지를 입힐 수 있고, 전투 중 대량의 불 기둥을 만들어 닿은 적들에게 피해를 입힙니다
```

### get skill\(\): ISkill

```javascript
fairy.skillLevel = 1;
console.log(fairy.skill);
// {
//   name: '야타의 휘광',
//   description: '자신 주위 범위 2구역에 야타의 거울을 배치하고 레이저를 발사하여, 구역 내의 무작위 3기의 적에게 현재 체력의 10%의 피해를 입힌다.(보스 무효)',
//   cooldown: 3,
//   cooldownType: 'turn',
//   detail: {
//     '피해량': '10%',
//   },
// }
```

### get stats\(\): IStats

팀의 능력치 상승량 \(%\)

```javascript
fairy.qualityLevel = 2;
fairy.level = 100;
console.log(fairy.stats);
// {
//   pow: 13,
//   dodge: 12,
//   armor: 3,
//   criticalHarmRate: 16,
// }
```

### get skins\(\): IFairySkin\[\]

```javascript
console.log(fairy.skins);
// [
//   { id: 55, name: '야에 사쿠라', codename: 'Sakura_1', description: '1단계 기본 외형'},
//   { id: 56, name: '야에 사쿠라', codename: 'Sakura_2', description: '2단계 기본 외형'},
//   { id: 57, name: '야에 사쿠라', codename: 'Sakura_3', description: '3단계 기본 외형'},
// ]
```

### get/set level\(\): number

기본값: 100

```javascript
fairy.level = 100;
console.log(fairy.level);
// 100

fairy.level = 0;
// Error: `level` must be greater than 0

fairy.level = 101;
// Error: `level` must be less than 101
```

### get/set qualityLevel\(\): number

```text
fairy.qualityLevel = 5;
console.log(fairy.qualityLevel);
// 5

fairy.qualityLevel = 0;
// Error: `qualityLevel` must be greater than 0

fairy.qualityLevel = 6;
// Error: `qualityLevel` must be less than 6
```

| Value | Description |
| :--- | :--- |
| 1 | ⭐ |
| 2 | ⭐⭐ |
| 3 | ⭐⭐⭐ |
| 4 | ⭐⭐⭐⭐ |
| 5 | ⭐⭐⭐⭐⭐ |

### get/set [skillLevel](docs.md#get-set-skilllevel-number)\(\): number

### id: number

### category: string

| Value |
| :--- |
| battle |
| strategy |
| dummy |

### [grow](docs.md#grow-number): number

### [buildTime](docs.md#buildtime-number): number

### [powerup](docs.md#powerup-ipowerup): IPowerup

### retireExp: number

강화 재료로 사용 시 얻는 경험치

### qualityExp: number\[\]

강화 시 필요한 경험치

```javascript
console.log(fairy.qualityExp);
// [
//   0,
//   100,
//   500,
//   1500,
//   3000
// ]
```

