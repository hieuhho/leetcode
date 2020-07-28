/*
Given a map Map<String, List<String>> userSongs with user names as keys and a list of all the songs that the user has listened to as values.

Also given a map Map<String, List<String>> songGenres, with song genre as keys and a list of all the songs within that genre as values. The song can only belong to only one genre.

The task is to return a map Map<String, List<String>>, where the key is a user name and the value is a list of the user's favorite genre(s). Favorite genre is the most listened to genre. A user can have more than one favorite genre if he/she has listened to the same number of songs per each of the genres.

Example 1:

Input:
userSongs = {
   "David": ["song1", "song2", "song3", "song4", "song8"],
   "Emma":  ["song5", "song6", "song7"]
},
songGenres = {
   "Rock":    ["song1", "song3"],
   "Dubstep": ["song7"],
   "Techno":  ["song2", "song4"],
   "Pop":     ["song5", "song6"],
   "Jazz":    ["song8", "song9"]
}

Output: {
   "David": ["Rock", "Techno"],
   "Emma":  ["Pop"]
}

Explanation:
David has 2 Rock, 2 Techno and 1 Jazz song. So he has 2 favorite genres.
Emma has 2 Pop and 1 Dubstep song. Pop is Emma's favorite genre.

Example 2:

Input:
userSongs = {
   "David": ["song1", "song2"],
   "Emma":  ["song3", "song4"]
},
songGenres = {}

Output: {
   "David": [],
   "Emma":  []
}
*/

const favoriteGenre = (users, genres) => {
  const result = {};
  const songGenres = {};

  for (const genre in genres) {
    const songs = genres[genre];
    for (const song of songs) {
      songGenres[song] = genre;
    }
  }

  for (const user in users) {
    const songs = users[user];
    const count = {};
    let maxCount = 0;
    result[user] = [];

    for (const song of songs) {
      const genre = songGenres[song];
      if (genre === null || genre === undefined) break;
      if (count[genre] === null || count[genre] === undefined) count[genre] = 0;
      count[genre] += 1;
      maxCount = Math.max(maxCount, count[genre]);
    }

    for (const genre in count) {
      if (count[genre] === maxCount) result[user].push(genre);
    }
  }
  return result;
};

const userSongs = {
  David: ['song1', 'song2', 'song3', 'song4', 'song8'],
  Emma: ['song5', 'song6', 'song7'],
};

const songGenres = {
  Rock: ['song1', 'song3'],
  Dubstep: ['song7'],
  Techno: ['song2', 'song4'],
  Pop: ['song5', 'song6'],
  Jazz: ['song8', 'song9'],
};

console.log(favoriteGenre(userSongs, songGenres));
