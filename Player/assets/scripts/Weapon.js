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
        
        damage:20,
        attackDuration:0.5,
        player:cc.Node,    
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
        this.weaponInit(1.0,0.0);
        this.maxDir=1.0;
    },
    strat(){
        
        //this.node.zIndex=0.5;//设置显示顺序
    },
    weaponInit(dirX,dirY)
    {
        this.fireTime=0;
        this.node.name="weapon";   //将结点名称设置为“weapon”(Player脚本需要)
        this.dirX=dirX;
        this.dirY=dirY;
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
            bullet.parent=cc.find("Canvas");
            bullet.setPosition(position.x-480,position.y-320);  //设置子弹的生成位置
            bullet.angle=this.node.angle;  //设置子弹的角度
            
            //钳制方向在(0,1)之间
            let vl=cc.v2(this.dirX,this.dirY).mag();
            bullet.getComponent("Bullet").setDir(this.dirX/vl,this.dirY/vl);
            this.fireTime=this.attackDuration;
        }
        
        
    },

    start () {

    },

    update (dt) {
        
        if(this.fireTime>0)
        this.fireTime-=dt;

        
    },
});

