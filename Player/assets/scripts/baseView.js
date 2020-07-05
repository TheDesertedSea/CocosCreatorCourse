cc.Class({
    extends: cc.Component,  //继承cc.Component

    properties: {
      Introduction:cc.Prefab,
      ButtonStart:cc.Node,
      ButtonSelect:cc.Node,
      m_LoadingPrefab:cc.Prefab,
      m_BackGround:cc.Node,
    },


    onLoad () {
    },

    start () {
    },
    
    onClickStart: function(target, data){
      if (data == 'START'){
        this.ButtonStart.active = false;
        this.ButtonSelect.active = false;
        this.m_Loading = cc.instantiate(this.m_LoadingPrefab)
        this.m_BackGround.addChild(this.m_Loading)
        this.m_Loading.y = -220
        this.m_Loading = this.m_Loading.getComponent('loading')
        this.m_Loading.setProgress(1)
        this.m_Loading.finishCallBack = function(){
          this.m_Loading.node.active = false
          cc.director.loadScene("Play");
        }.bind(this)
      }
    },
    onClickSelect: function(target, data){
      if (data == 'SELECT'){
        cc.director.loadScene("Select_Level");
      }
    },
    onClickLevel1: function(target, data){
      if (data == 'level1'){
        this.m_Loading = cc.instantiate(this.m_LoadingPrefab)
        this.m_BackGround.addChild(this.m_Loading)
        this.m_Loading.y = -220
        this.m_Loading = this.m_Loading.getComponent('loading')
        this.m_Loading.setProgress(1)
        this.m_Loading.finishCallBack = function(){
          this.m_Loading.node.active = false
          cc.director.loadScene("Play");
        }.bind(this)
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
