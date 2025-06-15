// Variables c, ci, and cd represent the counter, increment clicks, and decrement clicks, respectively.
// count, incCount, and decCount store references to the DOM elements that display the counter and click counts.
// The inc() function increments the counter (c) and tracks increment clicks (ci), resetting the click count after 10 clicks.
// The dec() function decrements the counter (c), ensuring it doesn’t go below zero, and tracks decrement clicks (cd), resetting the click count after 10 clicks.
// The update() function updates the displayed values in the DOM.
let c=0,cinc=0,cdec=0
const count=document.getElementById("count");
const incount=document.getElementById("incount");
const decount=document.getElementById("decount");

function inc(){
    c++;
    cinc = (cinc>=10) ? 0 : cinc + 1;
    update();
}
function dec(){
    c=c>0 ? c-1 : 0;
    cdec=(cdec>=10) ? 0 : cdec +1;
    update();
}
function update(){
    count.textContent=c;
    incount.textContent=cinc;
    decount.textContent=cdec;
}