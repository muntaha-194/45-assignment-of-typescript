function make_Album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling 3 functions and creating 3 variables with different values
var album1 = make_Album("Muntaha", "Album no.1");
var album2 = make_Album("Afifa", "Album no.2");
// with 3rd parameter
var album3 = make_Album("Asra", "Album no.3", 10);
// printing values of our object created by function
console.log(album1);
console.log(album2);
console.log(album3);
