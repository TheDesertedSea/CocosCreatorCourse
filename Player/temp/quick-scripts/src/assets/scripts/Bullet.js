"use strict";
cc._RF.push(module, '1531fsKv2FI85gs7mYu9jxQ', 'Bullet');
// scripts/Bullet.js

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
    speed: 250,
    lifeTime: 3
  },
  // LIFE-CYCLE CALLBACKS
  onLoad: function onLoad() {
    this.dir = cc.v2(0, 0);
  },
  setDir: function setDir(dirX, dirY) //设置子弹的方向
  {
    this.dirX = dirX; //（0，0）指向（dirX，dirY）的向量表示方向

    this.dirY = dirY;
  },
  start: function start() {
    this.time = 0;
    this.lv = this.node.getComponent(cc.RigidBody).linearVelocity;
    this.lv.x = this.speed * this.dirX; //根据方向设置子弹速度

    this.lv.y = this.speed * this.dirY;
    this.node.getComponent(cc.RigidBody).linearVelocity = this.lv;
  },
  onBeginContact: function onBeginContact(other, self) {
    //碰撞到物体消失
    this.node.destroy();
  },
  update: function update(dt) {
    this.time += dt;

    if (this.time > this.lifeTime) //超过三秒子弹消失
      {
        this.node.destroy();
      }
  }
});

cc._RF.pop();