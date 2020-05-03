
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQnVsbGV0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BlZWQiLCJsaWZlVGltZSIsIm9uTG9hZCIsImRpciIsInYyIiwic2V0RGlyIiwiZGlyWCIsImRpclkiLCJzdGFydCIsInRpbWUiLCJsdiIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJsaW5lYXJWZWxvY2l0eSIsIngiLCJ5Iiwib25CZWdpbkNvbnRhY3QiLCJvdGhlciIsInNlbGYiLCJkZXN0cm95IiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUMsR0FERTtBQUVSQyxJQUFBQSxRQUFRLEVBQUM7QUFGRCxHQUhQO0FBUUw7QUFDQUMsRUFBQUEsTUFUSyxvQkFTRztBQUNKLFNBQUtDLEdBQUwsR0FBU1AsRUFBRSxDQUFDUSxFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBVDtBQUNILEdBWEk7QUFZTEMsRUFBQUEsTUFaSyxrQkFZRUMsSUFaRixFQVlPQyxJQVpQLEVBWVk7QUFDakI7QUFDSSxTQUFLRCxJQUFMLEdBQVVBLElBQVYsQ0FESixDQUNxQjs7QUFDakIsU0FBS0MsSUFBTCxHQUFVQSxJQUFWO0FBQ0gsR0FoQkk7QUFpQkxDLEVBQUFBLEtBakJLLG1CQWlCSTtBQUNMLFNBQUtDLElBQUwsR0FBVSxDQUFWO0FBQ0EsU0FBS0MsRUFBTCxHQUFRLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QmhCLEVBQUUsQ0FBQ2lCLFNBQTFCLEVBQXFDQyxjQUE3QztBQUNBLFNBQUtKLEVBQUwsQ0FBUUssQ0FBUixHQUFVLEtBQUtmLEtBQUwsR0FBVyxLQUFLTSxJQUExQixDQUhLLENBRzZCOztBQUNsQyxTQUFLSSxFQUFMLENBQVFNLENBQVIsR0FBVSxLQUFLaEIsS0FBTCxHQUFXLEtBQUtPLElBQTFCO0FBQ0EsU0FBS0ksSUFBTCxDQUFVQyxZQUFWLENBQXVCaEIsRUFBRSxDQUFDaUIsU0FBMUIsRUFBcUNDLGNBQXJDLEdBQW9ELEtBQUtKLEVBQXpEO0FBQ0gsR0F2Qkk7QUF5QkxPLEVBQUFBLGNBQWMsRUFBQyx3QkFBU0MsS0FBVCxFQUFlQyxJQUFmLEVBQW9CO0FBQUc7QUFDbEMsU0FBS1IsSUFBTCxDQUFVUyxPQUFWO0FBQ0gsR0EzQkk7QUE0QkxDLEVBQUFBLE1BNUJLLGtCQTRCR0MsRUE1QkgsRUE0Qk87QUFHUixTQUFLYixJQUFMLElBQVdhLEVBQVg7O0FBQ0EsUUFBRyxLQUFLYixJQUFMLEdBQVUsS0FBS1IsUUFBbEIsRUFBNkI7QUFDN0I7QUFDSSxhQUFLVSxJQUFMLENBQVVTLE9BQVY7QUFDSDtBQUNKO0FBcENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzcGVlZDoyNTAsICBcclxuICAgICAgICBsaWZlVGltZTozLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLU1xyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5kaXI9Y2MudjIoMCwwKTtcclxuICAgIH0sXHJcbiAgICBzZXREaXIoZGlyWCxkaXJZKS8v6K6+572u5a2Q5by555qE5pa55ZCRXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kaXJYPWRpclg7ICAvL++8iDDvvIww77yJ5oyH5ZCR77yIZGlyWO+8jGRpclnvvInnmoTlkJHph4/ooajnpLrmlrnlkJFcclxuICAgICAgICB0aGlzLmRpclk9ZGlyWTtcclxuICAgIH0sXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lPTA7IFxyXG4gICAgICAgIHRoaXMubHY9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5OyAgXHJcbiAgICAgICAgdGhpcy5sdi54PXRoaXMuc3BlZWQqdGhpcy5kaXJYOyAgIC8v5qC55o2u5pa55ZCR6K6+572u5a2Q5by56YCf5bqmXHJcbiAgICAgICAgdGhpcy5sdi55PXRoaXMuc3BlZWQqdGhpcy5kaXJZO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eT10aGlzLmx2O1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdDpmdW5jdGlvbihvdGhlcixzZWxmKXsgIC8v56Kw5pKe5Yiw54mp5L2T5raI5aSxXHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnRpbWUrPWR0O1xyXG4gICAgICAgIGlmKHRoaXMudGltZT50aGlzLmxpZmVUaW1lKSAgLy/otoXov4fkuInnp5LlrZDlvLnmtojlpLFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==