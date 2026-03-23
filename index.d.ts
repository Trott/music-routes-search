import lunr = require('lunr');
type MusicRoutesIndexes = 'artist' | 'individual' | 'release' | 'track';
declare const search: (val: string, index: MusicRoutesIndexes) => lunr.Index.Result[];
export { search };
//# sourceMappingURL=index.d.ts.map