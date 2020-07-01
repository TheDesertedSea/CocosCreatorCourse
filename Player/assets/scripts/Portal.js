cc.Class({
    extends: cc.Component,

    properties: {
        winPanel:cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onBeginContact(info, self, other){
        //cc.log("collision");
        if(other.node.group=="player")
        {
            cc.director.pause();
            var WP=cc.instantiate(this.winPanel);
            WP.getChildByName("BG_Box").getChildByName("Score_Label").getComponent(cc.Label).string="Score："
           +(other.node.getComponent("Player").score+0).toString();
           WP.parent=other.node;
           other.node.getChildByName("UI").active=false;
        }
    }
    // update (dt) {},
});