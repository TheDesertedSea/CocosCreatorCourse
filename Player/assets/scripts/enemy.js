// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


// const State = {
//     stand: 1,
//     attack: 2,
// };

cc.Class({
    extends: cc.Component,

    properties: {
        player: {
            default: null,
            type: cc.Node
        },
        speed:50,
        damage:5,
        health:100,
    },

    onLoad () {
        this.sp = cc.v2(0, 0);
        // this.state = '';
        // this.sp = cc.v2(0, 0);

        // this.heroState = State.stand;
        // this.ani = 'idle';
    },

    // onDestory(){
    //     cc.systemEvent.off('keydown', this.onKeydown, this);
    //     cc.systemEvent.off('up', this.onKeyup, this);
    // },
    onBeginContact:function(info,self,other)
    {
        if(other.node.group=="bullet")
        {
            
            this.getDamage(other.node.getComponent("Bullet").damage);
        }
    },
    start() {
        this.LookAtObj(this.player);
    },
    getDamage:function(damage)
    {
        this.health-=damage;
        if(this.health<=0)
        {
            this.node.destroy();
        }
    },

    update (dt) {
        if (!this.player){
            return;
        }

        let dx = this.player.x - this.node.x;
        let dy = this.player.y - this.node.y;
        this.sp = cc.v2(dx, dy);
        this.sp.normalizeSelf();
        // //旋转角度转换为弧度
        // let angle = this.node.rotation / 180 * Math.PI;
        // //根据角度计算方向向量
        // this.sp = cc.v2(Math.cos(angle), Math.sin(angle));
        // //方向向量单位化
        // sp.normalizeSelf();

        // //根据向量方向移动
        // this.node.x += dir.x * this.Speed * dt;
        // this.node.y += dir.y * this.Speed * dt;

        // this.sp.x = -1;
        // let angle = this.sp.signAngle(cc.v2(1, 0));
        // let degree = angle / Math.PI * 180;
        // this.node.rotation = degree;

        this.lv = this.node.getComponent(cc.RigidBody).linearVelocity;

        if (this.sp.x || this.sp.y) {
            this.lv.x = this.sp.x * this.speed;
            this.lv.y = this.sp.y * this.speed;
        } else {
            this.lv.x = 0;
            this.lv.y = 0;
        }

        this.node.getComponent(cc.RigidBody).linearVelocity = this.lv;
    },

    LookAtObj(target) {
        //计算朝向
        let dx = this.node.x - target.x;
        let dy = this.node.y - target.y;
        let dir = cc.v2(dx, dy);

        //计算基于x轴正方向的夹角弧度
        let angle = dir.signAngle(cc.v2(1, 0));
        //夹角转换成欧拉角
        let degree = angle / Math.PI * 180;
        //物体朝向
        this.node.angle = degree - 90;
    },
});
