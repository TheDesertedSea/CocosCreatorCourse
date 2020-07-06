// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        lifetime: 3,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.time = 0;
        this.scheduleOnce(this.explode, 3);
    },

    update (dt) {
        this.time += dt;
        if (this.time > this.lifetime) {
            console.log("destroy");
            this.node.destroy();
        }
    },

    explode() {
        //播放动画
        this.node.getComponent(cc.Animation).play();

        //摄像机抖动
        var camera=cc.find("Canvas/Player/PlayerCamera");
        cc.tween(camera).to(0.05,{x:camera.x+2.5}).to(0.05,{y:camera.y+2.5}).to(0.05,{x:camera.x-2.5})
        .to(0.05,{y:camera.y-2.5}).to(0.05,{x:camera.x-2.5}).to(0.05,{y:camera.y+2.5}).to(0.05,{x:camera.x+2.5})
        .to(0.05,{y:camera.y-2.5}).start();
        
        //短暂时间后消失
        cc.tween(this.node).delay(0.15).call(()=>{this.node.getComponent(cc.Animation).pause();this.node.destroy();}).start();
        console.log("explode");
            
    },
});
