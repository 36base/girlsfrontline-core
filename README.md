# GirlsFrontline API

> 소녀전선 API

<a name="main"></a>

## Install
```bash
$ yarn add girlsfrontline-core
```

## Example
```javascript
import {dolls} from 'girlsfrontline-core';

// AR 타입 인형 찾기
const AR = dolls.filter(({type}) => type === 4);
```

<a name="doll"></a>
## [doll](#main) 멤버

<a name="doll_type"></a>
### [type](#main) ⇒ <code>Number</code>
해당 인형의 타입을 나타냅니다.

| Value | Description |
| --- | --- |
| 1 | HG |
| 2 | SMG |
| 3 | RF |
| 4 | AR |
| 5 | MG |
| 6 | SG |

```javascript
const {type} = doll;

switch (type) {
  case 1: console.log('HG');
    break;
  case 2: console.log('SMG');
    break;
  case 3: console.log('RF');
    break;
  case 4: console.log('AR');
    break;
  case 5: console.log('SG');
    break;
  case 6: console.log('MG');
    break;
  default:
    console.log('UNKNOWN');
}
```

<a name="doll_stats"></a>
### [stats](#main) ⇒ <code>Object</code>
해당 인형의 기본 스탯을 나타냅니다.

| Key | Value Type | Description |
| --- | --- | --- |
| armor | Number | 장갑 |
| dodge | Number | 회피 |
| hit | Number | 명중 |
| hp | Number | 체력 |
| pow | Number | 화력 |
| range | Number | 사거리(철혈) |
| rate | Number | 사속 |
| shield | Number | 보호막(철혈) |
| speed | Number | 이동속도 |
| crit | Number | 크리티컬 확률(%) |
| critDmg | Number | 크리티컬 데미지 추가 증가량(%) |
| armorPiercing | Number | 장갑 관통 |
| nightView | Number | 야간전 명중(%) |
| coolDown | Number | 쿨타임 감소(%) |
| bullet | Number | 장탄 수 |


<a name="doll_effect"></a>
### [effect](#main) ⇒ <code>Object(effect)</code>
해당 인형의 진형 버프 데이터를 나타냅니다.

| 1열 | 2열 | 3열 |
| --- | --- | --- |
| 7 | 8 | 9 |
| 4 | 5 | 6 |
| 1 | 2 | 3 |

| Key | Value Type | Description |
| --- | --- | --- |
| effectType | Number | 버프 대상 |
| effectCenter | Number | 버프 중심 |
| effectPos | Array(Number) | 버프 적용 위치 |
| gridEffect | Array(Effect) | 버프 목록 |

| Key | Value Type | Description |
| --- | --- | --- |
| Effect.type | [String(stat)](#doll_stats) | 스탯 종류 |
| Effect.value | Number | 스탯 증가량 |

```javascript
const {effect} = doll

effect['gridEffect'].map((elem) => {
  console.log(`${elem.type} 스탯 ${elem.value}% 상승`);
});
```
