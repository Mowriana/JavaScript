function fromJSONtoHTML(strArr) {
    let arr=JSON.parse(strArr);
    let str= '<table>\n';
    str += '   <tr>'
    let keys= Object.keys(arr[0]);
    for (let obj of keys) {
        str += `<th>${obj}</th>`
    }

    str += '</tr>\n';
    for (let obj of arr) {
        str += '   <tr>'
        for (let i = 0; i < keys.length; i++) {
            str += `<td>${htmlEscape(obj[keys[i]] + '')}</td>`
        }
        str += '</tr>\n'

    }

str += '</table>'
    console.log(str);


    function htmlEscape(text) {

        let replaced = new String(text);
        replaced = replaced.split('&').join('&amp;');
        replaced = replaced.split('<').join('&lt;');
        replaced = replaced.split('>').join('&gt;');
        replaced = replaced.split('"').join('&quot;');
        replaced = replaced.split('\'').join('&#39;');
        return replaced;
    }
    
}
fromJSONtoHTML('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')