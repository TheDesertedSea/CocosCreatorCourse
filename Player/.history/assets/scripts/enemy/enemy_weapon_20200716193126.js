;// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        Bullet: cc.Prefab,
        // firePoint: cc.Node,
        range: 300,
        player: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },

    start () {
        //this.node.zIndex=0.5;//设置显示顺序
        this.firePoint = this.node.getChildByName('firePoint');

        // let distance = Math.sqrt((this.node.x-this.player.x) * (this.node.x - this.player.x) + (this.node.y - this.player.y) * (this.node.y - this.player.y));
        // if (distance <= this.range) {
        this.schedule(this.fire, 2);
        // }
    },

    fire() {
        let bullet = cc.instantiate(this.Bullet);
        bullet.angle = this.node.angle;

        //由于父节点改为Canvas
        bullet.setParent(cc.find("Canvas"));
        let pos = this.firePoint.convertToWorldSpaceAR(cc.v2(0, 0));
        //所以坐标得加个偏移量（因为Canvs的世界坐标为（480，320））
        bullet.x = pos.x-480;
        bullet.y = pos.y-320;
    },

    update (dt) {
        this.Rotation(this.player);
    },

    Rotation(target) {
        // console.log('enemy'+this.node.x, this.node.y);
        let sp = this.node.parent;
        // console.log('worldspace'+sp.x, sp.y);
        let dx = sp.x - target.x;
        let dy = sp.y - target.y;
        let dir = cc.v2(dx, dy);
        // console.log('weapon'+sp.x, sp.y);
        // console.log('player'+this.player.x, this.player.y);
        // console.log('dx'+dx);
        // console.log('dy'+dy);
        let _angle = dir.signAngle(cc.v2(1, 0));
        // console.log('_angle'+_angle);
        let degree = _angle / Math.PI * 180;
        // console.log('degree'+degree);
        this.node.angle = 90 + degree;
        // console.log('nodeangle'+this.node.angle);
        // console.log(this.node.angle);
        // console.log(this.node.angle);
        // console.log('rotate');
    },
   
});
