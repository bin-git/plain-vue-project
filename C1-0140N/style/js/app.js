function application(){
	var _self = this;
	this.config = {
		'searchval': '请输入关键词搜索',
		'api': '4DD845D1BB619BEEFB641EC49A7D8735',
		'phone': /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/,
		'email': /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
	}

    // 菜单
    $('#menu .drop').each(function(index, element){
        if($(this).children('li').length == 0){
			$(this).remove();
        }
    })
    $('#menu dd > a').bind('click', function(e){
        if($(this).siblings('.drop').children('li').length == 0){
			//  超链接跳转
        }else{
            if($(this).siblings('.drop').is(':hidden')){
				$(this).siblings('.drop').slideDown(300).end().parent('dd').siblings('dd').children('.drop').slideUp(300);
            }else{
            	$(this).siblings('.drop').slideUp(300);
            }
          	e.preventDefault();
        }
    })
    //首页标题
    $(".ipro_title").each(function(){
    	var  iproTitle = $(this).find("h1 font").text() , proTitleOne = iproTitle.substr(0 , 2) , proTitleTwo = iproTitle.substr(2 , 8);
  	 $(this).find("h1 font").text(proTitleTwo);
     $(this).find("h1 span").text(proTitleOne);
    })
	// 格式化电话号码
    $('[ig-phone]').each(function(index, element){
        var tel400 = $(this).text(), telLength = tel400.length;
        if(telLength == 11){  // 手机号码 OR 座机号码
            var firstNum = tel400.substr(0,1);
            if(firstNum == 0){
                var tel1 = tel400.substr(0, 4);
                var tel2 = tel400.substr(4, 7);
                tel400 = tel1+ "-" + tel2;
            }else{
                var tel1 = tel400.substr(0, 3);
                var tel2 = tel400.substr(3, 4);
                var tel3 = tel400.substr(7, 4);
                tel400 = tel1+ "-" + tel2 + "-" + tel3;
            }
        }else if(telLength == 12){
            var tel1 = tel400.substr(0, 4);
            var tel2 = tel400.substr(4, 8);
            tel400 = tel1+ "-" + tel2;
        }else if(telLength == 10){
            var tel1 = tel400.substr(0, 3);
            var tel2 = tel400.substr(3, 4);
            var tel3 = tel400.substr(7, 3);
            tel400 = tel1+ "-" + tel2 + "-" + tel3;
        }
        $(this).html(tel400);
    })
    // 设为首页
	$("#setHome").click(function(){
        app.SetHome(this, location.href);
	});
    // 加入收藏
	$('#addFavo').bind('click', function(){
		app.addFavorite($('title').html(), location.href, '');
	});
	//首页产品
    $("#iproBox li").hover(function(){
      $(this).find(".iproDrop").stop().show(300);
      $(this).find(".iproDrop").stop().animate({top:0,left:0,width:"100%",height:"247px",opacity:1},300)
    },function(){
      $(this).find(".iproDrop").stop().hide(300);
      $(this).find(".iproDrop").stop().animate({top:"50%",left:"50%",width:0,height:0,opacity:0},300)
    })
	// 返回顶部
	$('[goTop]').bind('click', function(){
		$('body, html').animate({'scrollTop': 0}, 200);
	})
    //悬浮
       $("#toolbar .pointer").bind('click', function(){
			var _this = $(this);
			if(_this.hasClass('active')){
				_this.parent().stop().animate({'right': 10}, function(){
					_this.removeClass('active');
				});
			}else{
				_this.parent().stop().animate({'right': -109}, function(){
					_this.addClass('active');
				});
			}
		})
	// API验证
	if(typeof(_self.config.api) == 'undefined' || _self.config.api.substr(13,4) != 'BEEF'){
		return false;
	}
	
	this.scroller();
	this.searcher();
	this.toolbar();
	this.plugs();
	this.bdmap();
	this.former();
  this.iproScroll();
}
application.prototype = {
	plugs: function(){
		// 百度分享
		window._bd_share_config = {
            "common": {
                "bdSnsKey": {},
                "bdText": "",
                "bdMini": "2",
                "bdMiniList": false,
                "bdPic": "",
                "bdStyle": "0",
                "bdSize": "24"
            },
            "share": {}
        };
        with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
		
		// 
	},
   SetHome:function(obj,url){
	try{
		obj.style.behavior='url(#default#homepage)';
		obj.setHomePage(url);
   }catch(e){
	   if(window.netscape){
		  try{
			  netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		 }catch(e){
			  alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
		  }
	   }else{
		alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
	   }
  }
},
  iproScroll:function(){
    var oLi = $("#iproList li"), oLiLength = oLi.length, oipro = $("#iproBox") , oScroll = $("#iproScroll"), oUl = oScroll.find("ul"), oUlLength = oUl.length,
        oUlWid = oUl.eq(0).width(), n = null , speed1 = 300, speed4 = 3000, t ;
    if(oLiLength < 2){return false;}
    oScroll.width(oUlLength*oUlWid);//设置宽度
    oLi.eq(0).addClass("proHover");
        oLi.hover(function(){
           clearInterval(t);
            n = $(this).index();
            oScroll.stop().animate({left:-oUlWid*n},speed1);
           oLi.eq(n).addClass("proHover").siblings().removeClass("proHover");
        },function(){
           t = setInterval(auto,speed4);
        });
    	oipro.hover(function(){  clearInterval(t); },function(){ t = setInterval(auto,speed4); });//清除定时器
       function auto(){
         if(n >= oLiLength - 1){ n = 0; }else{	n ++; }
         oScroll.stop().animate({left:-oUlWid*n},speed1);
      	 oLi.eq(n).addClass("proHover").siblings().removeClass("proHover");
      }
      t = setInterval(auto,speed4);
  },
    bdmap: function(){
        var func = function(){
        	if($(".BMap_bubble_title a").length < 1){
                setTimeout(func, 100);
              }else{
                $(".BMap_bubble_title a").attr({"target":"_blank"});
              }
            }
        func();  // 执行函数
    },
	former: function(){
		$postform = $('#formPost');
		$postform.find('.txt, .text, .code').bind({
			'focus': function(){
				$(this).parent().addClass('onfocus');
				if ($(this).val() == $(this).attr('placeholder')) {
					$(this).val('');
				}
			},
			'blur': function(){
				$(this).parent().removeClass('onfocus');
				$('#jLog').hide();
				if ($(this).val() == '') {
					$(this).val($(this).attr('placeholder'));
				}
			},
			'keyup': function(){
				$('#jLog').hide();
			}
		});
		$postform.find('[type="submit"]').bind('click', function () {
			var $name = $postform.find('[name="Name"]'),
				$phone = $postform.find('[name="Phone"]'),
				$email = $postform.find('[name="Email"]'),
				$code = $postform.find('[name="txtImageCode"]');
			
			// 姓名
			if ($name.val() == '' || $name.val() == $name.attr('placeholder')) {
				app.jLog($name.attr('empty'), $name.offset().left, $name.offset().top);
				$name.focus();
				return false;
			}
			// 联系方式
			if ($phone.val() == '' || $phone.val() == $phone.attr('placeholder')) {
				app.jLog($phone.attr('empty'), $phone.offset().left, $phone.offset().top);
				$phone.focus();
				return false;
			}
			if (!$phone.val().match(app.config.phone)) {
				app.jLog($phone.attr('error'), $phone.offset().left, $phone.offset().top);
				$phone.focus();
				return false;
			}
			// 电子邮箱
			if ($email.val() != $email.attr('placeholder') && !$email.val().match(app.config.email)) {
				app.jLog($email.attr('error'), $email.offset().left, $email.offset().top);
				$email.focus();
				return false;
			}
			// 验证码
			if ($code.length && ($code.val() == '' || $code.val() == $code.attr('placeholder'))) {
				app.jLog($code.attr('empty'), $code.offset().left, $code.offset().top);
				$code.focus();
				return false;
			}
		})
	},
	toolbar: function(){
		$("#toolbar .pointer").bind('click', function(){
			var _this = $(this);
			if(_this.hasClass('active')){
				_this.parent().stop().animate({'right': 10}, function(){
					_this.removeClass('active');
				});
			}else{
				_this.parent().stop().animate({'right': -109}, function(){
					_this.addClass('active');
				});
			}
		})
	},
	searcher: function(){
		var _self = this,
			isFocus = false;
			
		$('#SearchTxt').bind({
			'focus': function(){
				isFocus = true;
				$(this).val('');
			},
			'blur': function(){
				isFocus = false;
                if($(this).val() == ''){
					$(this).val(app.config.searchval);
                }
			}
		})
		$('#SearchSubmit').bind('click', function(){
			if($('#SearchTxt').val() == '' || $('#SearchTxt').val() == $('#SearchTxt').attr('placeholder')){
				app.jAlert(app.config.searchval);
				return false;
			}
			search();
		});
		$(document).keydown(function(event){
			event = event ? event : ( window.event ? window.event : null );
			if(event.keyCode == 13 && isFocus == true){
				$('#SearchSubmit').trigger('click');
			}
		});
        
        // 添加热门关键词
        $('#SearchLink a').each(function(){
          	$(this).attr({'href': $('#Searchtype').val() + '&where=Title:' + $(this).text()});
        })
	},
    addFavorite: function(title, url){
        try{
            window.external.addFavorite(url, title);
        }
        catch(e){
            try{
                window.sidebar.addPanel(title, url, '');
            }
            catch(e){
                alert('抱歉，您所使用的浏览器无法完成此操作');
           }
        }
    },
	scroller: function(){
		 if($('#banner').length > 0 && $('#banner .list li').length > 1){
			!function banner(){
				var $banner = $('#banner'),
					$list = $banner.children('.list'),
					$tip = $banner.find('.tip'),
					t,
					interval = 10000,
					speed = 1000,
					speed2 = 700,
					n = 0,
					N = $list.children('li').length;
				if($tip.length){
					var html = '';
					for(var i=0; i<N; i++){
						if(i==0){ html += '<span class="cur"></span>'; }else{ html += '<span></span>';  }
					}
					$tip.html(html);
				}
				function func(){
					if(n >= N-1){ n = 0; }else{	n ++; }
					$list.children('li').eq(n).css({'z-index':2}).stop().fadeIn(speed).siblings('li').css({'z-index':1}).stop().fadeOut(speed2);
					if($tip.length){
						$tip.children('*').eq(n).addClass('cur').siblings().removeClass('cur');
					}
				}
				$tip.children('*').click(function(){
					clearInterval(t);
					n = $(this).index()-1;
					func();
					t = setInterval(func, interval);
				})
				t = setInterval(func, interval);
			}()
		}
      //新闻
		if($('#inewsLeft').length > 0 && $('#inewsLeft .inews_scroll .inews_scroll_box').length > 1){
			!function banner(){
				var $banner = $('#inewsLeft'),
					$list = $banner.find('.inews_scroll'),
					$tip = $banner.find('.inews_tip'),
					t,
					interval = 3000,
					speed = 1000,
					speed2 = 500,
					n = 0,
					N = $list.children('.inews_scroll_box').length;
				if($tip.length){
					var html = '';
					for(var i=0; i<N; i++){
						if(i==0){ html += '<span class="cur"></span>'; }else{ html += '<span></span>'; }
					}
					$tip.html(html);
				}
				function func(){
					if(n >= N-1){ n = 0; }else{	n ++; }
					$list.children('.inews_scroll_box').eq(n).css({'z-index':2}).stop().fadeIn(speed).siblings('.inews_scroll_box').css({'z-index':1}).stop().fadeOut(speed2);
					if($tip.length){
						$tip.children('*').eq(n).addClass('cur').siblings().removeClass('cur');
					}
				}
				$tip.children('*').click(function(){
					clearInterval(t);
					n = $(this).index()-1;
					func();
					t = setInterval(func, interval);
				})
				t = setInterval(func, interval);
			}()
		}
      
	},
	jAlert: function(info, title, callback){
		var _self = this,
			_html = '';
		
		if(typeof(title) == 'function'){
			callback = title;
			title = '温馨提示';
		}else if(title == null){
			title = '温馨提示';
		}
		
		_self.layout(1);
		
		_html += '<div class="dialog-alert" id="jAlear">';
		_html += '<div class="head">';
		_html += '<h2>'+ title +'</h2>';
		_html += '<a href="javascript:;" class="close"></a>';
		_html += '</div>';
		_html += '<div class="main">';
		_html += '<p>'+ info +'</p>';
		_html += '</div>';
		_html += '<div class="foot">';
		_html += '<a href="javascript:;" class="ok">我知道了</a>';
		_html += '</div>';
		_html += '</div>';		
				
		var $obj = $(_html);
		$obj.appendTo('body').show();
		$obj.find('.close')
			.bind('click', function(){
				_self.layout(0);
				$obj.hide().remove();
				if(callback){
					callback(false);
				}
			});
		$obj.find('.ok')
			.bind('click', function(){
				_self.layout(0);
				$obj.hide().remove();
				if(callback){
					callback(true);
				}
			})
	},
	jConfirm: function(info, title, callback){
		var _self = this,
			_html = '';
		
		if(typeof(title) == 'function'){
			callback = title;
			title = '温馨提示';
		}else if(title == null){
			title = '温馨提示';
		}
		
		_self.layout(1);		
		
		_html += '<div class="dialog-confirm" id="jConfirm">';
		_html += '<div class="head">';
		_html += '<h2>'+ title +'</h2>';
		_html += '<a href="javascript:;" class="close"></a>';
		_html += '</div>';
		_html += '<div class="main">';
		_html += '<p>'+ info +'</p>';
		_html += '</div>';
		_html += '<div class="foot">';
		_html += '<a href="javascript:;" class="ok">确定</a>';
		_html += '<a href="javascript:;" class="cancel">取消</a>';
		_html += '</div>';
		_html += '</div>';		
				
		var $obj = $(_html);
		$obj.appendTo('body').show();
		$obj.find('.close')
			.bind('click', function(){
				_self.layout(0);
				$obj.hide().remove();
				if(callback){
					callback(false);
				}
			});
		$obj.find('.ok')
			.bind('click', function(){
				_self.layout(0);
				$obj.hide().remove();
				if(callback){
					callback(true);
				}
			})
		$obj.find('.cancel')
			.bind('click', function(){
				_self.layout(0);
				$obj.hide().remove();
				if(callback){
					callback(false);
				}
			})
	},
	jLog: function(i, l, t){
		var _offsetX = 0,
			_offsetY = 44;
		if(i == null){
			i = '必填字段，请输入正确的内容';
		}
        if ($('#jLog').length) {
            $('#jLog').html(i + '<i></i>').show().css({ 'left': (l + _offsetX), 'top': (t + _offsetY) });
        } else {
            $('<div class="dialog-log" id="jLog">' + i + '<i></i></div>').appendTo('body').css({ 'left': (l + _offsetX), 'top': (t + _offsetY) });
        }
    },
	layout: function(u){
		if(u == 0){
			$('#dialogLayout').remove();
		}else{
			if(!$('#dialogLayout').length){
				$('<div class="dialog-layout" id="dialogLayout"></div>').appendTo('body').show();
			}
		}
	}
}
var app = new application();
//识别
$(function(){
	browser();
})
function browser(){
 var plhh = window.devicePixelRatio
 var plie = window.screen.deviceXDPI
 var html ="<div class='plsb1'style='z-index: 999;width:100%; height:50px; line-height:50px; background:#FFC; position:fixed; top:0; left:0;'><span style=' width:1070px; height:50px; margin:0 auto; display:block'><h1 style='text-align:left; float:left; line-height:50px; font-size:18px; font-weight:blod; color:red;'>您的浏览器目前分辨率异常，会导致网站显示不正常，您可以键盘按“ctrl+数字0”组合键恢复初始状态。</h1><h2 style=' width:100px; height:30px; display:block; float:right; margin:10px 10px 0 0; background:#fff; text-align:center; line-height:30px; font-size:16px; font-weight:blod; color:red; border:1px solid #06f; cursor:pointer;'>点击关闭</h2></span></div>"
 if(plhh > 1 || plhh < 1 ){
  $("body").append(html);
 }else if(plhh = "undefined"){
  if(plie >96 || plie < 96){
   $("body").append(html);
  }else if(plie = 96){
   $(".plsb1").remove();
  }
 }
 var t = setTimeout('browser()',1000);
 $(".plsb1 span h2").click(function(){
  $(".plsb1").remove();
  clearInterval(t);
  setTimeout('browser()',10000);
 })
}