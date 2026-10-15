# music-routes-search
Search individuals in the Music Routes data set.

## Usage

An _individual_ is someone credited with performing on a track.
Search results reference individual IDs.

```javascript
const { search } = require('music-routes-search');
const results = search('Chrissie Hynde', 'individual');
console.log(results);
```

Only the `individual` index is supported.
