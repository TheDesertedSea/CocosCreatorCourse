// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        bullet:
        {
            default:null,  //发射的子弹预制体
            type: cc.Prefab,
        },
        Rocker:{
            type:cc.node,   //绑定虚拟摇杆结点以获取摇杆信息
            default:null,
        },
        damage:20,
        attackDuration:0.5,
        player:cc.Node,
        extraDamage:0,
        extraDamageDuration:3.0,
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.weaponInit();
        
        
    },
    weaponInit()
    {
        this.fireTime=0;
        this.node.name="weapon";   //将结点名称设置为“weapon”(Player脚本需要)
        var UI=this.node.parent.getChildByName("UI");
        if(UI==null)
        return;
        var Rocker=UI.getChildByName("Joystick");
        this.RockerScript=Rocker.getComponent("Joystick");  //获取“Joystick”脚本为RockerScript

    },
    fire:function(){  //开火
//cc.log("fire!");
        if(this.fireTime<=0)
        {
            var scene = cc.director.getScene();
            var bullet=cc.instantiate(this.bullet);  //实例化预制体
            bullet.getComponent("Bullet").damage=this.damage+this.node.parent.getComponent("Player").damageAdd;
            bullet.parent=this.node;
            var position=this.node.convertToWorldSpaceAR(cc.v2(0,50));
            //cc.log(position.x,position.y);
            bullet.parent=scene;
            bullet.setPosition(position.x,position.y);  //设置子弹的生成位置
            bullet.angle=this.node.angle;  //设置子弹的角度
            bullet.getComponent("Bullet").setDir(this.dirX,this.dirY);
            this.fireTime=this.attackDuration;
        }
        
        
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
        if(this.fireTime>0)
        this.fireTime-=dt;

        
    },
});

