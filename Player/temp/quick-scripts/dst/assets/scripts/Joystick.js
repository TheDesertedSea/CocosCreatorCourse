
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Joystick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSm95c3RpY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJSb2NrZXIiLCJ0eXBlIiwiTm9kZSIsIk9yaWdpbiIsIk1heF9yIiwic3RhcnQiLCJ4IiwieSIsImRpciIsInYyIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsImUiLCJ3X3BvcyIsImdldExvY2F0aW9uIiwicG9zIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJsZW4iLCJtYWciLCJzZXRQb3NpdGlvbiIsIlRPVUNIX01PVkUiLCJUT1VDSF9FTkQiLCJUT1VDSF9DQU5DRUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUVSQyxJQUFBQSxNQUFNLEVBQUM7QUFBRztBQUNOQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFETDtBQUVILGlCQUFRO0FBRkwsS0FGQztBQU1SQyxJQUFBQSxNQUFNLEVBQUNQLEVBQUUsQ0FBQ00sSUFORjtBQU1TO0FBQ2pCO0FBQ0FFLElBQUFBLEtBQUssRUFBQztBQVJFLEdBSFA7QUFjTDtBQUVBO0FBRUFDLEVBQUFBLEtBbEJLLG1CQWtCSTtBQUNMLFNBQUtMLE1BQUwsQ0FBWU0sQ0FBWixHQUFnQixDQUFoQjtBQUNBLFNBQUtOLE1BQUwsQ0FBWU8sQ0FBWixHQUFnQixDQUFoQjtBQUNBLFNBQUtDLEdBQUwsR0FBV1osRUFBRSxDQUFDYSxFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBWDtBQUVBLFNBQUtULE1BQUwsQ0FBWVUsRUFBWixDQUFlZCxFQUFFLENBQUNNLElBQUgsQ0FBUVMsU0FBUixDQUFrQkMsV0FBakMsRUFBNkMsVUFBU0MsQ0FBVCxFQUFXO0FB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SCxHQWhFSSxDQWtFTDs7QUFsRUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICBcclxuICAgICAgICBSb2NrZXI6eyAgLy/mkYfmnYbkvZNcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBPcmlnaW46Y2MuTm9kZSwgIC8v6K+l57uT54K55LiN5Y+v6KeB77yM5L+d5a2Y5LqG5pGH5p2G5Yid5aeL5L2N572u77yM55Sx5LqO6Jma5ouf5pGH5p2G6ZyA5ZKM546p5a625LiA6LW35Yqo77yI55u45py66Lef6ZqP5LqG77yJXHJcbiAgICAgICAgLy/vvIzogIxUT1VDSF9TVEFSVOS6i+S7tui/lOWbnueahOWdkOagh+WPiOaYr+Wxj+W5leeahOWdkOagh++8iOW3puS4i+inkuS4uu+8iDDvvIww77yJ77yJ77yM5omA5Lul6ZyA5L+d5a2Y5LiA5Liq5Yid5aeL5Z2Q5qCH77yI5LiA5byA5aeL5bem5LiL6KeS5Li677yIMO+8jDDvvInvvIlcclxuICAgICAgICBNYXhfcjoxMjAsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5Sb2NrZXIueCA9IDA7XHJcbiAgICAgICAgdGhpcy5Sb2NrZXIueSA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXIgPSBjYy52MigwLDApO1xyXG5cclxuICAgICAgICB0aGlzLlJvY2tlci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCxmdW5jdGlvbihlKXsgIC8v57uR5a6a5pGH5p2G6Kem5pG45byA5aeL5LqL5Lu26LCD55So55qE5Ye95pWwXHJcbiAgICAgICAgICAgIHZhciB3X3BvcyA9IGUuZ2V0TG9jYXRpb24oKTsgIC8v6I635Y+W6Kem5pG454K55bGP5bmV54K55Z2Q5qCHXHJcbiAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMuT3JpZ2luLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdfcG9zKTsvL+WwhuinpuaRuOeCueWdkOagh+i9rOaNouS4uuaRh+adhuS4reW/g+S4uuWOn+eCueeahOWdkOagh+ezu+eahOWdkOagh1xyXG5cclxuICAgICAgICAgICAgdmFyIGxlbiA9IHBvcy5tYWcoKTsgIC8v6K6h566X5ZCR6YeP6ZW/5bqmXHJcbiAgICAgICAgICAgIC8v6K6h566X6Kem5pG454K55LiO77yIMO+8jDDvvInov57nur/kuI7vvIgw77yMMO+8ieS4uuWOn+eCueWNleS9jeWchueahOS6pOeCuWRpcu+8jOivpeeCueWdkOagh+ihqOekuuS6huaRh+adhuaWueWQkVxyXG4gICAgICAgICAgICB0aGlzLmRpci54ID0gcG9zLnggLyBsZW47ICBcclxuICAgICAgICAgICAgdGhpcy5kaXIueSA9IHBvcy55IC8gbGVuO1xyXG5cclxuICAgICAgICAgICAgLy/orr7nva7mkYfmnYbkvZPkvY3nva5cclxuICAgICAgICAgICAgaWYobGVuID4gdGhpcy5NYXhfcil7ICAvL+mYsuatouaRh+adhuS9k+i2heWHuui+ueeVjFxyXG4gICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLk1heF9yICogcG9zLnggLyBsZW47ICBcclxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5NYXhfciAqIHBvcy55IC8gbGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuUm9ja2VyLnNldFBvc2l0aW9uKHBvcyk7ICBcclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLlJvY2tlci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLGZ1bmN0aW9uKGUpeyAgLy/nu5HlrprmkYfmnYbop6bmkbjnp7vliqjkuovku7bosIPnlKjnmoTlh73mlbBcclxuICAgICAgICAgICB2YXIgd19wb3MgPSBlLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMuT3JpZ2luLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdfcG9zKTtcclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBsZW4gPSBwb3MubWFnKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyLnggPSBwb3MueCAvIGxlbjtcclxuICAgICAgICAgICAgdGhpcy5kaXIueSA9IHBvcy55IC8gbGVuO1xyXG4gICAgICAgICAgICBpZihsZW4gPiB0aGlzLk1heF9yKXtcclxuICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5NYXhfciAqIHBvcy54IC8gbGVuO1xyXG4gICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLk1heF9yICogcG9zLnkgLyBsZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5Sb2NrZXIuc2V0UG9zaXRpb24ocG9zKTsgIFxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuUm9ja2VyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxmdW5jdGlvbihlKXsgIC8v5pGH5p2G5L2T6Kem5pG457uT5p2fXHJcbiAgICAgICAgICAgdGhpcy5Sb2NrZXIuc2V0UG9zaXRpb24oY2MudjIoMCwwKSk7ICAvL+aRh+adhuS9k+W9kuS9jVxyXG4gXHRcdCAgIHRoaXMuZGlyID0gY2MudjIoMCwgMCk7ICAvL+aRh+adhuaWueWQkeW9kuS9jVxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuUm9ja2VyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCxmdW5jdGlvbihlKXsgLy/mkYfmnYbkvZPop6bmkbjlj5bmtohcclxuICAgICAgICAgICAgdGhpcy5Sb2NrZXIuc2V0UG9zaXRpb24oY2MudjIoMCwwKSk7XHJcbiBcdFx0XHR0aGlzLmRpciA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgIH0sdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19