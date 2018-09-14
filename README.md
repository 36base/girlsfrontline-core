# README

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Build Status](https://travis-ci.org/36base/girlsfrontline-core.svg?branch=master)](https://travis-ci.org/36base/girlsfrontline-core)

#### Supported languages: Korean\(ko-KR\), Japanese\(ja-JP\), English\(en-US\), Chinese\(zh-CN\)

## Install

### Using npm

```bash
$ npm install girlsfrontline-core
```

### Using cdn

```markup
<script crossorigin src="https://unpkg.com/girlsfrontline-core/build/umd/gfcore.min.js"></script>
```

## Example

```javascript
import {init, i18next, dolls, equips, fairies} from 'girlsfrontline-core';

run();
function beforeAll() {
  // same as i18next.init
  return init({lng: 'ko-KR', fallbackLng: 'ko-KR'});
}
async function run() {
  await beforeAll();
  const g36 = dolls.find(({codename}) => codename === 'G36');
  g36.level = 70;
  g36.dummyLink = 3;
  g36.favor = 50;
  console.log(g36.stats);
  // { hp: 540,
  //   pow: 39,
  //   hit: 33,
  //   dodge: 31,
  //   speed: 10,
  //   rate: 66,
  //   armorPiercing: 10,
  //   criticalPercent: 20 }

  const equip = equips.find(({buildTime}) => buildTime === 2100);
  console.log(equip.stats);
  // { criticalPercent: { min: 26, max: 32 } }

  const sakura = fairies.find(({codename}) => codename === 'Sakura');
  sakura.skillLevel = 8;
  console.log(sakura.skill);
  // { id: '900118',
  //   codename: 'Sakura',
  //   name: '비옥환세',
  //   description: '다음 전투에서 비옥환이 적이 있는 곳에 넓은 범위의 불기둥을 만들어, 닿는 적에게 2초 동안 0.5초마다 90씩의 피해를 입힌다.',
  //   cooldownType: 'frame',
  //   initialCooldown: 30,
  //   cooldown: 0,
  //   detail: { '불기둥 대미지': '90' },
  //   consumption: 3 }
}

```

>



