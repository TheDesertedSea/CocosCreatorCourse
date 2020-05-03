"use strict";
cc._RF.push(module, '9a029o37dVCxoyoUNQriSqd', 'Joystick');
// scripts/Joystick.js

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
    Rocker: {
      //摇杆体
      type: cc.Node,
      "default": null
    },
    Origin: cc.Node,
    //该结点不可见，保存了摇杆初始位置，由于虚拟摇杆需和玩家一起动（相机跟随了）
    //，而TOUCH_START事件返回的坐标又是屏幕的坐标（左下角为（0，0）），所以需保存一个初始坐标（一开始左下角为（0，0））
    Max_r: 120
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.Rocker.x = 0;
    this.Rocker.y = 0;
    this.dir = cc.v2(0, 0);
    this.Rocker.on(cc.Node.EventType.TOUCH_START, function (e) {
      //绑定摇杆触摸开始事件调用的函数
      var w_pos = e.getLocation(); //获取触摸点屏幕点坐标

      var pos = this.Origin.convertToNodeSpaceAR(w_pos); //将触摸点坐标转换为摇杆中心为原点的坐标系的坐标

      var len = pos.mag(); //计算向量长度
      //计算触摸点与（0，0）连线与（0，0）为原点单位圆的交点dir，该点坐标表示了摇杆方向

      this.dir.x = pos.x / len;
      this.dir.y = pos.y / len; //设置摇杆体位置

      if (len > this.Max_r) {
        //防止摇杆体超出边界
        pos.x = this.Max_r * pos.x / len;
        pos.y = this.Max_r * pos.y / len;
      }

      this.Rocker.setPosition(pos);
    }, this);
    this.Rocker.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
      //绑定摇杆触摸移动事件调用的函数
      var w_pos = e.getLocation();
      var pos = this.Origin.convertToNodeSpaceAR(w_pos);
      var len = pos.mag();
      this.dir.x = pos.x / len;
      this.dir.y = pos.y / len;

      if (len > this.Max_r) {
        pos.x = this.Max_r * pos.x / len;
        pos.y = this.Max_r * pos.y / len;
      }

      this.Rocker.setPosition(pos);
    }, this);
    this.Rocker.on(cc.Node.EventType.TOUCH_END, function (e) {
      //摇杆体触摸结束
      this.Rocker.setPosition(cc.v2(0, 0)); //摇杆体归位

      this.dir = cc.v2(0, 0); //摇杆方向归位
    }, this);
    this.Rocker.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
      //摇杆体触摸取消
      this.Rocker.setPosition(cc.v2(0, 0));
      this.dir = cc.v2(0, 0);
    }, this);
  } // update (dt) {},

});

cc._RF.pop();