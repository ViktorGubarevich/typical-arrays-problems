exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) min = array[i];
        }
        return min;
    }
};


exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0
    }
    return array.reduce((max, currentValue) => currentValue > max ? max = currentValue : max)
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0
    }
    return array.reduce((a, b) => (a + b)) / array.length;
};
