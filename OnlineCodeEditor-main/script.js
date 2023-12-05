function run(){
    let htmlcode=document.getElementById("html_code");
    let csscode=document.getElementById("css_code");
    let jscode=document.getElementById("js_code");

    let output=document.getElementById("output");

    output.contentDocument.body.innerHTML=htmlcode.value+"<style>"+csscode.value+"</style>";

    output.contentWindow.eval(jscode.value);
    
}