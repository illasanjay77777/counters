var counter_disply =document.getElementById('count');
var inc=document.getElementById('inc');
var dec=document.getElementById('dec');
var res=document.getElementById('res');
 count=0;
function Increment(){
  count++;
  counter_disply.innerHTML=count;
}
function Decrement(){
  count--;
  counter_disply.innerHTML=count;

}
function Reset(){
  count=0;
  counter_disply.innerHTML=count;
}
