// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        bullet:cc.Prefab,//发射的子弹预制体
        
        Rocker:{
            type:cc.node,   //绑定虚拟摇杆结点以获取摇杆信息
            default:null,
        },
        damage:20,
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.bulletPool=new cc.NodePool();
        let initCount=5;
        for (let i = 0; i < initCount; ++i) {
            let bulletInst = cc.instantiate(this.bullet); // 创建节点
            this.bulletPool.put(bulletInst); // 通过 put 接口放入对象池
        }
        this.node.name="weapon";   //将结点名称设置为“weapon”(Player脚本需要)
        var UI=this.node.parent.getChildByName("UI");
        if(UI==null)
        return;
        var Rocker=UI.getChildByName("Joystick");
        this.RockerScript=Rocker.getComponent("Joystick");  //获取“Joystick”脚本为RockerScript
    },
    fire:function(){  //开火
//cc.log("fire!");
        let bullet = null;
        cc.log(this.bulletPool.size());
        if (this.bulletPool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
        bullet = this.bulletPool.get();
    
        //cc.log(bullet.getComponent(cc.RigidBody).linearVelocity.x);
        //bullet.active=true;
        //cc.log("yes");
        } else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
        bullet = cc.instantiate(this.bullet);
        }
        
        if(bullet.getComponent(cc.Sprite))
        {
            cc.log("yes");
            if(bullet.getPostion())
            {
                cc.log("has position");
            }
        }
        var scene = cc.director.getScene();
        bullet.getComponent("Bullet").damage=this.damage;
        bullet.parent=this.node;
        var position=this.node.convertToWorldSpaceAR(cc.v2(0,50));
        //cc.log(position.x,position.y);
        bullet.parent=scene;
        bullet.setPosition(position.x,position.y);  //设置子弹的生成位置
        bullet.angle=this.node.angle;  //设置子弹的角度
        bullet.getComponent("Bullet").setDir(this.dirX,this.dirY);
        bullet.getComponent("Bullet").bulletInit();
  
    },
    BulletDestroy(bullet){
       // cc.log("here");
        this.bulletPool.put(bullet);
        //cc.log(this.bulletPool.size());
    },
    start () {

    },

    update (dt) {

        if(this.RockerScript.dir.mag()<0.5){
            return;
        }
        var r = Math.atan2(this.RockerScript.dir.y,this.RockerScript.dir.x);//从RockerScript中获取摇杆角度信息
        var degree = r * 180/(Math.PI);  //计算角度
        degree = degree-90;  //设置角度

        this.node.angle = degree;
        this.dirX=this.RockerScript.dir.x;   //存储获得到的摇杆角度信息
        this.dirY=this.RockerScript.dir.y;
    },
});

