"use strict";
// Daily Challenge: Type Guard with Union Types
// What You Will Learn:
const processInput = (a) => {
    if (typeof a === 'number') {
        return a * a;
    }
    else if (typeof a === 'string') {
        return a.toUpperCase();
    }
    return !a;
};
