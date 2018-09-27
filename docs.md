# API Reference

## Exports

### dolls: [Doll\[\]](docs.md#doll)

전술 인형 데이터

### equips: [Equip\[\]](docs.md#equip)

장비 데이터

### fairies: [Fairy\[\]](docs.md#fairy)

전술 요정 데이터

### api

## Importing

### ES6+

```javascript
import {dolls, equips, fairies, api} from 'girlsfrontline-core';
```

### ES5 \(CommonJS\)

```javascript
var gfcore = require('girlsfrontline-core');
```

### ES5 \(UMD build\)

```javascript
var gfcore = window.gfcore;
```

## Doll

### name: string

해당 전술인형의 이름

```javascript
console.log(doll.name)
// gun-10000001
console.log(t(doll.name))
// Colt Revolver
```

### extra: string

해당 전술인형의 extra 데이터

```javascript
console.log(doll.illust)
// gun-40000001
const extra = t(doll.illust).split(',');
// ['Saru','Aimi Tanaka','']

console.log(extra[0]) // illustrator
// Saru
console.log(extra[1]) // voice actor
// Aimi Tanaka
```

### get stats\(\): IStats

해당 전술인형의 현재 스탯

```javascript
doll.level = 70;
doll.dummyLink = 3;
doll.favor = 200;
console.log(doll.stats);
// { hp: 340,
//   pow: 34,
//   hit: 42,
//   dodge: 65,
//   speed: 15,
//   rate: 43,
//   armorPiercing: 10,
//   criticalPercent: 20 }
```

### get effect\(\): IEffect

```javascript
doll.dummyLink = 5;
console.log(doll.effect);
// { effectType: 'all',
//   effectCenter: 5,
//   effectPos: [ 2, 4, 6, 8 ],
//   gridEffect: { pow: 24, hit: 50 } }

doll.dummyLink = 3;
console.log(doll.effect);
// { effectType: 'all',
//   effectCenter: 5,
//   effectPos: [ 2, 4, 6, 8 ],
//   gridEffect: { pow: 18, hit: 37 } }
```

### get skill1\(\): ISkill

```javascript
doll.skillLevel = 7;
console.log(doll.skill1);
// { id: '100503',
//   codename: 'powBuff',
//   name: 'battle_skill_config-110050307',
//   description: 'battle_skill_config-210050307',
//   cooldownType: 'frame',
//   initialCooldown: 180,
//   cooldown: 390,
//   detail: 'battle_skill_config-310050307',
//   consumption: 0 }
console.log(t(doll.skill1.detail));
// Increase all allies' damage by 18% for 7 seconds.
```

### get skill2\(\): ISkill \| null

```javascript
doll.skillLevel2 = 10;
console.log(doll.skill2);
// null
```

### obtain: IObtain\[\]

```javascript
console.log(dolls.obtain);
// [ { id: 1, description: 'gun_obtain-10000001' },
//   { id: 3, description: 'gun_obtain-10000003' } ]
console.log(t(dolls.obtain[0].description));
console.log(t(dolls.obtain[1].description));
// -Obtainable from standard production
// -Obtainable as a drop from normal battles
```

### skins: ISkin\[\]

```javascript
console.log(doll.skin);
// [ { id: 301, name: 'skin-10000301' },
//   { id: 2105, name: 'skin-10002105' } ]
console.log(t(dolls.skin[0].name));
console.log(t(dolls.skin[1].name));
// Colt Revolver - Wish upon a Star
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

기본값: 10

```javascript
doll.skillLevel2 = 8;
console.log(doll.skillLevel2);
// 8

doll.skillLevel2 = 0;
// Error: `skillLevel2` must be greater than 0

doll.skillLevel2 = 11;
// Error: `skillLevel2` must be less than 11
```

### get/set dummyLink\(\): number

기본값: 5

```javascript
doll.dummyLink = 3;
console.log(doll.dummyLink);
// 3

doll.dummyLink = 0;
// Error: `dummyLink` must be greater than 0
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

착용 가능한 [장비 type](docs.md#type-string-1) 목록

### grow: number

스탯 계산용 데이터 \(인형 성장 배율\)

## Equip

### name: string

```javascript
console.log(equip.name);
// equip-10000092
console.log(t(equip.name));
// UMP UX Exoskeleton
```

### introduction: string

```javascript
console.log(equip.introduction);
// equip-30000092
console.log(t(equip.introduction));
// A highly mobile exoskeleton specially calibrated for T-Dolls of the UMP weapons platform by the former Equipment Department. It greatly increases evasive ability while preserving firing accuracy.
```

### get stats\(\): IEquipStats

```javascript
equip.level = 10;
console.log(equip.stats);
// { dodge: { min: 28, max: 35 },
//   criticalHarmRate: { min: 18, max: 25 } }
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
// 人形装备_外骨骼_UMP
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

### name: string

```javascript
console.log(fairy.name);
// fairy-10000004
console.log(t(fairy.name));
// Shield Fairy
```

### introduce: string

```javascript
console.log(fairy.introduce);
// fairy-20000004
console.log(t(fairy.introduce));
// "There's nothing to be afraid of anymore."
```

### description: string

```javascript
console.log(fairy.description);
// fairy-30000004
console.log(t(fairy.description));
// Puts up a magnetic shield. Can provide shelter against rain, dust, and nuisance in general.
```

### get skill\(\): ISkill

```javascript
fairy.skillLevel = 1;
console.log(fairy.skill);
// { id: '900101',
//   codename: 'shield',
//   name: 'battle_skill_config-190010101',
//   description: 'battle_skill_config-290010101',
//   cooldownType: 'frame',
//   initialCooldown: 30,
//   cooldown: 0,
//   detail: 'battle_skill_config-390010101',
//   consumption: 3 }
console.log(t(fairy.skill1.detail));
// Shield Durability: 40
```

### get stats\(\): IStats

팀의 능력치 상승량 \(%\)

```javascript
fairy.qualityLevel = 2;
fairy.level = 100;
console.log(fairy.stats);
// { pow: 10, hit: 30, dodge: 40 }
```

### skins: IFairySkin\[\]

```javascript
console.log(fairy.skins);
// [ { id: 10,
//   codename: 'shield_1',
//   name: 'fairy_skin-10000010',
//   description: 'fairy_skin-20000010' },
// { id: 11,
//   codename: 'shield_2',
//   name: 'fairy_skin-10000011',
//   description: 'fairy_skin-20000011' },
// { id: 12,
//   codename: 'shield_3',
//   name: 'fairy_skin-10000012',
//   description: 'fairy_skin-20000012' } ]
console.log(t(fairy.skins[0].description));
// Tier 1 default skin
```

### get/set level\(\): number

기본값: 100

```javascript
fairy.level = 100;
console.log(fairy.level);
// 100

fairy.level = 0;
// Error: `level` must be greater than 0
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

