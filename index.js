"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const lunr = require("lunr");
const artistIndex = require("./indexes/artistIdx.json");
const individualIndex = require("./indexes/individualIdx.json");
const releaseIndex = require("./indexes/releaseIdx.json");
const trackIndex = require("./indexes/trackIdx.json");
const indexes = {
    artist: lunr.Index.load(artistIndex),
    individual: lunr.Index.load(individualIndex),
    release: lunr.Index.load(releaseIndex),
    track: lunr.Index.load(trackIndex)
};
const search = (val, index) => {
    return indexes[index].search(val);
};
exports.search = search;
