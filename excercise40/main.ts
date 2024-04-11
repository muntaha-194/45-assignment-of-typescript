function make_Album(artist_name :string, album_title: string, tracks?: number){
    let album:{artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    }
    if(tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}
// calling 3 functions and creating 3 variables with different values

let album1 = make_Album( "Muntaha","Album no.1");
let album2 = make_Album("Afifa", "Album no.2");
// with 3rd parameter
let album3 = make_Album("Asra", "Album no.3", 10)

// printing values of our object created by function
console.log(album1);
console.log(album2);
console.log(album3);