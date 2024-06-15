const add = (a=0, b=0) => {
    return a + b;
}

const subtract = (a=0, b=0) => {
    return a - b;
}

// module.exports = add;

module.exports = {
    add: add,
    sub: subtract,
}

// custom modules, external modules
// internal modules provided by nodejs