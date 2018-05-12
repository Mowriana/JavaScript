function scoreToHTML(strArr) {
    let arr=JSON.parse(strArr);
    let str= '<table>\n'
    let keys= Object.keys(arr[0]);
    str +=`   <tr><th>${keys[0]}</th><th>${keys[1]}</th></tr>\n`
    for (let obj of arr) {
        str += `   <tr><td>${escapeChars(obj[keys[0]]+ '')}</td><td>${escapeChars(obj[keys[1]])+ ''}</td></tr>\n`
    }
    str += '</table>'
    console.log(str)
    
    function escapeChars(text) {
        let replaced = new String(text);
        replaced = replaced.split('&').join('&amp;');
        replaced = replaced.split('<').join('&lt;');
        replaced = replaced.split('>').join('&gt;');
        replaced = replaced.split('"').join('&quot;');
        replaced = replaced.split('\'').join('&#39;');
        return replaced;
        
    }
}
scoreToHTML('[{"name":"Pesho","score":479},' +
    '{"name":"Gosho","score":205}]')