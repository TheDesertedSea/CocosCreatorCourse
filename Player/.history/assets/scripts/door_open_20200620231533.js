// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        roomEnemyNum1: 3,
        roomEnemyNum2: 0,
        roomNumber1:1,
        roomNumber2:2,
        Obj: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {

    },
    // 角色与墙壁的碰撞回调
    onCollisionEnter(other, self) {
        //console.log(other.node.getComponent("door_open").enemy_num)
        if (other.node.group == 'player' ) {
            cc.log("collision");
            cc.log(this.roomEnemyNum1);
            let playerScript=other.node.getComponent("Player");
            if(this.roomEnemyNum2==0&&playerScript.roomNumber!=this.roomNumber1)
            {
                playerScript.roomNumber=this.roomNumber1;
            }
            else if(this.roomEnemyNum1==0&&playerScript.roomNumber!=this.roomNumber2)
            {
                playerScript.roomNumber=this.roomNumber2;
            }
            else
            {
                return;
            }
            //实现墙壁渐隐的效果
            this.node.runAction(cc.fadeOut(0.5));
            //在玩家进入房间后将房间内Obj刷新出来
            this.Obj.active = true;
            //0.2秒之后销毁墙壁
            setTimeout(function () {
                this.node.destroy();
            }.bind(self), 200);
        }
    }
    // update (dt) {},
});
