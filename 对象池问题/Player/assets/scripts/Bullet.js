// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        speed:250,  
        lifeTime:3,
        damage:20,
        weapon:cc.Node,
        
    },

    // LIFE-CYCLE CALLBACKS
    onLoad(){
        this.dir=cc.v2(0,0);
        this.time=0;
        this.weapon=cc.find("Canvas/Player/weapon");
    },
    setDir(dirX,dirY)//设置子弹的方向
    {
        this.dirX=dirX;  //（0，0）指向（dirX，dirY）的向量表示方向
        this.dirY=dirY;
    },
    bulletInit(){
         
        this.lv=this.node.getComponent(cc.RigidBody).linearVelocity;  
        this.lv.x=this.speed*this.dirX;   //根据方向设置子弹速度
        this.lv.y=this.speed*this.dirY;
        this.node.getComponent(cc.RigidBody).linearVelocity=this.lv;
    },
    start () {
        
    },

    onBeginContact:function(other,self){  //碰撞到物体消失
        //this.node.active=false;
        this.weapon.getComponent("Weapon").BulletDestroy(this.node);

    },
    update (dt) {


        this.time+=dt;
        if(this.time>this.lifeTime)  //超过三秒子弹消失
        {
            //this.node.active=false;
            this.weapon.getComponent("Weapon").BulletDestroy(this.node);
            
        }
    },
});
