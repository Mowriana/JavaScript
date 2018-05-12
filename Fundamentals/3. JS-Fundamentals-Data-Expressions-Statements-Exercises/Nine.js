function Music(playing) {
    let song = playing[0];
    let artist = playing[1];
    let duration = playing[2];
    let result = "Now Playing: " + artist +" - "+song + " [" + duration + "]";
    console.log(result);
}
Music(['Number One', 'Nelly', '4:09']);