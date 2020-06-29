cc.Class({
    extends: cc.Component,  //继承cc.Component

    properties: {
      myStart_Button:cc.Sprite,
      myStart_Label:cc.Label,
      Setting_Menu:cc.Prefab,
      Introduction:cc.Prefab,
    },


    onLoad () {
    },

    start () {
    },
    
    onClickButton: function(target, data){
      if (data == 'START'){
      cc.director.loadScene("Play");
      }
    },
    onClickSelect: function(target, data){
      if (data == 'SELECT'){
      cc.director.loadScene("Select_Level");
      }
    },
    onClickLevel1: function(target, data){
      if (data == 'level1'){
      cc.director.loadScene("Play");
      }
    },
     onClickSetting:function (target, data) {
      if (data == 'setting'){
        var node = cc.instantiate(this.Setting_Menu);
        this.node.addChild(node);
        this.Setting_Menu.active = true;
      }
    },
    onClickIntro:function (target, data) {
      if (data == 'introduction'){
        var node = cc.instantiate(this.Introduction);
        this.node.addChild(node);
        this.Introduction.active = true;
      }
    },
      onOverBack:function (target, data) {
        if (data == 'backtomenu'){
          cc.director.loadScene("Start_UI");
      }
    },
    onOverExit:function(){
      cc.game.end();
    },
    onWinBack:function (target, data) {
      if (data == 'backtomenu'){
        cc.director.loadScene("Start_UI");
      }
    },
    onWinExit:function(){
      cc.game.end();
    },
    // update (dt) {},
    
});
