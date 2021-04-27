//window.addEventListener("load", init);
//
//function $(nev){
//return document.guerySelectorAll(nev);
//}
//function init(){
    
//}
var kepObj1 = {
    kep: "agymenok.jpg", 
    cim: "Kép címe1", 
    leiras:"1 kép leírása hosszabban"
};
var kepObj2 = {
    kep: "avengers.jpg", 
    cim: "Kép címe2", 
    leiras:"2 kép leírása hosszabban"
};
var kepObj3 = {
    kep: "blackpanther.jpg", 
    cim: "Kép címe3", 
    leiras:"3 kép leírása hosszabban"
};
var kepObjTomb = [kepObj1,kepObj2,kepObj3];
var id = 0;
$(function(){
//    htmlModositasa();
//    //$("OK").addEventListener("click", fvenynev);
//    $("#OK").click(beviteliMezoKiir);
//    $("article div img").mouseenter(kiemelFel);
//    $("article div img").mouseleave(kiemelLe);
//    
//    $("#jobbra").click(jobbra);
//    $("#balra").click(balra);
//    
//


    var elem = 'id="1" class="kepTarolo"> <img src="" alt=""/>';
    for (var i = 0; i < kepObjTomb.length; i++) {
        $('article').append(elem);
        $("article div").eq(i).attr('id', i);
    }
    for (var i = 0; i < kepObjTomb.length; i++) {

        $(".keptarolo img").eq(i).attr('src', kepObjTomb[i].kep);
        $(".keptarolo h2").eq(i).html(kepObjTomb[i].cim);
        $(".keptarolo p").eq(i).html(kepObjTomb[i].leiras);
    }
    feltolt(0);
    $("#Galeria #balra").eq(0).click(balra);
    $("#Galeria #jobbra").eq(0).click(jobbra);
});

function jobbra(){
     id++;
    if (id === kepObjTomb.length) {
        id = 0;
    }
    feltolt(id);
}
function balra(){
    id--;
    if (id < 0) {
        id = kepObjTomb.length - 1;
    }
    feltolt(id);
}

function kepBetolt(){
    var azon = this.id;
    feltolt(azon);
}

function feltolt(index){
     $(".nagyKep img").attr('src', kepObjTomb[index].kep);
    $(".nagyKep h2").html(kepObjTomb[index].cim);
    $(".nagyKep p").html(kepObjTomb[index].leiras);
}

function kiemelFel(){
    //this.classList.add("kiemel");
    $(this).addClass("kiemel");
}
function kiemelLe(){
    //this.classList.remove("kiemel");
    $(this).removeClass("kiemel");
}


function beviteliMezoKiir(){    
    var bevMezo = $("#nev").val();
    console.log(bevMezo);
}

//function htmlModositasa(){
//    console.log("Működik");
//    
//    $("article div:nth-child(1)").html("<b>hahó</b>");
//    //$("article div:nth-child(1)").innerHTML= "hahó";
//    var szoveg = $("article div:nth-child(1)").text();
//    console.log(szoveg);
//    $("article div").eq(1).html("Összes div");
//    $("article div").eq(1).append("<ul><li>1</li><li>2</li></ul>");
//    
////    $("article div").eq(1).empty(); --> elem tartalmát távolítja el
//
//
//
//    $("article div").eq(1).remove(); //--> el is tűnik
//    $("article div").eq(1).html('<input type="button" id="balra" value="<<">');
//    $("article div").eq(1).append('<input type="button" id="jobbra" value=">>">');
//    $("article div").eq(1).append('<img src="avengers.jpg" id="0" alt=""/>');
//    $("article div").eq(1).append('<img src="agymenok.jpg" id="1" alt=""/>');
//    $("article div").eq(1).append('<img src="blackpanther.jpg" id="2" alt=""/>');
//
//    
//    $("article div img").attr("alt", "Avengers");
//    //$("article div")[0].alt="Halastó"
//    $("article div img").css("border", "1px solid red");
//    //$("article div")[0].style.border = "1px solid red";
// 
//    
//}



