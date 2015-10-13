/**
 * Created by gandx_000 on 2015/4/27.
 */

$(function () {
    tabSwitch();
    var bank = {A: "交通银行", B: "招商银行"};
    var city = {A: "北京市", B: "天津市"};
    var cityIn = {A: "石景山区", B: "石山区"};
    $("#id_bank").select(bank);
    $("#city").select(city);
    $("#city").on('fragment', function (e, data) {
        // console.log(data);
        if (data.path == "B") {
            cityIn = {A: "天山区", B: "二山区"};
            $("#cityIn").children().remove();
            $("#cityIn").select(cityIn);

        } else {
            cityIn = {A: "石景山区", B: "石山区"};
            $("#cityIn").children().remove();
            $("#cityIn").select(cityIn);
        }
    });
    $("#cityIn").select(cityIn);
    $(".bot").click(function () {
       // console.log($("#city").getValue());
        var arr=[];
        var a=$('.selectOption');
        for(var i=0;i< a.length;i++){
            arr.push(a[i].getAttribute('value'))
        }
        if (arr.length >= 3) {
            console.log(arr);
        } else {
            alert("填写数据不正确")
        }
    });
});


function tabSwitch() {
    var tab = $(".tab_ul li");
    $(tab).click(function () {
        var index = $(this).index();
        $(this).addClass("tab_option").siblings().removeClass("tab_option");
        var pre = $(this).parent().siblings('div').eq(index);
        $(pre).addClass("tab_cont");
        $(pre).siblings().removeClass("tab_cont")
    });
    $("#more_bank").click(function () {

        if ($(".more").is(":hidden")) {
            $(".more").show(300);
        } else {
            $(".more").hide(300);
        }
    })
}




