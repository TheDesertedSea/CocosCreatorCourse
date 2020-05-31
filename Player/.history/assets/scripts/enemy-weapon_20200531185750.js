// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        bullet: {
            default:null,  //发射的子弹预制体
            type: cc.Prefab,
        },
        damage: 1,
        player: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // this.weaponInit();
    },

    // weaponInit() {
    //     this.fireTime=0;
    //     this.node.name="enemy-weapon";   //将结点名称设置为“weapon”(Player脚本需要)
    // },

    fire() {  //开火
        // if(this.fireTime <= 0) {
            // var scene = cc.director.getScene();
            var bullet = cc.instantiate(this.bullet);  //实例化预制体
            // bullet.getComponent("enmey-bullet").damage = this.damage;
            bullet.parent = this.node;
            var position = this.node.convertToWorldSpaceAR(cc.v2(0,50));
            // bullet.parent = scene;
            bullet.setPosition(position.x,position.y);  //设置子弹的生成位置
            bullet.angle = this.node.angle;  //设置子弹的角度
            bullet.getComponent("enemy-bullet").setDir(this.dirX,this.dirY);
            // this.fireTime=this.attackDuration;
        // }
    },

    start () {
        this.schedule(this.fire, 5);
    },

    update (dt) {
        this.Rotation();

        // this.fire();


        // if(this.fireTime>0)
        // this.fireTime-=dt;
    },

    Rotation() {
        var sp = this.node.convertToWorldSpaceAR(this.node);
        let dx = sp.x - this.player.x;
        let dy = sp.y - this.player.y;
        let dir = cc.v2(dx, dy);
        console.log('weapon'+sp.x, sp.y);
        console.log('player'+this.player.x, this.player.y);
        // console.log(dx);
        // console.log(dy);
        let _angle = dir.signAngle(cc.v2(1, 0));
        let degree = _angle / Math.PI * 180;
        this.node.angle = 90 - degree;
        // console.log('rotate');
    },
});
