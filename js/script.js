$(document).ready(function(){

    //section1 article .today .today_cont
    var $contArr1 = [
        ["cont_01.png", "죄 많은 소녀 (after my death, 2019)"],
        ["cont_02.jpeg", "소공녀 (microhabitat, 2020)"],
        ["cont_03.jpg", "벌새 (house of hummingbird, 2018)"],
    ];

    var $cont1 = `
        <div class="content">
            <img src="" alt="">
            <p class="text">죄 많은 소녀 (after my death, 2019)</p>
        </div>
    `;

    for(i=0; i<$contArr1.length; i++){
        $(".today_cont").append($cont1);
    }

    $(".today_cont .content").each(function(a){
        $(this).find("img").attr("src", "./img/"+$contArr1[a][0]);
        $(this).find("p").text($contArr1[a][1]);

    });

    //section2 article .actors .actorList
    var $contArr2 = [
        ["yeobeen.png", "전여빈"],
        ["saebyeok.png", "김새벽"],
        ["sanghee.png", "이상희"],
        ["yeeun.png", "김예은"],
        ["hakju.png", "이학주"],
        ["jungmin.png", "박정민"],
    ];

    var $cont2 = `
        <div class="actorCont">
            <div class="box">
                <span class="name">전여빈</span>
                <a href="#">필모그래프</a>
            </div>
        </div>
    `;

    for(i=0; i<$contArr2.length; i++){
        $(".actorList").append($cont2);
        
    }

    $(".actorList .actorCont").each(function(a){
        $(this).css("background-image", "url(./img/"+$contArr2[a][0]+")");
        $(this).find("span").text($contArr2[a][1]);
    });

});