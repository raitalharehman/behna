# behna
This package is about some cool funtions like

[![Build Status](https://travis-ci.org/raitalharehman/behna.svg?branch=master)](https://travis-ci.org/raitalharehman/behna)
[![npm version](https://badge.fury.io/js/behna.svg)](https://badge.fury.io/js/behna)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Funtions
-  [Ellipsis](#About)
-  [existInThisRadius](#About)
-  [getSize](#About)
-  [debounce](#debounce)

## Installation 
```sh
npm i behna
```
## Example
```sh
import {getSize, existInThisRadius, Ellipsis} from 'behna';
console.log("getSize =",getSize(obj));
console.log("existInThisRadius =",existInThisRadius({ lat: 31.449865899999995, lng: 74.2968439 }, { lat: 31.5204, lng: 74.3587 }, 10));
console.log("Ellipsis =",<Ellipsis title="Ms Water Internship" limit="15" />);
let debounceCall = debounce(
  function() {
    alert("i am runnig");
  },
  1000,
  false
);
  <button onClick={() => debounceCall()}>debounce</button>
      <div>keep pressing button it will triger after you top pressing</div>
    
```

## About
**getSize** tells size(Memory) of oj that <br>
**existInThisRadius** tells You location Exist in Radius or not 
```
Params(myLocation,AreaLocation,km)
mylocation is my lat, lng 
AreaLocation is Region or City Like Lahore lat lng
km is Radius Size in Kilimeters 
```
**Ellipsis** will show `...` in the end of line after given limit

```
<Ellipsis title="Ms Water Internship" limit="15" />
```

[![Edit Ellipsis](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/mo94rpy0op?fontsize=14)

### License

Behna is [MIT licensed](./LICENSE).
