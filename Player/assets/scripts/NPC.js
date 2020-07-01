var DialogData=cc.Class({  //对话数据类
    name: "DialogData",
    properties: {
        role:0,  //角色编号
        content:cc.String,  //内容
    },
    
});

cc.Class({
    extends: cc.Component,

    properties: {
        player:cc.Node,
        dialogBubble:cc.Node,
        NPCName:"DEFALUT NPC",
        textDataArr:[DialogData],  //对话数据数组
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
    talk:function()  //谈话
    {
        this.dialogBubble.active=true;
        this.dialogBubble.getComponent("dialog").beginDialog(this.textDataArr);

        //玩家线性移动速度清零
        var lv=this.player.getComponent(cc.RigidBody).linearVelocity;
        lv.x=0;
        lv.y=0;
        this.player.getComponent(cc.RigidBody).linearVelocity=lv;
        //摇杆归位
        var rockerScript=this.playerScript.MoveRockerScript;
        rockerScript.Rocker.setPosition(cc.v2(0,0));
        rockerScript.dir = cc.v2(0, 0);
            
        //this.talked=false;
    }
});