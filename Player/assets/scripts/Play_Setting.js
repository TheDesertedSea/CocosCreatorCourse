cc.Class({
        extends: cc.Component,  //继承cc.Component

        properties: {
            Setting_Menu:cc.Prefab,
        },


        onLoad () {
            this.node.zIndex=2; //zIndex为叠放次序
            cc.log(this.node.zIndex);
            //this.node.zIndex=2; //zIndex为叠放次序
            //cc.log(this.node.zIndex);
        },

        start () {
            this.node.zIndex=1;//设置显示顺序
        },
        
         onClickSetting:function (target, data) {
            if (data == 'setting'){
                cc.director.pause();
                var node = cc.instantiate(this.Setting_Menu);
                this.node.addChild(node);
                this.Setting_Menu.active = false;
            }
        // update (dt) {},
        },
});

