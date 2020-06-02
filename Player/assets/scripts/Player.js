
cc.Class({
    extends: cc.Component,

    properties: {
        speed: 100,  //速度
        weaponPack: cc.Node,//武器栏
        health: 100,  //生命值
        healthBar: cc.Node,  //血条显示条
        stateUI: cc.Node,  //状态显示栏
        fireSound: {   //开火音乐
            type:cc.AudioClip, 
            default: null,    
        },
    },

    onLoad() {

        this.damageAddTime = 0;   //伤害增加效果时间
        this.damageAdd = 0;  //伤害增加效果值
        this.weaponNums = 1;  //所持武器数目
        this.moveForward = false;   //向前移动状态
        this.moveBackward = false;  //向后移动状态
        this.moveRight = false;  //向右移动状态
        this.moveLeft = false;  //向左移动状态
        this.onHit = false;   //是否被攻击
        this.hitTime = 0;   //上次被攻击距今时间间隔
        this.itemAround = null;   //在附近的物品节点
        this.bUseItem = false;  //是否能够使用物品（是否有物品在附近）
        this.weaponAround = null;  //在附近的武器
        this.bGetWeapon = false;   //是否有能够拣取的武器
        this.animation = this.node.getChildByName("body").getComponent(cc.Animation);  //人物身体动画
        this.animationState = "player_forward";   //目前播放状态（播放的是朝哪个方向的动画）
        this.lastAnimationState = "player_forward";   //上一次动画播放状态
        this.animation.play(this.animationState);   //初始播放动画（向前）
        this.audioId=0;   //上次播放的音频的id号
        
        /*if (this.animation) {  
            cc.log("has animation");
        }*/

        //绑定按键事件触发函数
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);  
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);   
    },

    start(){
        this.ATK=(this.node.getChildByName("weapon").getComponent("Weapon").damage + this.damageAdd).toString();  //ATK值
        this.weaponScript=this.node.getChildByName("weapon").getComponent("Weapon");  //目前使用中的武器脚本组件
    },
    onDestroy() {
        //取消绑定按键事件触发函数
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },
    onKeyDown: function (event) {
        this.lastAnimationState = this.animationState;
        switch (event.keyCode) {  //w向前，s向后，a向左，d向右，space攻击
            case cc.macro.KEY.a:
                this.moveLeft = true;
                this.moveRight = false;
                this.animationState = "player_left";
                break;
            case cc.macro.KEY.d:
                this.moveRight = true;
                this.moveLeft = false;
                this.animationState = "player_right";
                break;
            case cc.macro.KEY.w:
                this.moveForward = true;
                this.moveBackward = false;
                this.animationState = "player_backward";
                break;
            case cc.macro.KEY.s:
                this.moveBackward = true;
                this.moveForward = false;
                this.animationState = "player_forward";
                break;
            case cc.macro.KEY.space:
                this.act();
        }
        if (this.animationState != this.lastAnimationState)
            this.animation.play(this.animationState);
    },

    onKeyUp: function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.moveLeft = false;
                break;
            case cc.macro.KEY.d:
                this.moveRight = false;
                break;
            case cc.macro.KEY.w:
                this.moveForward = false;
                break;
            case cc.macro.KEY.s:
                this.moveBackward = false;
        }
    },

    /* attack:function()
     {
         cc.log("attack");
         var weapon=this.node.getChildByName("weapon");
         cc.tween(weapon).to(0.2,{rotation:90}).to(0.4,{rotation:30}).start();
     },
     */

    act: function () {

        //cc.log(this.bUseItem);
        // cc.log("attack");   //调用武器的开火函数
        //cc.log(this.bGetWeapon);
        if (this.bUseItem) {
            //cc.log(this.itemAround.name);
            //cc.log("has item!");
            //if (this.itemAround) {
            //    cc.log("yes");
            //}
            this.itemAround.getComponent("Potion").use();
            //cc.log(this.health);
            this.bUseItem = false;
            this.ATK=(this.node.getChildByName("weapon").getComponent("Weapon").damage + this.damageAdd).toString();
        }
        else if (this.bGetWeapon) {

            if (this.weaponNums == 1) {
                this.weaponNums += 1;
                var weapon = this.node.getChildByName("weapon");


                weapon.parent = null;
                weapon.getComponent("Weapon").enabled = false;
                weapon.parent = this.weaponPack;


                this.weaponAround.parent = this.node;
                //this.weaponAround.group="player";
                this.weaponAround.getComponent("Weapon").enabled = true;
                this.weaponAround.getComponent("Weapon").weaponInit();
                cc.log(this.weaponAround.parent.name);
                this.weaponAround.x = weapon.x;
                this.weaponAround.y = weapon.y;
                this.weaponAround.angle = weapon.angle;
                cc.log(this.weaponAround.position.x);
                cc.log(this.weaponAround.position.y);

                weapon.position.x = 4.024;
                weapon.position.y = -2.013;
                weapon.angle = -90;

                this.weaponAround.zIndex = 1;  //zIndex为叠放次序
                this.weaponAround.getComponent("WeaponGetDetector").enabled = false;
                this.bGetWeapon = false;
            }
            else {
                //cc.log("yes");
                var weapon = this.node.getChildByName("weapon");

                weapon.parent = this.node.parent;
                weapon.getComponent("Weapon").enabled = false;

                let px=weapon.x;
                let py=weapon.y;

                weapon.x = this.weaponAround.x;
                weapon.y = this.weaponAround.y;
                this.weaponAround.parent = this.node;
                //this.weaponAround.group="player";
                this.weaponAround.getComponent("Weapon").weaponInit();
                this.weaponAround.x = px;
                this.weaponAround.y = py;
                this.weaponAround.angle = weapon.angle;
                this.weaponAround.getComponent("Weapon").enabled = true;
                this.weaponAround.zIndex = 1;  //zIndex为叠放次序
                this.weaponAround.getComponent("WeaponGetDetector").enabled = false;

             
                weapon.angle = -90;
                weapon.getComponent("WeaponGetDetector").enabled = true;
            }
            this.ATK=(this.node.getChildByName("weapon").getComponent("Weapon").damage + this.damageAdd).toString();
        }
        else {
            if(cc.audioEngine.getState(this.audioId)!=cc.audioEngine.AudioState.PLAYING)
            {
                this.audioId=cc.audioEngine.play(this.fireSound,false,0.1);
            }
            var weapon = this.node.getChildByName("weapon");
            weapon.getComponent("Weapon").fire();
        }

    },
    changeWeapon: function ()  //切换武器
    {
        if (this.weaponNums == 1) {
            return;
        }
        var weapon = this.node.getChildByName("weapon");

        weapon.parent = null;
        weapon.getComponent("Weapon").enabled = false;
        var weapon2 = this.weaponPack.getChildByName("weapon");

        weapon2.parent = this.node;
        weapon2.getComponent("Weapon").enabled = true;
        weapon2.getComponent("Weapon").weaponInit();
        weapon2.position.x = weapon.x;
        weapon2.position.y = weapon.y;
        weapon2.angle = weapon.angle;

        weapon2.zIndex = 1; //zIndex为叠放次序
        cc.log(cc.macro.MIN_ZINDEX);
        weapon.parent = this.weaponPack;
        weapon.position.x = 4.024;
        weapon.position.y = -2.013;
        weapon.angle = -90;
        this.ATK=(this.node.getChildByName("weapon").getComponent("Weapon").damage + this.damageAdd).toString();
    },
    onBeginContact: function (info, self, other) {
        cc.log("CONTACT!");
        cc.log(other.node.group);
        if (other.node.group == "enemy" && this.onHit == false) {
            cc.log("ENEMY ATTACK!");
            this.getDamage(other.node.getComponent("enemy").damage);
        }
    },
    getDamage: function (damage) {
        this.health -= damage;
        this.onHit = true;
    },
    update(dt) {   //每秒给刚体组件设置线性速度
        //cc.log(this.bGetWeapon);

        this.lv = this.node.getComponent(cc.RigidBody).linearVelocity;
        if (this.moveRight) {
            this.lv.x = this.speed;
        }
        else if (this.moveLeft) {
            this.lv.x = -this.speed;
        }
        else {
            this.lv.x = 0;
        }
        if (this.health <= 0) {
            cc.director.loadScene("GameOver");
        }

        if (this.moveForward) {
            this.lv.y = this.speed;

        }
        else if (this.moveBackward) {
            this.lv.y = -this.speed;

        }
        else {
            this.lv.y = 0;
        }



        this.node.getComponent(cc.RigidBody).linearVelocity = this.lv;
        this.healthBar.scaleX = this.health / 100;
        //cc.log(this.stateUI.getChildByName("ATK").string);
        //var stateUI=cc.find("Canvas/Player/UI/State/ATK");
        var ATK = this.stateUI.getChildByName("ATK");
        var label = ATK.getComponent(cc.Label);

        label.string = "ATK:" + this.ATK;
        //cc.log(this.node.getChildByName("weapon").getComponent("Weapon").damage);
        if (this.onHit) {
            if (this.hitTime > 2) {
                this.onHit = false;
                this.hitTime = 0;
            }
            else {
                this.hitTime += dt;
            }


        }
        if (this.damageAddTime > 0) {
            this.damageAddTime -= dt;
        }
        else {

            this.damageAdd = 0;
        }


    },
});
