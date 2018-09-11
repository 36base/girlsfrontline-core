# GirlsFrontline API

[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg)](https://github.com/preco21/eslint-config-prev) [![Build Status](https://travis-ci.org/36base/girlsfrontline-core.svg?branch=develop)](https://travis-ci.org/36base/girlsfrontline-core)

> A GirlsFrontline API

## Install

```bash
$ yarn add girlsfrontline-core@1.0.10-alpha11
```

## Example

```javascript
import {dolls, equips, fairy} from 'girlsfrontline-core';

// AR 타입 인형 찾기
const AR = dolls.filter(({type}) => type === 'ar');

// 전용 장비 찾기
const fitGuns = equips.filter(({fitGuns}) => fitGuns);

// 전투 요정 찾기
const battleFairy = fairy.filter(({category}) => category === 'battle');
```

## [doll](./#main) 멤버

| Key | Value Type | Value |
| :--- | :--- | :--- |
| id | Number | 도감번호 |
| name | String | 이름 |
| krName | String | 이름 \(한국어판\) |
| rank | Number | 등급 |
| type | [type](./#doll_type) | 총기 종류 |
| illust | String | 일러스트레이터 |
| voice | String | 성우 |
| buildTime | Number | 제조 시간\(초\) |
| drop | Array\(String\) | 드랍 지역 |
| skins | Array\(String\) | 스킨 목록 |
| nick | Array\(String\) | 별명 목록 |
| stats | [stats](./#doll_stats) | 스탯 |
| effect | [effect](./#doll_effect) | 진형 버프 |
| [getSkill](./#doll_getSkill) | Function ⇒ [`skill`](./#doll_skill) | 스킬 계산 |
| [getStats](./#doll_getStats) | Function ⇒ [`skill`](./#doll_stats) | 스탯 계산 |

## [equip](./#main) 멤버

| Key | Value Type | Value |
| :--- | :--- | :--- |
| name | String | 이름 |
| rank | Number | 등급 |
| category | [category](./#equip_category) | 카테고리 |
| type | [type](./#equip_type) | 장비 종류 |
| buildTime | Number | 제조 시간\(초\) |
| fitGuns | Array\(Number\) | 장착 가능한 인형 목록 |
| stats | [equipStats](./#equip_stats) | 장비 스탯 |

## [fairy](./#main) 멤버

| Key | Value Type | Value |
| :--- | :--- | :--- |
| id | Number | 도감번호 |
| category | [category](./#fairy_category) | 카테고리 |
| name | String | 이름 |
| krName | String | 이름 \(한국어판\) |
| grow | Number | 성장 수치 |
| buildTime | Number | 제조 시간\(초\) |
| [getStats](./#fairy_getStats) | Function ⇒ [`stats`](./#doll_stats) | 계산된 제대 버프 |

### [type](./#main) ⇒ `String`

해당 인형의 타입을 나타냅니다.

| Value | Description |
| :--- | :--- |
| hg | HG |
| smg | SMG |
| rf | RF |
| ar | AR |
| mg | MG |
| sg | SG |

### [stats](./#main) ⇒ `Object`

해당 인형의 기본 스탯을 나타냅니다.

| Key | Value Type | Description |
| :--- | :--- | :--- |
| armor | Number | 장갑 |
| dodge | Number | 회피 |
| hit | Number | 명중 |
| hp | Number | 체력 |
| pow | Number | 화력 |
| range | Number | 사거리\(철혈\) |
| rate | Number | 사속 |
| shield | Number | 보호막\(철혈\) |
| speed | Number | 이동속도 |
| crit | Number | 크리티컬 확률\(%\) |
| critDmg | Number | 크리티컬 데미지 추가 증가량\(%\) |
| armorPiercing | Number | 장갑 관통 |
| nightView | Number | 야간전 명중\(%\) |
| cooldown | Number | 쿨타임 감소\(%\) |
| bullet | Number | 장탄 수 |

### [effect](./#main) ⇒ `Object`

해당 인형의 진형 버프 데이터를 나타냅니다.

| 1열 | 2열 | 3열 |
| :--- | :--- | :--- |
| 7 | 8 | 9 |
| 4 | 5 | 6 |
| 1 | 2 | 3 |

| Key | Value Type | Description |
| :--- | :--- | :--- |
| effectType | Number | 버프 대상 |
| effectCenter | Number | 버프 중심 |
| effectPos | Array\(Number\) | 버프 적용 위치 |
| gridEffect | [stats](./#doll_stats) | 버프 목록 |

### [getSkill](./#main)\(options\) ⇒ [`skill`](./#doll_skill)

해당 인형의 계산된 스킬을 반환합니다.

| option | Value Type | Description |
| :--- | :--- | :--- |
| level | Number | 스킬 레벨 |
| night | bool | 야간전 |

```javascript
const {name, desc} = doll.getSkill({level: 3, night: false});

console.log(`${name}: ${desc}`);
```

### [getStats](./#main)\(options\) ⇒ [`stats`](./#doll_stats)

해당 인형의 계산된 스탯을 반환합니다.

| option | Value Type | Description |
| :--- | :--- | :--- |
| level | Number | 인형 레벨 |
| favor | Number | 호감도 \(0 ~ 200\) |

```javascript
const stats = doll.getStats({level: 90, favor: 100});

Object.entries(stats).forEach(([stat, value]) => {
  console.log(`${stat} ${value}`);
})
```

### [skill](./#main) ⇒ `Object`

해당 인형의 스킬 데이터를 나타냅니다.

| Key | Value Type | Description |
| :--- | :--- | :--- |
| id | Number | id |
| path | String | 이미지 경로 |
| name | String | 이름 |
| desc | String | 설명 |
| data | Object | 스킬 템플릿 |
| dataPool | Object | 스킬 데이터 |

```javascript
{
  "id": 39,
  "path": "comboBuffSelf",
  "name": "사중극점",
  "desc": "매3회 공격시, 그 다음 공격은 260% 데미지를 입힌다",
  "data": [{"key": "DM", "label": "공격력", "type": "damage"}],
  "dataPool": {"DM": 260}
}
```

### [category](./#main) ⇒ `String`

해당 장비의 카테고리를 나타냅니다.

| Value | Description |
| :--- | :--- |
| accessory | 부속 |
| ammo | 탄약 |
| doll | 인형 |

### [type](./#main) ⇒ `String`

해당 장비의 타입을 나타냅니다.

| Value | Description |
| :--- | :--- |
| scope | 옵티컬 |
| holo | 이오텍 |
| reddot | 레드닷 |
| nightvision | 야시장비 |
| apBullet | 철갑탄 |
| hpBullet | 특수탄 |
| sgBullet | 산탄 |
| hvBullet | 고속탄 |
| chip | 칩셋 |
| skeleton | 외골격 |
| armor | 방탄판 |
| special | ?? |
| silencer | 소음기 |
| ammoBox | 탄약통 |
| suit | 슈트 |

### [equipStats](./#main) ⇒ `stats(Object)`

해당 장비의 스탯을 나타냅니다.

| Key | Value Type | Description |
| :--- | :--- | :--- |
| min | Number | 최소 수치 |
| max | Number | 최대 수치 |
| upgrade | Number | 1레벨당 수치 증가량\(%\) |

```javascript
const {stats} = equip;

Object.entries(stats).forEach(([stat, {min, max, upgrade}]) => {
  console.log(`${stat} ${min} ~ ${max}, 1레벨당 ${upgrade}% 증가`);
});
```

### [category](./#main) ⇒ `String`

해당 요정의 카테고리를 나타냅니다.

| Value | Description |
| :--- | :--- |
| battle | 전투 요정 |
| strategy | 전략 요정 |

### [getStats](./#main)\(options\) ⇒ [`stats`](./#doll_stats)

해당 요정의 계산된 스탯을 반환합니다.

| option | Value Type | Description |
| :--- | :--- | :--- |
| level | Number | 레벨 |
| quality | Number | 개조 수치 |

```javascript
const stats = fairy.getStats({level: 100, quality: 5});

Object.entries(stats).forEach(([stat, value]) => {
  console.log(`${stat} ${value}% 증가`);
})
```

