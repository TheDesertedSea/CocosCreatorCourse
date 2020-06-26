cc.Class({
    extends: cc.Component,

    properties: {
        speed:250,
        lifeTime:3,
        extraDamage:0,
        extraDamageTimes:0,
        isExplosion:false,
        explosionDamage:0,
    },

    // LIFE-CYCLE CALLBACKS
    onLoad(){
        //cc.log(this.node.parent.name);
        this.dir=cc.v2(0,0);
        
    },
    setDir(dirX,dirY)//设置子弹的方向
    {
        this.dirX=dirX;  //（0，0）指向（dirX，dirY）的向量表示方向
        this.dirY=dirY;
    },
    explode(otherNode)
    {
        cc.log("explosion");
    },
    start () {
        this.node.zIndex=0.5;//设置显示顺序
        this.time=0; 
        this.lv=this.node.getComponent(cc.RigidBody).linearVelocity;  
        this.lv.x=this.speed*this.dirX;   //根据方向设置子弹速度
        this.lv.y=this.speed*this.dirY;
        this.node.getComponent(cc.RigidBody).linearVelocity=this.lv;
    },

    onBeginContact:function(other,self){  //碰撞到物体消失
        //爆炸
        if(this.isExplosion)
        {
            bulletScript.explode(other.node);
        }
        this.node.destroy();
    },
    update (dt) {


        this.time+=dt;
        if(this.time>this.lifeTime)  //超过三秒子弹消失
        {
            this.node.destroy();
        }
    },
});
