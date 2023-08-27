let content=[
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus quam ac erat euismod convallis. Nullam tempus, libero a consequat sagittis, lectus odio finibus arcu, eu aliquam elit turpis nec orci. Suspendisse potenti. In vestibulum lorem eu libero laoreet, eu fringilla enim eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus non urna ut turpis facilisis bibendum. Cras hendrerit, ligula ac eleifend eleifend, odio libero venenatis tortor, vel scelerisque quam quam at tellus.",
    "Sed consequat diam ac turpis accumsan, et tincidunt metus volutpat. Nullam quis ante eget dui interdum elementum non non est. Nullam pharetra nulla non ullamcorper. Fusce nec faucibus urna. Praesent nec efficitur tortor. Vivamus vel erat vel mi dictum venenatis id eu justo. Aenean ut risus nec libero fringilla tincidunt a eget nunc. Morbi bibendum dapibus justo, sit amet tempor turpis aliquam in.",
    "Suspendisse vel facilisis nisi. Nulla facilisi. Suspendisse potenti. Etiam euismod tellus non eros eleifend, id tristique justo dignissim. Sed dictum justo eget justo posuere, non facilisis ligula lacinia. Fusce ut enim non lectus vestibulum auctor. Aenean laoreet, purus in fermentum pharetra, arcu nisi varius turpis, eu imperdiet ligula erat vel ligula. Pellentesque venenatis risus a libero fringilla, non scelerisque urna aliquam."
]
let text=document.getElementById('text');
let textindex=Math.floor(Math.random() * 3);
text.innerText=content[textindex];
let input=document.getElementById('input');
let wpm=document.getElementById('wpm');
let char=document.getElementById('char');
let btn=document.getElementById('btn');
setTimeout(function timesup(){
    alert('times up')
},60000)
function check(){
wpm.innerText=input.value.split(/\s+/).length;
char.innerText=input.value.length;
}