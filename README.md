# GirlsFrontline API

> 소녀전선 API

<a name="main"></a>

## Install
```bash
$ yarn add girlsfrontline-core
```

## Example
```javascript
import {dolls, equips} from 'girlsfrontline-core';

// AR 타입 인형 찾기
const AR = dolls.filter(({type}) => type === 4);

// 전용 장비 찾기
const fitGuns = equips.filter(({fitGuns}) => fitGuns !== undefined);
```

<a name="doll"></a>
## [doll](#main) 멤버

| Key | Value Type | Value |
| --- | --- | --- |
| id | Number | 도감번호 |
| name | String | 이름 |
| krName | String | 이름 (한국어판) |
| rank | Number | 등급 |
| type | [type](#doll_type) | 총기 종류 |
| illust | String | 일러스트레이터 |
| voice | String | 성우 |
| buildTime | Number | 제조 시간(초) |
| drop | Array(String) | 드랍 지역 |
| skins | Array(String) | 스킨 목록 |
| nick | Array(String) | 별명 목록 |
| stats | [stats](#doll_stats) | 스탯 |
| effect | [effect](#doll_effect) | 진형 버프 |

<a name="equip"></a>
## [equip](#main) 멤버

| Key | Value Type | Value |
| --- | --- | --- |
| name | String | 이름 |
| rank | Number | 등급 |
| category | Number | 카테고리 |
| type | Number | 장비 종류 |
| buildTime | Number | 제조 시간(초) |
| fitGuns | Array(Number) | 장착 가능한 인형 목록 |
| stats | [equipStats](#equip_stats) | 장비 스탯 |

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
### [effect](#main) ⇒ <code>Object</code>
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
| gridEffect | [stats](#doll_stats) | 버프 목록 |

<a name="equip_stats"></a>
### [equipStats](#main) ⇒ <code>stats(Object)</code>
해당 장비의 스탯을 나타냅니다.

| Key | Value Type | Description |
| --- | --- | --- |
| min | Number | 최소 수치 |
| max | Number | 최대 수치 |
| upgrade | Number | 1레벨당 수치 증가량(%) |

```javascript
const {stats} = equip;

Object.entries(stats).forEach(([stat, {min, max, upgrade}]) => {
  console.log(`${stat} ${min} ~ ${max}, 1레벨당 ${upgrade}% 증가`);
});
```
