function replaceIcons(a){$("img").each(function(){var c=$(this);c.attr("src",c.attr("src").replace("16",a)),c.attr("src",c.attr("src").replace("24",a)),c.attr("src",c.attr("src").replace("32",a)),c.attr("src",c.attr("src").replace("48",a))})}$(".group-count").each(function(){var a=$(this);a.find("h2").append('<span class="appended">&nbsp;&nbsp;'+a.find("ul li").length+" Icons</span>")});var $btns=$(".btn").on("click",function(){$btns.removeClass("active").filter(this).addClass("active").data("filter")});$("#btn-small").on("click",function(){replaceIcons(16),$("ul").removeClass().addClass("group-16")}),$("#btn-medium").on("click",function(){replaceIcons(24),$("ul").removeClass().addClass("group-24")}),$("#btn-large").on("click",function(){replaceIcons(24),$("ul").removeClass().addClass("group-32")}),$("#btn-xlarge").on("click",function(){replaceIcons(48),$("ul").removeClass().addClass("group-48")});