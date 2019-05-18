const existInThisRadius = (checkPoint, centerPoint, km) => {
    var ky = 40000 / 360;
    var kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
    var dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
    var dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
    return Math.sqrt(dx * dx + dy * dy) <= km;
}

const Ellipsis = (props) => {
    return ((props.title).length > props.limit) ? (((props.title).substring(0, props.limit)) + '..') : props.title
}

function addBytes(add) {
    var bytes = null;
    return bytes += add;
}

function objSize(objectList, stack, value) {
    objectList.push(value);

    for (var i in value) {
        stack.push(value[i]);
    }
}

const getSize = (object) => {
    var objectList = [];
    var stack = [object];
    var bytes = 0;

    while (stack.length) {
        var value = stack.pop();

        if (typeof value != 'object'
            && objectList.indexOf(value) === -1) {
                
            if (typeof value === 'boolean')
                bytes = addBytes(4);

            else if (typeof value === 'string')
                bytes = addBytes(value.length * 2);

            else if (typeof value === 'number')
                bytes = addBytes(8);
        }

        else if (
            typeof value === 'object'
            && objectList.indexOf(value) === -1
        )
            objSize(objectList, stack, value);
    }
    return bytes;
};

const debounce = (func, wait, immediate) => {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

module.exports = {
    debounce,
    getSize,
    existInThisRadius,
    Ellipsis
}