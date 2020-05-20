cc.Class({
        extends: cc.Component,  //继承cc.Component

        properties: {
            Setting_Menu:cc.Prefab,
        },


        onLoad () {
        },

        start () {
        },
        
        onClickButton: function(target, data){
        },
         onClickSetting:function (target, data) {
            if (data == 'setting'){
                var node = cc.instantiate(this.Setting_Menu);
                this.node.addChild(node);
                this.Setting_Menu.active = true
                this.node.pauseSystemEvents(true); //暂停当前节点上注册的所有节点系统事件
            }
            if (data == 'setting'){}
        },
        // update (dt) {},
});

