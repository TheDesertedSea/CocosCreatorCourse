// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        Bullet: cc.Prefab,
        player: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },

    start () {
        this.schedule(this.fire, 2);
    },

    fire() {
        let bullet = cc.instantiate(this.Bullet);
        bullet.angle = this.node.angle;

        //由于父节点改为Canvas
        bullet.setParent(cc.find("Canvas"));
        // let pos = this.firePoint.convertToWorldSpaceAR(cc.v2(0, 0));
        let pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        //所以坐标得加个偏移量（因为Canvs的世界坐标为（480，320））
        bullet.x = pos.x-480;
        bullet.y = pos.y-320;
        // console.log("bullet", bullet.x, bullet.y);
        // console.log("player", this.player.x, this.player.y);
    },

    update (dt) {
        this.Rotation(this.player);
    },

    Rotation(target) {
        let pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        pos.x -= 480;
        pos.y -= 320;
        let dx = pos.x - target.x;
        let dy = pos.y - target.y;
        let dir = cc.v2(dx, dy);

        let _angle = dir.signAngle(cc.v2(1, 0));
        let degree = _angle / Math.PI * 180;
        this.node.angle = 90 - degree;
        // console.log(this.node.angle);
    },
   
});

