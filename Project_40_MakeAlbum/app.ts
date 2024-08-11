function make_album(artist_name: string, album_tilte:string, tracks?: number){
    let album: any = {artist_name, album_tilte}

    if (tracks) {
        album["tracks"] = tracks;
      }
    return album
}

console.log(make_album("Arijit", "Album1"));
console.log(make_album("Atif", "Album2"));
console.log(make_album("Ali", "Album3", 12));
