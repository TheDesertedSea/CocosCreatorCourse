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
        bInfiniteAmmo:true,  //是否无限子弹
        maxAmmo:0,//最大子弹数
        fireNum:1,  //发射子弹数
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.ammo=this.maxAmmo;  //当前子弹数
        this.weaponInit(1.0,0.0);
        this.maxDir=1.0;
        
    },
    strat(){
        //this.node.zIndex=0.5;//设置显示顺序
    },
    weaponInit(dirX,dirY)
    {
        if(this.ammo==undefined)
        {
            this.ammo=this.maxAmmo;
        }
        this.node.getChildByName("nameLabel").active=false;
        this.fireTime=0;
        this.node.name="weapon";   //将结点名称设置为“weapon”(Player脚本需要)
        this.dirX=dirX;
        this.dirY=dirY;
    },
    fire:function(){  //开火
//cc.log("fire!");
//cc.log(Math.pow(-1,2));
        if(this.fireTime<=0)
        {
            var scene = cc.director.getScene();
            for(var i=0;i<this.fireNum;++i)
            {
                var bullet=cc.instantiate(this.bullet);  //实例化预制体
                bullet.getComponent("Bullet").damage=this.damage+this.node.parent.getComponent("Player").damageAdd;
                bullet.parent=this.node;
                var position=this.node.convertToWorldSpaceAR(cc.v2(0,30));
                //cc.log(position.x,position.y);
                bullet.parent=cc.find("Canvas");
                bullet.setPosition(position.x-480,position.y-320);  //设置子弹的生成位置
                bullet.angle=this.node.angle+10*i*Math.pow(-1,i);  //设置子弹的角度
                let calculateAngle=bullet.angle+90;
                //钳制方向在(0,1)之间
                //let vl=cc.v2(Math.cos(bullet.angle*Math.PI/180),Math.sin(bullet.angle*Math.PI/180)).mag();
                bullet.getComponent("Bullet").setDir(Math.cos(calculateAngle*Math.PI/180),Math.sin(calculateAngle*Math.PI/180));
            }
            
            this.fireTime=this.attackDuration;
            if(!this.bInfiniteAmmo)
            {
                this.ammo=this.ammo-this.fireNum;
            }
        }
        //cc.log("ammo: "+this.ammo);
        
    },

    update (dt) {
        
        if(this.fireTime>0)
        this.fireTime-=dt;

        
    },
});