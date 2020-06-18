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
        firePoint: cc.Node,
        player: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.firePoint = this.node.getChildByName('firePoint');
        this.schedule(this.fire, 2);
    },

    // fire() {
    //     let bullet = cc.instantiate(this.Bullet);
    //     bullet.rotation = this.node.rotation;
    //     bullet.setParent(cc.director.getScene());
    //     let pos = this.firePoint.convertToWorldSpaceAR(cc.v2(0, 0));
    //     bullet.x = pos.x;
    //     bullet.y = pos.y;
    // },

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
        this.node.angle = 90 - degree;
        // console.log('nodeangle'+this.node.angle);
        // console.log(this.node.angle);
        // console.log(this.node.angle);
        // console.log('rotate');
    },
});
