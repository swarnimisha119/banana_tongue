var btn=document.querySelector('.btn-translate');
var inptxt=document.querySelector('.txtinp');
var outtxt=document.querySelector('.txtout');
var url="https://api.funtranslations.com/translate/minion.json";
function transminion(text){
    return url+"?"+"text="+text;
}
function clickHandler(){
    var input=inptxt.value;
    fetch(transminion(input))
    .then(res => res.json())
    .then(jmin => {
        var translatedText=jmin.contents.translated;
        outtxt.innerText=translatedText;
    })
};
btn.addEventListener("click",clickHandler)