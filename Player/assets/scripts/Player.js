// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        speed:100,
        weaponPack:cc.Node,//武器栏
        health:100,
        healthBar:cc.Node,
    },

    onLoad(){
        this.weaponNums=2;
        this.moveForward=false;
        this.moveBackward=false;
        this.moveRight=false;
        this.moveLeft=false;
        this.onHit=false;
        this.hitTime=0;
        this.itemAround=null;
        this.bUseItem=false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
    },

    onDestroy(){
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
    },
    onKeyDown:function(event)  
    {
        switch(event.keyCode)  
        {  //w向前，s向后，a向左，d向右，space攻击
            case cc.macro.KEY.a:
                this.moveLeft=true;
                this.moveRight=false;
                break;
            case cc.macro.KEY.d:
                this.moveRight=true;
                this.moveLeft=false;
                break;
            case cc.macro.KEY.w:
                this.moveForward=true;
                this.moveBackward=false;
                break;
            case cc.macro.KEY.s:
                this.moveBackward=true;
                this.moveForward=false;
                break;
            case cc.macro.KEY.space:  
                this.attack();
        }
    },

    onKeyUp:function(event)
    {
        switch(event.keyCode)
        {
            case cc.macro.KEY.a:
                this.moveLeft=false;
                break;
            case cc.macro.KEY.d:
                this.moveRight=false;
                break;
            case cc.macro.KEY.w:
                this.moveForward=false;
                break;
            case cc.macro.KEY.s:
                this.moveBackward=false;
        }
    },

   /* attack:function()
    {
        cc.log("attack");
        var weapon=this.node.getChildByName("weapon");
        cc.tween(weapon).to(0.2,{rotation:90}).to(0.4,{rotation:30}).start();
    },
    */

    attack:function()
    {
       // cc.log("attack");   //调用武器的开火函数
       if(this.bUseItem)
       {
           cc.log("has item!");
            this.itemAround.getComponent("LittleHealthPotion").use();
            cc.log(this.health);
            bUseItem=false;
       }
       else{
        var weapon=this.node.getChildByName("weapon");
        weapon.getComponent("Weapon").fire();
       }
        
    },

    changeWeapon:function()  //切换武器
    {
        if(this.weaponNums==1)
        {
            return;
        }
        var weapon=this.node.getChildByName("weapon");

        weapon.parent=null;
        weapon.getComponent("Weapon").enabled=false;
        var weapon2=this.weaponPack.getChildByName("weapon");
        weapon2.parent=this.node;
        weapon2.position.x=1.729;
        weapon2.position.y=-3.373;
        weapon2.getComponent("Weapon").enabled=true;
        weapon.parent=this.weaponPack;
        weapon.position.x=4.024;
        weapon.position.y=-2.013;

    },
    onBeginContact:function(info,self,other){
        cc.log("CONTACT!");
        cc.log(other.node.group);
        if(other.node.group=="enemy"&&this.onHit==false)
        {
            cc.log("ENEMY ATTACK!");
            this.getDamage(other.node.getComponent("enemy").damage);
        }
    },
    getDamage:function(damage){
        this.health-=damage;
        this.onHit=true;
    },
    update (dt) {   //每秒给刚体组件设置线性速度
        this.lv=this.node.getComponent(cc.RigidBody).linearVelocity;
        if(this.moveForward)
        {
            this.lv.y=this.speed;
        }
        else if(this.moveBackward)
        {
            this.lv.y=-this.speed;
        }
        else{
            this.lv.y=0;
        }
        if(this.moveRight)
        {
            this.lv.x=this.speed;
        }
        else if(this.moveLeft)
        {
            this.lv.x=-this.speed;
        }
        else{
            this.lv.x=0;
        }
        this.node.getComponent(cc.RigidBody).linearVelocity=this.lv;
        this.healthBar.scaleX=this.health/100;
        if(this.onHit)
        {
            if(this.hitTime>2)
            {
                this.onHit=false;
                this.hitTime=0;
            }
            else
            {
                this.hitTime+=dt;
            }


        }
    },
});
