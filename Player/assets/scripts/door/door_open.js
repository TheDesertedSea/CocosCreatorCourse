// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        Obj: cc.Node,
        BlockDoor: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {

    },
   
    onCollisionEnter(other, self) {
        //console.log(other.node.getComponent("door_open").enemy_num)
        if (other.node.group == 'player' ) {
            //在玩家进入房间后将房间内Obj刷新出来
            this.Obj.opacity = 0;
            this.Obj.active = true;
            this.Obj.runAction(cc.fadeIn(0.5));


            //添加怪物绑定和箱子绑定
            var playerScript=other.node.getComponent("Player");
            var enemies=this.Obj.getChildByName("enemies").children;
            var boxes=this.Obj.getChildByName("boxes").children;


            playerScript.enemies=playerScript.enemies.concat(enemies);


            playerScript.boxes=playerScript.boxes.concat(boxes);
            
            //实现墙壁渐显的效果
            this.BlockDoor.opacity = 0;
            this.BlockDoor.active = true;
            this.BlockDoor.runAction(cc.fadeIn(0.5));

            this.node.parent.active = false;
        }
    }
    // update (dt) {},
});
