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
        time:5,
        type:"DFAULT",
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.enabled = false;
        this.playerScript=this.player.getComponent("Player");
    },
    use:function()
    {
        if(this.type=="LHP")
        {
            if((this.playerScript.health+=this.potionAdd)>100)
            {
                this.playerScript.health=100;
            }
        }
        if(this.type=="DP")
        {
            this.playerScript.damageAdd+=this.potionAdd;
            this.playerScript.damageAddTime=this.time;
            //cc.log(this.player.getChildByName("weapon").getComponent("Weapon").damage);
        }
        this.playerScript.itemAround=null;
        this.playerScript.bUseItem=false;
        this.node.getChildByName("nameLabel").destroy();
        this.node.destroy();
    },

    start () {

    },

    update (dt) {
        //cc.log(this.node.getPosition().sub(this.player.getPosition()).mag());
        if(this.node.getPosition().sub(this.player.getPosition()).mag()<50)
        {
            //cc.log("yes");
            this.playerScript.itemAround=this.node;
            this.playerScript.bUseItem=true;
            //cc.log(this.player.getComponent("Player").bUseItem);
            //显示物品名称
            this.node.getChildByName("nameLabel").active=true;
        }
        if(this.node.getPosition().sub(this.player.getPosition()).mag()>=50&&this.playerAround)
        {
            //cc.log("No");
            this.playerScript.itemAround=null;
            this.playerScript.bUseItem=false;
            //关闭物品名称显示
            this.node.getChildByName("nameLabel").active=false;
        }
    },
});
