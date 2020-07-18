// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        /** 地刺的变化次数 */
        changeNum: 0,
        /** 伤害值：5 */
        damage: 5, 
        /** 伤害计时器 */
        damageTime: 0,
        /** 伤害标准 */
        damageOn: false,
        /** 伤害间隔 */
        interTime: 1,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.schedule(this.update_trap, 5);
    },

    update_trap: function() {
        if (this.changeNum % 2 == 0)
            this.getComponent(cc.Animation).play('trap_out');
        else
            this.getComponent(cc.Animation).play('trap_in');

        this.changeNum++;
    },

    update (dt) {
        // 设置伤害的间隔
        if (this.damageOn)
            this.damageTime += dt;
        if (this.damageTime >= this.interTime) {
            this.damageOn = false;
            this.damageTime = 0;
        }
    },

    /** 角色与地刺的碰撞回调 */ 
    onCollisionStay(other, self) {
        //console.log(other.getComponent("Player").health);
        if (this.changeNum % 2 == 1) {
            if (other.node.group == 'player' && this.damageOn == false) {
                other.getComponent("Player").getDamage(this.damage);
                this.damageOn = true;
                //console.log(other.getComponent("Player").health);
            }
        }
    },

    onCollisionExit(other, self) {
        if (this.changeNum % 2 == 1) {
            if (other.node.group == 'player' && this.damageOn == false) {
                this.damageOn = false;
            }
        }
    },
});
