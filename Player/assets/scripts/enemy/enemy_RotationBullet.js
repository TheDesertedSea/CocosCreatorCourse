// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 100,
        RotationSpeed: 4,
        damage: 10
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // this.node.angle = 0;
        this.initAngle = this.node.angle;
    },

    start () {

    },

    update (dt) {
        let r = cc.misc.degreesToRadians(-this.initAngle);
        this.sp = cc.v2(0, 1).rotate(-r);
        this.sp.normalizeSelf();

        this.lv = this.node.getComponent(cc.RigidBody).linearVelocity;
        this.lv.x = this.sp.x * this.speed;
        this.lv.y = this.sp.y * this.speed;
        this.node.getComponent(cc.RigidBody).linearVelocity = this.lv;
        // this.node.x += this.sp.x * this.speed * 0.001;
        // this.node.y += this.sp.y * this.speed * 0.001;

        this.Rotate();

        // console.log(this.node.x, this.node.y);
    },

    Rotate() {
        this.node.angle += this.RotationSpeed;
    },

    onBeginContact(info,self,other) {
        if (other.node.group == "player" && other.node.getComponent("Player").onHit == false) {
            //cc.log("ENEMY ATTACK!");
            other.getComponent("Player").getDamage(this.damage);
        }
        this.node.destroy();
    },
});
