// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
    speed: number = 50;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let r = cc.misc.degreesToRadians(this.node.rotation);
        let v2 = cc.v2(0, 1).rotate(-r);
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(v2.x * this.speed, v2.y * this.speed);
    }

    onBeginContact(){
        this.node.destroy();
    }

    // update (dt) {}
}
