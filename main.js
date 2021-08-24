var images = ["family.jpeg","mother.jpeg","father.jpeg","siter.jpeg","brother.jpeg"];
var text = ["Family","Mother","Father","Sister","Brother"];
var i = 0;
function change(){
    i++;
    var total = images.length-1;
    if(i>total){
        i = 0;
    }
    document.getElementById("pic").src=images[i];
    document.getElementById("text").innerHTML = text[i];
}