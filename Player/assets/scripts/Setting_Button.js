
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log(this.node.parent.name);
        this.node.parent=cc.find("Canvas");
    },

    start () {
        //this.node.zIndex=2;
        
    },
    
    show:function(){
        this.node.active = true;
    },
    hide:function(){
        this.node.active = false;
    },
    init:function(okCallFunc){
        this.okCallFunc = okCallFunc;
    },
    onClose:function(){
        cc.director.resume();
        this.hide();
    },
    onExit:function(){
        cc.game.end();
    },
    onBackToMenu:function(){
        cc.director.loadScene("Start_UI");
    },
    onRestart:function(){
        cc.director.loadScene("Play");
    },
    onOK:function () {
        if(this.okCallFunc != null){
            this.okCallFunc();
        }
    },
    setTip:function (string) {
        this.m_tip.string = string;
    },
    // update (dt) {},
});
