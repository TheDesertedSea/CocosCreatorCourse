// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 100,
        weaponPack: cc.Node,//武器栏
        health: 100,
        healthBar: cc.Node,
        stateUI: cc.Node,
        fireSound: {
            type:cc.AudioClip, // use 'type:' to declare Texture2D object directly
            default: null,     // object's default value is null
        },
    },

    onLoad() {
        this.damageAddTime = 0;
        this.damageAdd = 0;
        this.weaponNums = 1;
        this.moveForward = false;
        this.moveBackward = false;
        this.moveRight = false;
        this.moveLeft = false;
        this.onHit = false;
        this.hitTime = 0;
        this.itemAround = null;
        this.bUseItem = false;
        this.weaponAround = null;
        this.bGetWeapon = false;
        this.animation = this.node.getChildByName("body").getComponent(cc.Animation);
        this.animationState = "player_forward";
        this.lastAnimationState = "player_forward";
        this.animation.play(this.animationState);

        if (this.animation) {
            cc.log("has animation");
        }

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onDestroy() {
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
     start()
     {
        this.weaponScript=this.node.getChildByName("weapon").getComponent("Weapon");
     },
    act: function () {

        cc.log(this.bUseItem);
        // cc.log("attack");   //调用武器的开火函数
        cc.log(this.bGetWeapon);
        if (this.bUseItem) {
            cc.log(this.itemAround.name);
            cc.log("has item!");
            if (this.itemAround) {
                cc.log("yes");
            }
            this.itemAround.getComponent("Potion").use();
            //cc.log(this.health);
            this.bUseItem = false;
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
        }
        else {
            cc.audioEngine.play(this.fireSound,true,0.25);
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

        label.string = "ATK:" + (this.node.getChildByName("weapon").getComponent("Weapon").damage + this.damageAdd).toString();
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
