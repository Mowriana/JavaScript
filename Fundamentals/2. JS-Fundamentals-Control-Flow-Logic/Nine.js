function colorfulNubers(num) {
    console.log("<ul>");
    for (let i = 1; i <= num; i++) {
    if(i%2 !==0){
        console.log("<li><span style='color:green'>" + i + ("</span></li>"));
    }
    else{
        console.log("<li><span style='color:blue'>" + i + ("</span></li>"));
    }
    }
    console.log("<ul>");
    
}
colorfulNubers(10);

/* or the second option is :
function nums(n) {
  let html = '<ul>\n';
  for (let i = 1; i <= n; i++) {
    let color = 'blue';
    if (i % 2 != 0) color = 'green';
    html += `  <li><span style='color: ${color}'>${i}</span></li>\n`;
  }
  html += '</ul>';
  return html;
}
 */