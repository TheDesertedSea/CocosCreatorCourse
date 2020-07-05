// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        smog: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.smog.active=true;
    },

    start () {

    },
    // 角色与初始门的碰撞回调
    onCollisionEnter(other, self) {
        if (other.node.group == 'player' ) {
            //实现墙壁渐隐的效果
            this.node.runAction(cc.fadeOut(1));
            //0.2秒之后销毁墙壁
            setTimeout(function () {
                this.node.destroy();
            }.bind(self), 200);
            //执行开门动画
            //this.node.active = false;
            this.smog.runAction(cc.fadeOut(1.5));
        }
    }
    // update (dt) {},
});