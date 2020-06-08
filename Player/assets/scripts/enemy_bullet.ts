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
    @property
    damage: number = 5;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //cc.log(this.node.parent.name);
    }

    start () {
        //this.node.zIndex=0.5;//设置显示顺序
        let r = cc.misc.degreesToRadians(this.node.rotation);
        let v2 = cc.v2(0, 1).rotate(-r);
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(v2.x * this.speed, v2.y * this.speed);
    }

    //碰到角色
    onBeginContact(info, self, other){
        //cc.log("ENEMY ATTACK!");
        //cc.log(other.node.group);
        if (other.node.group == "player" && other.node.getComponent("Player").onHit == false) {
            //cc.log("ENEMY ATTACK!");
            other.getComponent("Player").getDamage(this.damage);
        }
        this.node.destroy();
    }

    // update (dt) {}
}
