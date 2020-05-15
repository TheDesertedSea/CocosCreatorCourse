cc.Class({
    extends: cc.Component,  //继承cc.Component

    properties: {
      mySprite:cc.SpriteFrame,
      myStart_Button:cc.Sprite,
      myStart_Label:cc.Label,
    },


    onLoad () {
//      var spr = this.node.getChildByName('Start_Button')
//      cc.log(spr)
//      var spr = this.node.getComponent()
//      cc.log(spr)
      
    },

    start () {
      
    },
    
    onClickButton: function(target, data){
//      cc.log(data)
      if (data == 'START'){
        cc.log('myFunction!')
//        this.Start_Button.spriteFrame = this.mySprite
//      cc.log(this.myButton)
      this.myStart_Label.enabled = false
      this.myStart_Button.spriteFrame = this.mySprite
      cc.director.loadScene("Play");
      }
    },

    // update (dt) {},
});
