// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        //roomNumber: 0,
        player: cc.Node,
        potion: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //获取保存player脚本组件
        this.playerScript=this.player.getComponent("Player");
        this.potionScript=this.potion.getComponent("Potion");
    },

    start () {

    },

    update (dt) {
        //检测玩家距离，若自己最近，则将自己的节点绑定到player上
        var playerDistance=this.node.getPosition().sub(this.player.getPosition()).mag();
        if(playerDistance<this.playerScript.enemyDistance)//&&this.playerScript.roomNumber==this.roomNumber)
        {
            this.playerScript.enemyAround=this.node;
            this.playerScript.enemyDistance=playerDistance;
        }   

    },

    onCollisionEnter(other,self){  //碰撞到子弹消失
        if (other.node.group == "bullet"){
            //实现箱子渐隐的效果
            this.node.runAction(cc.fadeOut(0.5));
            //0.4秒之后销毁箱子 
            setTimeout(function () {
                //如果玩家目前指向自己，则取消该指向
                if(this.playerScript.enemyAround==self.node)
                {
                    this.playerScript.enemyAround=null;
                    this.playerScript.enemyDistance=10000;
                }
                this.potionScript.enabled = true;
                this.node.destroy();
            }.bind(this), 400);
        }    
        
    },
});
