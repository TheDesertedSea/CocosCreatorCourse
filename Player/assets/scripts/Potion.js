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
        potionAdd:25,
        type:"DFAULT",
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.playerAround=false;
    },
    use:function()
    {
        if(this.type=="LHP")
        {
            if((this.player.getComponent("Player").health+=this.potionAdd)>100)
            {
                this.player.getComponent("Player").health=100;
            }
        }
        if(this.type=="DP")
        {
            this.player.getChildByName("weapon").getComponent("Weapon").damage+=this.potionAdd;
            //cc.log(this.player.getChildByName("weapon").getComponent("Weapon").damage);
        }
        this.node.destroy();
    },

    start () {

    },

    update (dt) {
        //cc.log(this.node.getPosition().sub(this.player.getPosition()).mag());
        if(this.node.getPosition().sub(this.player.getPosition()).mag()<50)
        {
            //cc.log("yes");
            this.player.getComponent("Player").itemAround=this.node;
            this.player.getComponent("Player").bUseItem=true;
            //cc.log(this.player.getComponent("Player").bUseItem);
            this.playerAround=true;
        }
        if(this.node.getPosition().sub(this.player.getPosition()).mag()>=50&&this.playerAround)
        {
            cc.log("No");
            this.player.getComponent("Player").itemAround=null;
            this.player.getComponent("Player").bUseItem=false;
            this.playerAround=false;
        }
    },
});
