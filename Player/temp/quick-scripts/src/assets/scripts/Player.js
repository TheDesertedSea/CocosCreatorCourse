"use strict";
cc._RF.push(module, '35b20x5N4VFKZDPRWjivgW4', 'Player');
// scripts/Player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 100,
    weapons: [cc.Prefab] //存储武器预制体（武器栏）

  },
  onLoad: function onLoad() {
    this.weaponNum = 0;
    this.moveForward = false;
    this.moveBackward = false;
    this.moveRight = false;
    this.moveLeft = false;
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      //w向前，s向后，a向左，d向右，space攻击
      case cc.macro.KEY.a:
        this.moveLeft = true;
        this.moveRight = false;
        break;

      case cc.macro.KEY.d:
        this.moveRight = true;
        this.moveLeft = false;
        break;

      case cc.macro.KEY.w:
        this.moveForward = true;
        this.moveBackward = false;
        break;

      case cc.macro.KEY.s:
        this.moveBackward = true;
        this.moveForward = false;
        break;

      case cc.macro.KEY.space:
        this.attack();
    }
  },
  onKeyUp: function onKeyUp(event) {
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
  attack: function attack() {
    // cc.log("attack");   //调用武器的开火函数
    var weapon = this.node.getChildByName("weapon");
    weapon.getComponent("Weapon").fire();
  },
  changeWeapon: function changeWeapon() //切换武器
  {
    var weapon = this.node.getChildByName("weapon");
    weapon.parent = null;
    weapon.destroy();
    cc.log(this.weaponNum);
    this.weaponNum = (this.weaponNum + 1) % 2; //取2的模以防数组越界

    weapon = cc.instantiate(this.weapons[this.weaponNum]);
    weapon.parent = this.node;
  },
  update: function update(dt) {
    //每秒给刚体组件设置线性速度
    this.lv = this.node.getComponent(cc.RigidBody).linearVelocity;

    if (this.moveForward) {
      this.lv.y = this.speed;
    } else if (this.moveBackward) {
      this.lv.y = -this.speed;
    } else {
      this.lv.y = 0;
    }

    if (this.moveRight) {
      this.lv.x = this.speed;
    } else if (this.moveLeft) {
      this.lv.x = -this.speed;
    } else {
      this.lv.x = 0;
    }

    this.node.getComponent(cc.RigidBody).linearVelocity = this.lv;
  }
});

cc._RF.pop();