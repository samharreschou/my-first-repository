//processing newReleases
//id, title, boxart, uri, rating, bookmark
//array of objects

//return array of objects with only the id and the title properties from the objects
//in the newReleases array
//keep only objects that have an id and title property


//steps: filter newReleases for whether id and title are present in a given object
//map onto newReleases to only get the properties you want

//1: use filter
//2: use map

let newReleases = [
  {
    'id': 0,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

function processReleaseData(data) {
  // ...
  let filteredReleases = newReleases.filter(release => release.title !== undefined && release.id !== undefined).map(release =>
    Object.assign({},{'id': release.id, 'title': release.title}));
  return filteredReleases;
}

console.log(processReleaseData(newReleases));

// should return:
//[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
