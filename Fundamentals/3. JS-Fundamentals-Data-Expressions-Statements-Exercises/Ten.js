function Tag(playing) {
    let file= playing[0];
    let text = playing[1];
    let result = "\<img src=\"" + file +"\""+ " alt=\"" + text + "\">";
    console.log(result);
}
Tag(['smiley.gif', 'Smiley Face']);