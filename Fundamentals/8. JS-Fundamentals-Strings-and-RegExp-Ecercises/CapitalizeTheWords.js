function toTitleCase(str)
{
    let newStr= str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    console.log(newStr);
}
toTitleCase('Was that Easy? tRY thIs onE for SiZe!');