
// buger open
function change(x) {
  x.classList.toggle("open");
  };

//filter close

// function menubtn() {
// 	document.getElementsByClassName("portfolio_filter")[0].style.display = "none";
// };



$(document).ready(function(){
	//點擊portfolio的時候portfolio_filter展開或收起
	$("li.portfolio").click(function(){
        $("li.portfolio-list").slideToggle("slow");
    })
    //點擊搜尋的時候portfolio_filter收起
    $("li.search-row").click(function(){
        $("li.portfolio-list").slideUp("slow");
    })
	//點開作品項目的時候portfolio_filter收起
    $(".filtr-item").click(function(){
        $(".portfolio_filter").slideUp("fast");
    })
    //關閉作品項目的時候portfolio_filter展開
    $(".closebtn").click(function(){
        $(".portfolio_filter").slideDown("slow");
    })
//     //點擊主按鈕的時候portfolio_filter展開或收起
//     $(".menubtn").click(function(){
//         $(".portfolio_filter").slideToggle("slow");
//     });
    //點擊portfolio_filter細項後把細項收起
    $("li.portfolio-list").click(function(){
        $("li.portfolio-list").slideUp("slow");
    });
    // //點擊portfolio細項的時候搜尋消失
    $("li.portfolio-list").click(function(){
        $("li.search-row").slideUp("slow");
    });

    //點擊portfolio後搜尋出現
    $(".portfolio_filter li.portfolio").click(function(){
        $(".portfolio_filter li.search-row").slideDown("slow");
    });
//     //點擊portfolio後的細項列表展開
//     $(".portfolio_filter li.portfolio").click(function(){
//         $(".portfolio_filter li.portfolio-list").slideToggle("slow");
//     });
	//點擊more後搜尋出現
    $(".more").click(function(){
        $(".portfolio_filter").slideDown("slow");
    });
    $(".more").click(function(){
        $("li.portfolio-list").slideDown("slow");
    });
    
    ;
});




// $(document).ready(function(){
// 	//點開作品項目的時候portfolio_filter收起
//     $(".filtr-item").click(function(){
//         $(".portfolio_filter").slideUp("fast");
//     })
//     //關閉作品項目的時候portfolio_filter展開
//     $(".closebtn").click(function(){
//         $(".portfolio_filter").slideDown("slow");
//     })
//     //點擊主按鈕的時候portfolio_filter展開或收起
//     $(".menubtn").click(function(){
//         $(".portfolio_filter").slideToggle("slow");
//     });
//     //點擊portfolio_filter細項後把細項收起
//     $(".portfolio_filter li").click(function(){
//         $(".portfolio_filter li.portfolio-list").slideUp("slow");
//     });
//     //點擊about的時候搜尋消失
//     $(".portfolio_filter li.about").click(function(){
//         $(".portfolio_filter li.search-row").slideUp("slow");
//     });
//     //點擊portfolio細項的時候搜尋消失
//     $(".portfolio_filter li.portfolio-list").click(function(){
//         $(".portfolio_filter li.search-row").slideUp("slow");
//     });
//     //點擊portfolio後搜尋出現
//     $(".portfolio_filter li.portfolio").click(function(){
//         $(".portfolio_filter li.search-row").slideDown("slow");
//     });
//     //點擊portfolio後的細項列表展開
//     $(".portfolio_filter li.portfolio").click(function(){
//         $(".portfolio_filter li.portfolio-list").slideToggle("slow");
//     });
    
//     ;
// });


//navigation toggle

$(document).ready(function(){
    $("#trigger").click(function(){
        $("#show").slideToggle("slow");
    });
});



//control portfolio
$(function() {
    //Simple filter controls
    $('.portfolio_filter li').click(function() {
        $('.portfolio_filter li').removeClass('active');
        $(this).addClass('active');
    });
    // //Multifilter controls
    // $('.multifilter li').click(function() {
    //     $(this).toggleClass('active');
    // });
    // //Shuffle control
    // $('.shuffle-btn').click(function() {
    //     $('.sort-btn').removeClass('active');
    // });
    // //Sort controls
    // $('.sort-btn').click(function() {
    //     $('.sort-btn').removeClass('active');
    //     $(this).addClass('active');
    // });
});

//portfolio overlay


function openCv1() {
    document.getElementById("cv1").style.height = "100%";
};
function closeCv1() {
    document.getElementById("cv1").style.height = "0%";
};
function openCv2() {
    document.getElementById("cv2").style.height = "100%";
};
function closeCv2() {
    document.getElementById("cv2").style.height = "0%";
};
function openPortfolio1() {
    document.getElementById("yolomoto-biketire-3d").style.height = "100%";
};
function closePortfolio1() {
    document.getElementById("yolomoto-biketire-3d").style.height = "0%";
};
function openPortfolio2() {
    document.getElementById("yolomoto-biketire-movie").style.height = "100%";
};
function closePortfolio2() {
    document.getElementById("yolomoto-biketire-movie").style.height = "0%";
};
function openPortfolio3() {
    document.getElementById("yolomoto-biketire-icons").style.height = "100%";
};
function closePortfolio3() {
    document.getElementById("yolomoto-biketire-icons").style.height = "0%";
};
function openPortfolio4() {
    document.getElementById("pypat-dm").style.height = "100%";
};
function closePortfolio4() {
    document.getElementById("pypat-dm").style.height = "0%";
};
function openPortfolio5() {
    document.getElementById("pypat-web").style.height = "100%";
};
function closePortfolio5() {
    document.getElementById("pypat-web").style.height = "0%";
};
function openPortfolio6() {
    document.getElementById("ntust-patent").style.height = "100%";
};
function closePortfolio6() {
    document.getElementById("ntust-patent").style.height = "0%";
};
function openPortfolio7() {
    document.getElementById("yodex-l").style.height = "100%";
};
function closePortfolio7() {
    document.getElementById("yodex-l").style.height = "0%";
};
function openPortfolio8() {
    document.getElementById("yodex-h").style.height = "100%";
};
function closePortfolio8() {
    document.getElementById("yodex-h").style.height = "0%";
};
function openPortfolio9() {
    document.getElementById("waterfulart").style.height = "100%";
};
function closePortfolio9() {
    document.getElementById("waterfulart").style.height = "0%";
};
function openPortfolio10() {
    document.getElementById("patent-contest").style.height = "100%";
};
function closePortfolio10() {
    document.getElementById("patent-contest").style.height = "0%";
};
function openPortfolio11() {
    document.getElementById("aurora").style.height = "100%";
};
function closePortfolio11() {
    document.getElementById("aurora").style.height = "0%";
};
function openPortfolio12() {
    document.getElementById("travel").style.height = "100%";
};
function closePortfolio12() {
    document.getElementById("travel").style.height = "0%";
};






// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }
















