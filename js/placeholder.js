


    /*
    ��IE8-�����֧��html5 placeholder���ԣ�֧������Ϊpassword
    */
    if (!('placeholder' in document.createElement('input'))) {//�ж�������Ƿ�֧��placeholder���ԣ���֧������չ
        //��IE7-֧��display inline-block css����Ϊpassword������Ҫ��dom��ģ��
        document.write('<style>div.placeholder{display:inline;zoom:1;position:relative;}input.placeholder{color:#999}div.placeholder div.note{font-size:12px;color:#999;position:absolute;left:3px;top:3px;}</style>');
        $.fn.placeholder = function (config) {
            return this.each(function () {
                var me = $(this), pl = me.attr('placeholder');
                if (this.type == 'password') {//Ϊ��������ͨ��val������ֵ��ʾ���ݣ�����ʾ�Ǻţ�ֻ����dom��ģ��
                    var wrap = me.wrap('<div class="placeholder" style="width:' + me.outerWidth(true) + 'px;height:' + me.outerHeight(true) + 'px"></div>').parent();
                    var note = wrap.append('<div class="note" style="line-height:' + me.outerHeight(true) + 'px">' + pl + '</div>')
                    .click(function () {
                        wrap.find('div.note').hide(); me.focus();
                    }).find('div.note');
                    me.blur(function () {
                        if (me.val() == '') note.show();
                    });
                }
                else { //��������ʹ��val����placeholderֵ
                    me.focus(function () {
                        me.removeClass('placeholder');
                        if (this.value == pl) this.value = '';
                    }).blur(function () {
                        if (this.value == '') me.val(pl).addClass('placeholder');
                    }).trigger('blur').closest('form').submit(function () {
                        if (me.val() == pl) me.val('');
                    });
                }
            });
        }
        //��չ����clearPlaceholderValue���ύ����ǰִ��һ�£���պ�placeholderֵһ���Ŀؼ����ݡ���ֹ�ύplaceholder��ֵ��
        //��������ؼ����ڱ��л���ʹ��������������ύ�ģ����ᴥ��form��submit�¼����ǵ�һ��Ҫִ�д˷���
        //�Ƿ�Ҫִ����������������ж��Ƿ���ڴ���չ
        //DMEO:if($.fn.clearPlaceholderValue)$('input[placeholder],textarea[placeholder]').clearPlaceholderValue()
        $.fn.clearPlaceholderValue = function () {
            return this.each(function () {
                if (this.value == this.getAttribute('placeholder')) this.value = '';
            });
        }
        
        $(function () {
            $('input[placeholder],textarea[placeholder]').placeholder();
        });
		
	}
  


