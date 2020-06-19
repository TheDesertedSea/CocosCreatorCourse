"use strict";
cc._RF.push(module, 'cd8b7NeGnZOf4vIFVmpAwPg', 'maliao');
// script/maliao.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var Input = {};
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this._speed = 200;
    this.speedState = cc.v2(0, 0); //移动方向状态
    //this.state = '';//初始移动状态
    //this.mlaAni = this.getComponent(cc.Animation);//获取动画组件

    cc.systemEvent.on('keydown', this.onKeydown, this);
    cc.systemEvent.on('keyup', this.onKeyup, this);
  },
  //更改移动状态

  /* satState(state) {
      if (this.state == state) return;
        this.state = state;
      this.mlaAni.play(this,state);
  },
  */
  onKeydown: function onKeydown(e) {
    Input[e.keyCode] = 1;
  },
  onKeyup: function onKeyup(e) {
    Input[e.keyCode] = 0;
  },
  //start () {},
  update: function update(dt) {
    if (Input[cc.macro.KEY.a] || Input[cc.macro.KEY.left]) {
      //设定向左移动方向
      this.speedState.x = -1;
    } else if (Input[cc.macro.KEY.d] || Input[cc.macro.KEY.right]) {
      //设定向右移动方向
      this.speedState.x = 1;
    } else {
      this.speedState.x = 0;
    }

    if (Input[cc.macro.KEY.w] || Input[cc.macro.KEY.up]) {
      //设定向上移动方向
      this.speedState.y = 1;
    } else if (Input[cc.macro.KEY.s] || Input[cc.macro.KEY.down]) {
      //设定向下移动方向
      this.speedState.y = -1;
    } else {
      this.speedState.y = 0;
    } //通过物理引擎的方式来控制人物移动


    this.lv = this.node.getComponent(cc.RigidBody).linearVelocity; //获取当前速度

    if (this.speedState.x) {
      this.lv.y = 0;
      this.lv.x = this.speedState.x * this._speed; //this.node.x += this.speedState.x * this._speed * dt;
    } else if (this.speedState.y) {
      this.lv.x = 0;
      this.lv.y = this.speedState.y * this._speed; //this.node.y += this.speedState.y * this._speed * dt;
    } else {
      this.lv.x = this.lv.y = 0;
    } //更新速度


    this.node.getComponent(cc.RigidBody).linearVelocity = this.lv; //移动动画的部分，需要提前设定移动动画组件，但样例中的移动方向只有4个
    //与我们目标不符合，可能需要修改代码

    /* let state = '';
      if (this.sp.x == 1) {
        state = 'hero_right';
    } else if (this.sp.x == -1) {
        state = 'hero_left';
    } else if (this.sp.y == 1) {
        state = 'hero_up';
    } else if (this.sp.y == -1) {
        state = 'hero_down';
    }
      if (state) {
        this.setState(state);
    }     */
  }
});

cc._RF.pop();