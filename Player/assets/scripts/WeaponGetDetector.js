// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        player:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.playerAround=false;
    },

    start () {

    },

    update (dt) {
        //cc.log(this.node.x);
        //cc.log(this.node.y);
        //cc.log(this.node.parent.name);
        //cc.log("detector alive");
        //cc.log(this.node.getPosition().sub(this.player.getPosition()).mag());
        if(this.node.getPosition().sub(this.player.getPosition()).mag()<50)
        {
            cc.log("yes");
            this.player.getComponent("Player").weaponAround=this.node;
            this.player.getComponent("Player").bGetWeapon=true;
            //cc.log(this.player.getComponent("Player").bUseItem);
            this.playerAround=true;
        }
        if(this.node.getPosition().sub(this.player.getPosition()).mag()>=50&&this.playerAround)
        {
            cc.log("No");
            this.player.getComponent("Player").weaponAround=null;
            this.player.getComponent("Player").bGetWeapon=false;
            this.playerAround=false;
        }
    },
});
