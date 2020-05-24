cc.Class({
    extends: cc.Component,  //继承cc.Component

    properties: {
      mySprite:cc.SpriteFrame,
      myStart_Button:cc.Sprite,
      myStart_Label:cc.Label,
      Setting_Menu:cc.Prefab,
    },


    onLoad () {
      var spr = this.node.getChildByname('aaa')
    },

    start () {
    },
    
    onClickButton: function(target, data){
      if (data == 'START'){
      this.myStart_Label.enabled = false
      this.myStart_Button.spriteFrame = this.mySprite
      cc.director.loadScene("Play")
      }
    },
     onClickSetting:function (target, data) {
      if (data == 'setting'){
        var node = cc.instantiate(this.Setting_Menu);
        this.node.addChild(node);
        this.Setting_Menu.active = true
      }
    },
      onOverBack:function (target, data) {
        if (data == 'backtomenu'){
          cc.director.loadScene("Start_UI")
      }
    }
    // update (dt) {},
    
});
