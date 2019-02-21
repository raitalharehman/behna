# behna
This package is about some cool funtions like
## Funtions
-  [Ellipsis](#About)
-  [existInThisRadius](#About)
-  [getSize](#About)

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

### License

Behna is [MIT licensed](./LICENSE).
