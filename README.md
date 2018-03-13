# GirlsFrontline API

> A GirlsFrontline API

<a name="main"></a>

## IMPORTANT

0.4.0에서 일부 값이 변경되었습니다.
### before
```json
{
  "type": 1
}
```
```json
{
  "category": 1,
  "type": 1
}
```
### after
```json
{
  "type": "hg"
}
```
```json
{
  "category": "accessory",
  "type": "scope"
}
```

## Install
```bash
$ yarn add girlsfrontline-core
```

## Example
```javascript
import {dolls, equips} from 'girlsfrontline-core';

// AR 타입 인형 찾기
const AR = dolls.filter(({type}) => type === 'ar');

// 전용 장비 찾기
const fitGuns = equips.filter(({fitGuns}) => fitGuns);
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
| category | [category](#equip_category) | 카테고리 |
| type | [type](#equip_type) | 장비 종류 |
| buildTime | Number | 제조 시간(초) |
| fitGuns | Array(Number) | 장착 가능한 인형 목록 |
| stats | [equipStats](#equip_stats) | 장비 스탯 |

<a name="doll_type"></a>
### [type](#main) ⇒ <code>String</code>
해당 인형의 타입을 나타냅니다.

| Value | Description |
| --- | --- |
| hg | HG |
| smg | SMG |
| rf | RF |
| ar | AR |
| mg | MG |
| sg | SG |

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

<a name="equip_category"></a>
### [category](#main) ⇒ <code>String</code>
해당 장비의 카테고리를 나타냅니다.

| Value | Description |
| --- | --- |
| accessory | 부속 |
| ammo | 탄약 |
| doll | 인형 |

<a name="equip_type"></a>
### [type](#main) ⇒ <code>String</code>
해당 장비의 타입을 나타냅니다.

| Value | Description |
| --- | --- |
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
