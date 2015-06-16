;
(function ($) {
    "use strict";
    jQuery.fn.select = function (data) {
        var $self = this;

        cityInfo($self);
        var Oli = $self.find("li");
        $self.bind("click", function (e) {
            $(".selectMenu").removeClass("dis");
            $(this).find("ul").addClass("dis");
            e.preventDefault();
            e.stopPropagation();
        });
        Oli.click(function (e) {
            var item = $(this).parent().parent().find(".selectOption");
            item.text($(this).text());
            item.attr("value", $(this).attr("value"));
            $(this).parent().removeClass("dis");
            var val = $(item).attr("value");
            $self.trigger('fragment', {path: val});
            e.preventDefault();
            e.stopPropagation();
        });
        $("body").bind("click", function () {
            $self.find("ul").removeClass("dis");
        });



        function cityInfo(opt) {
            var selectOption = $("<span class='selectOption' value='A'>" + data.A + "</span>")
            opt.append(selectOption);
            var Oul = $("<ul/>", {"class": "selectMenu"});
            var oli = $("<li value='A'>" + data.A + "</li><li value='B'>" + data.B + "</li>");
            Oul.append(oli);
            opt.append(Oul);
            opt.append($("<span class='shows'></span>"))
        }
    };

    jQuery.fn.getValue=function(){
        return this.find('.selectOption').attr('value');
    }
})(jQuery);






