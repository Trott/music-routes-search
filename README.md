# music-routes-search
Search the Music Routes data set

## Usage

An _individual_ is someone credited with performing on a track.

Search for an individual:

```javascript
const { search } = require('music-routes-search');
const results = search('Chrissie Hynde', 'individual');
results.then((val) => { console.log(val); }, (err) => { console.error(err); });
```

An _artist_ is someone to whom a track is credited. It may be an individual or a collective (band).

Search for an artist:

```javascript
const { search } = require('music-routes-search');
const results = search('The Pretenders', 'artist');
results.then((val) => { console.log(val); }, (err) => { console.error(err); });
```

A _track_ is a recording, typically of a single song.

Search for a track:

```javascript
const { search } = require('music-routes-search');
const results = search('Back On The Chain Gang', 'track');
results.then((val) => { console.log(val); }, (err) => { console.error(err); });
```

A _release_ explains where a track can be found. For example, it might be the
name of the album where a track originally appeared.

Search for a release:

```javascript
const { search } = require('music-routes-search');
const results = search('Learning To Crawl', 'album');
results.then((val) => { console.log(val); }, (err) => { console.error(err); });
```
