"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist_name, album_tilte, tracks) {
    let album = { artist_name, album_tilte };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Arijit", "Album1"));
console.log(make_album("Atif", "Album2"));
console.log(make_album("Ali", "Album3", 12));
