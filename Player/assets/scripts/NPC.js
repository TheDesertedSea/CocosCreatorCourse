cc.Class({
    extends: cc.Component,

    properties: {
        player:cc.Node,
        dialogBubble:cc.Node,
        NPCName:"DEFALUT NPC",
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.playerScript=this.player.getComponent("Player");
        //this.talked=false;
    },

    start () {

    },
    update(dt)
    {
        //cc.log(this.node.getPosition().sub(this.player.getPosition()).mag());
        if(this.node.getPosition().sub(this.player.getPosition()).mag()<50)
        {
            //cc.log("yes");
            this.playerScript.NPCAround=this.node;
            this.playerScript.bTalkWithNPC=true;

            //显示NPC名称
            this.node.getChildByName("nameLabel").active=true;
        }
        if(this.node.getPosition().sub(this.player.getPosition()).mag()>=50&&this.playerScript.NPCAround==this.node)
        {
            //cc.log("No");
            this.playerScript.NPCAround=null;
            this.playerScript.bTalkWithNPC=false;
            //关闭NPC名称显示
            this.node.getChildByName("nameLabel").active=false;
        }

    },
    talk:function()
    {
        this.dialogBubble.active=true;
        this.dialogBubble.getComponent("dialog").beginDialog();
        //this.talked=false;
    }
});