import _ from 'lodash';

const isComplex = (val) => {
    if (_.isPlainObject(val) === true) {
        return '[complex value]';
    }
    if ((val === true) || (val === false) || (val === null)) {
        return val;
    }
    return `'${val}'`;
};

export const formatPlain = (obj) => {
    const iter = (tree, parent) => tree.map((node) => {
        const path = [...parent, node.key].join('.');
    switch(node.type) {
        case 'add':
            return `Property '${path}' was added with value: ${isComplex(node.val)}\n`;
        case 'remove':
            return `Property '${path}' was removed\n`;
        case 'updated':
            return `Property '${path}' was updated. From ${isComplex(node.val1)} to ${isComplex(node.val2)}\n`;
        case 'recursion':
            return `${iter(node.children, [path]).join('')}`;
    }
   });
   return `${iter(obj, []).join('')}`;
};

