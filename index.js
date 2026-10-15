"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const lunr = require("lunr");
const individualIndex = require("./indexes/individualIdx.json");
const indexes = {
    individual: lunr.Index.load(individualIndex)
};
const search = (val, index) => {
    return indexes[index].search(val);
};
exports.search = search;
