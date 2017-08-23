(function($) {
    var isshow = false;
    var id = Date.now();
    if ($("#STYLE_" + id).size() < 1) {
        document.writeln("<style id='STYLE_" + id + "'>@CHARSET \"UTF-8\";*{-webkit-tap-highlight-color:rgba(255,0,0,0)}.box-size{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.ds-hide{display:none}.ds-reward-stl{font-family:\"microsoft yahei\";text-align:center;background:#f1f1f1;padding:10px 0;color:#666;margin:20px auto;width:90%}#dsRewardBtn {line-height: initial!important; height:170px;width:34px;bottom: 50px; position: fixed; right: 60px;margin: 0;background: #7ab951;font-size: 16px;font-weight: 600;display: block;border: 4px solid #7ab951;border-radius: 10px;color: #FFF;}#dsRewardBtn span{display:inline-block;width:50px;height:50px;border-radius:100%;line-height:58px;color:#fff;font:400 25px/50px 'microsoft yahei';background:#FEC22C}#dsRewardBtn:hover{cursor:pointer}.ds-dialog .ds-close-dialog{position:absolute;top:15px;right:20px;font:400 24px/24px Arial;width:20px;height:20px;text-align:center;padding:0;cursor:pointer;background:transparent;border:0;-webkit-appearance:none;font-weight:700;line-height:20px;opacity:.6;filter:alpha(opacity=20)}.ds-dialog .ds-close-dialog:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.6;filter:alpha(opacity=40)}.ds-dialog-bg{position:absolute;opacity:.6;filter:alpha(opacity=30);background:#000;z-index:9999;left:0;top:0;width:100%;height:100%}.ds-dialog-content{font-family:'microsoft yahei';font-size:14px;background-color:#f0efef;position:fixed;padding:0 20px;z-index:10000;overflow:hidden;border-radius:6px;-webkit-box-shadow:0 3px 7px rgba(0,0,0,.3);-moz-box-shadow:0 3px 7px rgba(0,0,0,.3);box-shadow:0 3px 7px rgba(0,0,0,.3);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ds-dialog-pc{position:fixed;width:320px;height:350px;bottom:50px;right:95px;}.ds-dialog-wx{width:90%;height:280px;top:50%;margin-top:-140px;margin-left:5%}.ds-dialog-content h5{text-align:left;font-size:15px;font-weight:700;margin:15px 0;color:#555}.ds-payment-way{text-align:left}.ds-payment-way label{cursor:pointer;font-weight:400;display:inline-block;font-size:14px;margin:0 15px 0 0;padding:0}.ds-payment-way input[type=radio]{vertical-align:middle;margin:-2px 5px 0 0}.ds-payment-img{margin:15px 0;text-align:center}p.ds-pay-info{font-size:15px;margin:0 0 10px}.ds-pay-money{font-size:14px;margin-top:10px}.ds-pay-money p{margin:0}.ds-pay-money .ds-pay-money-sum{margin-bottom:4px}.ds-payment-img img{margin:0 auto;width:100%;}.ds-payment-img #qrCode_1{display:none}.ds-payment-img .qrcode-border{margin:0 auto}.ds-payment-img .qrcode-tip{width:48.13px;position:relative;margin:0 auto;font-size:12px;font-weight:700;background:#fff;height:15px;line-height:15px;margin-top:-12px}#qrCode_0 .qrcode-tip{color:#3caf36}#qrCode_3 .qrcode-tip{color:#e10602}.ds-payment-img #qrCode_3{display:none}.ds-payment-img #qrCode_2{display:none}#qrCode_2 .qrcode-tip{color:#eb5f01}#qrCode_1 .qrcode-tip{color:#6699cc}.wx_qrcode_container{text-align:center}.wx_qrcode_container h2{font-size:17px}.wx_qrcode_container p{font-size:14px}.ds-reward-stl{text-align:left;background:#fff;padding:0;color:#666;margin:0;width:0}#dsRewardBtn span{position:absolute;left:115px;top:-7px;background:#7ab951;width:50px;height:50px;font-size:16px;font-weight:600;line-height:43px;border:4px solid #fff;border-radius:40px}.share-s a{margin-top:-25px} .ds-payment-img .qrcode-border{border-radius: 29.97px; width: 236.89px; height: 236.89px; padding: 6px;margin-top: 20px; } </style>");
    }

    function write() {
        var content = "<div onmouseleave=\"PaymentUtils.show();\" class=\"ds-dialog\" id='PAY_" + id + "'>" +
            "   <div class=\"ds-dialog-content ds-dialog-pc \">" +
            "    <i class=\"ds-close-dialog\">&times;</i>" +
            "    <h5>一毛也是爱   (づ￣ 3￣)づ</h5>" +
            "    <div class=\"ds-payment-way\">" +
            "     <label for=\"wechat\"><input type=\"radio\" id=\"wechat\" class=\"reward-radio\" value=\"0\" checked=\"checked\" name=\"reward-way\" />微信红包</label>" +
            "     <label for=\"alipay\"><input type=\"radio\" id=\"alipay\" class=\"reward-radio\" value=\"2\" name=\"reward-way\" />支付宝</label>" +
            "    </div>" +
            "    <div class=\"ds-payment-img\">" +
            "     <div class=\"qrcode-img qrCode_0\" id=\"qrCode_0\">" +
            "      <div class=\"qrcode-border box-size\" style=\"border: 9.02px solid rgb(60, 175, 54\">" +
            "       <img  class=\"qrcode-img qrCode_0\" id=\"qrCode_0\" src=\"http://images2017.cnblogs.com/blog/801580/201708/801580-20170823105240574-1128632030.jpg\" />" +
            "      </div>" +
            "      <p class=\"qrcode-tip\">打赏</p>" +
            "     </div>" +
            "     <div class=\"qrcode-img qrCode_1\" id=\"qrCode_1\">" +
            "      <div class=\"qrcode-border box-size\" style=\"border: 9.02px solid rgb(102, 153, 204\">" +
            "       <img  class=\"qrcode-img qrCode_1\" id=\"qrCode_1\" src=\"http://images2017.cnblogs.com/blog/801580/201708/801580-20170823105319777-1871183224.jpg\" />" +
            "      </div>" +
            "      <p class=\"qrcode-tip\">打赏</p>" +
            "     </div>" +
            "     <div class=\"qrcode-img qrCode_2\" id=\"qrCode_2\">" +
            "      <div class=\"qrcode-border box-size\" style=\"border: 9.02px solid rgb(235, 95, 1\">" +
            "       <img  class=\"qrcode-img qrCode_2\" id=\"qrCode_2\" src=\"http://images2017.cnblogs.com/blog/801580/201708/801580-20170823105319777-1871183224.jpg\" />" +
            "      </div>" +
            "      <p class=\"qrcode-tip\">打赏</p>" +
            "     </div>" +
            "     <div class=\"qrcode-img qrCode_3\" id=\"qrCode_3\">" +
            "      <div class=\"qrcode-border box-size\" style=\"border: 9.02px solid rgb(225, 6, 2\">" +
            "         <img  class=\"qrcode-img qrCode_3\" id=\"qrCode_3\" src=\"//res.zgboke.com/wp-content/themes/begin/img/bdqb.png \" />" +
            "      </div>" +
            "      <p class=\"qrcode-tip\">打赏</p>" +
            "     </div>" +
            "    </div>" +
            "   </div>" +
            "  </div> ";
        var gonggao = '<a class = \"git\" href=\"https://chaoranwill.github.io/\" target=\"_blank\" style={ }>GithubBlog</a><br>';
        $("body").append(content);
        $("#profile_block").prepend(gonggao);
    }

    $(function() {
        var isshow = false;
        write();
        var $pay = $("#PAY_" + id).hide();
        $pay.find(".ds-payment-way").bind("click", function() {
            $pay.find(".qrcode-img").hide();
            $pay.find(".qrCode_" + $pay.find("input[name=reward-way]:checked").val()).show();
        });
        $pay.find(".ds-close-dialog").bind("click", function() {
            $pay.hide();
        });
    });
    var PaymentUtils = window['PaymentUtils'] = {};
    PaymentUtils.show = function() {
        if (isshow) { $("#PAY_" + id).hide(); } else { $("#PAY_" + id).show(); }
        isshow = !isshow;
    }
    PaymentUtils.hide = function() {
        $("#PAY_" + id).hide();
    }


})(jQuery);