
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Bullet');
require('./assets/scripts/Game');
require('./assets/scripts/Joystick');
require('./assets/scripts/Player');
require('./assets/scripts/Weapon');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30c8f4EPm5A57Zpgsys2kgq', 'Game');
// scripts/Game.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var p = cc.director.getPhysicsManager(); //开启物理系统

    p.enabled = true;
    p.debugDrawFlags = true;
    p.gravity = cc.v2(0, 0);
    var manager = cc.director.getCollisionManager();
    manager.enabled = true; //开启碰撞检测

    manager.enabledDebugDraw = true; //显示碰撞检测区域
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsInAiLCJkaXJlY3RvciIsImdldFBoeXNpY3NNYW5hZ2VyIiwiZW5hYmxlZCIsImRlYnVnRHJhd0ZsYWdzIiwiZ3Jhdml0eSIsInYyIiwibWFuYWdlciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkRGVidWdEcmF3Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZRLEdBSFA7QUFxQkw7QUFFQUMsRUFBQUEsTUF2Qkssb0JBdUJLO0FBQ04sUUFBSUMsQ0FBQyxHQUFDTCxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsaUJBQVosRUFBTixDQURNLENBQ2tDOztBQUN4Q0YsSUFBQUEsQ0FBQyxDQUFDRyxPQUFGLEdBQVUsSUFBVjtBQUNBSCxJQUFBQSxDQUFDLENBQUNJLGNBQUYsR0FBaUIsSUFBakI7QUFDQUosSUFBQUEsQ0FBQyxDQUFDSyxPQUFGLEdBQVVWLEVBQUUsQ0FBQ1csRUFBSCxDQUFNLENBQU4sRUFBUSxDQUFSLENBQVY7QUFDQSxRQUFJQyxPQUFPLEdBQUNaLEVBQUUsQ0FBQ00sUUFBSCxDQUFZTyxtQkFBWixFQUFaO0FBQ0FELElBQUFBLE9BQU8sQ0FBQ0osT0FBUixHQUFnQixJQUFoQixDQU5NLENBTWtCOztBQUN4QkksSUFBQUEsT0FBTyxDQUFDRSxnQkFBUixHQUF5QixJQUF6QixDQVBNLENBT3lCO0FBQ2xDLEdBL0JJO0FBaUNMQyxFQUFBQSxLQWpDSyxtQkFpQ0ksQ0FFUixDQW5DSSxDQXFDTDs7QUFyQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGxldCBwPWNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7ICAvL+W8gOWQr+eJqeeQhuezu+e7n1xyXG4gICAgICAgIHAuZW5hYmxlZD10cnVlO1xyXG4gICAgICAgIHAuZGVidWdEcmF3RmxhZ3M9dHJ1ZTtcclxuICAgICAgICBwLmdyYXZpdHk9Y2MudjIoMCwwKTtcclxuICAgICAgICB2YXIgbWFuYWdlcj1jYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkPXRydWU7ICAgLy/lvIDlkK/norDmkp7mo4DmtYtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXc9dHJ1ZTsgLy/mmL7npLrnorDmkp7mo4DmtYvljLrln59cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BlZWQiLCJ3ZWFwb25zIiwiUHJlZmFiIiwib25Mb2FkIiwid2VhcG9uTnVtIiwibW92ZUZvcndhcmQiLCJtb3ZlQmFja3dhcmQiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiS0VZX1VQIiwib25LZXlVcCIsIm9uRGVzdHJveSIsIm9mZiIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImQiLCJ3IiwicyIsInNwYWNlIiwiYXR0YWNrIiwid2VhcG9uIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiZmlyZSIsImNoYW5nZVdlYXBvbiIsInBhcmVudCIsImRlc3Ryb3kiLCJsb2ciLCJpbnN0YW50aWF0ZSIsInVwZGF0ZSIsImR0IiwibHYiLCJSaWdpZEJvZHkiLCJsaW5lYXJWZWxvY2l0eSIsInkiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFDLEdBREU7QUFFUkMsSUFBQUEsT0FBTyxFQUFDLENBQUNMLEVBQUUsQ0FBQ00sTUFBSixDQUZBLENBRWM7O0FBRmQsR0FIUDtBQVFMQyxFQUFBQSxNQVJLLG9CQVFHO0FBQ0osU0FBS0MsU0FBTCxHQUFlLENBQWY7QUFDQSxTQUFLQyxXQUFMLEdBQWlCLEtBQWpCO0FBQ0EsU0FBS0MsWUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUtDLFNBQUwsR0FBZSxLQUFmO0FBQ0Es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UixHQUFVLENBQVY7QUFDSDs7QUFDRCxTQUFLZixJQUFMLENBQVVFLFlBQVYsQ0FBdUJwQyxFQUFFLENBQUM4QyxTQUExQixFQUFxQ0MsY0FBckMsR0FBb0QsS0FBS0YsRUFBekQ7QUFDSDtBQW5ISSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc3BlZWQ6MTAwLFxyXG4gICAgICAgIHdlYXBvbnM6W2NjLlByZWZhYl0sICAvL+WtmOWCqOatpuWZqOmihOWItuS9k++8iOatpuWZqOagj++8iVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLndlYXBvbk51bT0wO1xyXG4gICAgICAgIHRoaXMubW92ZUZvcndhcmQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb3ZlQmFja3dhcmQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb3ZlUmlnaHQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb3ZlTGVmdD1mYWxzZTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCx0aGlzLm9uS2V5VXAsdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy5vbktleURvd24sdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsdGhpcy5vbktleVVwLHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uS2V5RG93bjpmdW5jdGlvbihldmVudCkgIFxyXG4gICAge1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSAgXHJcbiAgICAgICAgeyAgLy935ZCR5YmN77yMc+WQkeWQju+8jGHlkJHlt6bvvIxk5ZCR5Y+z77yMc3BhY2XmlLvlh7tcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUxlZnQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVJpZ2h0PWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVSaWdodD10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlTGVmdD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRm9yd2FyZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFja3dhcmQ9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhY2t3YXJkPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGb3J3YXJkPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOiAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25LZXlVcDpmdW5jdGlvbihldmVudClcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVMZWZ0PWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVSaWdodD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRm9yd2FyZD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFja3dhcmQ9ZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgIC8qIGF0dGFjazpmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgY2MubG9nKFwiYXR0YWNrXCIpO1xyXG4gICAgICAgIHZhciB3ZWFwb249dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwid2VhcG9uXCIpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHdlYXBvbikudG8oMC4yLHtyb3RhdGlvbjo5MH0pLnRvKDAuNCx7cm90YXRpb246MzB9KS5zdGFydCgpO1xyXG4gICAgfSxcclxuICAgICovXHJcblxyXG4gICAgYXR0YWNrOmZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgIC8vIGNjLmxvZyhcImF0dGFja1wiKTsgICAvL+iwg+eUqOatpuWZqOeahOW8gOeBq+WHveaVsFxyXG4gICAgICAgIHZhciB3ZWFwb249dGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwid2VhcG9uXCIpO1xyXG4gICAgICAgIHdlYXBvbi5nZXRDb21wb25lbnQoXCJXZWFwb25cIikuZmlyZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjaGFuZ2VXZWFwb246ZnVuY3Rpb24oKSAgLy/liIfmjaLmrablmahcclxuICAgIHtcclxuICAgICAgICB2YXIgd2VhcG9uPXRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndlYXBvblwiKTtcclxuICAgICAgICB3ZWFwb24ucGFyZW50PW51bGw7XHJcbiAgICAgICAgd2VhcG9uLmRlc3Ryb3koKTtcclxuICAgICAgICBjYy5sb2codGhpcy53ZWFwb25OdW0pO1xyXG4gICAgICAgIHRoaXMud2VhcG9uTnVtPSh0aGlzLndlYXBvbk51bSsxKSUyOyAgLy/lj5Yy55qE5qih5Lul6Ziy5pWw57uE6LaK55WMXHJcbiAgICAgICAgd2VhcG9uPWNjLmluc3RhbnRpYXRlKHRoaXMud2VhcG9uc1t0aGlzLndlYXBvbk51bV0pO1xyXG4gICAgICAgIHdlYXBvbi5wYXJlbnQ9dGhpcy5ub2RlO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZSAoZHQpIHsgICAvL+avj+enkue7meWImuS9k+e7hOS7tuiuvue9rue6v+aAp+mAn+W6plxyXG4gICAgICAgIHRoaXMubHY9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgIGlmKHRoaXMubW92ZUZvcndhcmQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmx2Lnk9dGhpcy5zcGVlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLm1vdmVCYWNrd2FyZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubHYueT0tdGhpcy5zcGVlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5sdi55PTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMubW92ZVJpZ2h0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5sdi54PXRoaXMuc3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5tb3ZlTGVmdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubHYueD0tdGhpcy5zcGVlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5sdi54PTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eT10aGlzLmx2O1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Weapon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac6c561KtpGZIXo2O0XRIQY', 'Weapon');
// scripts/Weapon.js

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
    bullet: {
      "default": null,
      //发射的子弹预制体
      type: cc.Prefab
    },
    Rocker: {
      type: cc.node,
      //绑定虚拟摇杆结点以获取摇杆信息
      "default": null
    },
    type: 0
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.name = "weapon"; //将结点名称设置为“weapon”(Player脚本需要)

    this.Rocker = this.node.parent.getChildByName("Joystick");
    this.RockerScript = this.Rocker.getComponent("Joystick"); //获取“Joystick”脚本为RockerScript
  },
  fire: function fire() {
    //开火
    if (this.type == 0) //type==0为远程武器。发射子弹
      {
        //cc.log("fire!");
        var scene = cc.director.getScene();
        var bullet = cc.instantiate(this.bullet); //实例化预制体

        bullet.parent = this.node;
        var position = this.node.convertToWorldSpaceAR(cc.v2(0, 50)); //cc.log(position.x,position.y);

        bullet.parent = scene;
        bullet.setPosition(position.x, position.y); //设置子弹的生成位置

        bullet.angle = this.node.angle; //设置子弹的角度

        bullet.getComponent("Bullet").setDir(this.dirX, this.dirY);
      } else {//近战攻击待实现
    }
  },
  start: function start() {},
  update: function update(dt) {
    if (this.RockerScript.dir.mag() < 0.5) {
      return;
    }

    var r = Math.atan2(this.RockerScript.dir.y, this.RockerScript.dir.x); //从RockerScript中获取摇杆角度信息

    var degree = r * 180 / Math.PI; //计算角度

    degree = degree - 90; //设置角度

    this.node.angle = degree;
    this.dirX = this.RockerScript.dir.x; //存储获得到的摇杆角度信息

    this.dirY = this.RockerScript.dir.y;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcV2VhcG9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYnVsbGV0IiwidHlwZSIsIlByZWZhYiIsIlJvY2tlciIsIm5vZGUiLCJvbkxvYWQiLCJuYW1lIiwicGFyZW50IiwiZ2V0Q2hpbGRCeU5hbWUiLCJSb2NrZXJTY3JpcHQiLCJnZXRDb21wb25lbnQiLCJmaXJlIiwic2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiaW5zdGFudGlhdGUiLCJwb3NpdGlvbiIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsInYyIiwic2V0UG9zaXRpb24iLCJ4IiwieSIsImFuZ2xlIiwic2V0RGlyIiwiZGlyWCIsImRpclkiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwiZGlyIiwibWFnIiwiciIsIk1hdGgiLCJhdGFuMiIsImRlZ3JlZSIsIlBJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUNOO0FBQ0ksaUJBQVEsSUFEWjtBQUNtQjtBQUNmQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGYixLQUZRO0FBTVJDLElBQUFBLE1BQU0sRUFBQztBQUNIRixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ1EsSUFETDtBQUNhO0FBQ2hCLGlCQUFRO0FBRkwsS0FOQztBQVVSSCxJQUFBQSxJQUFJLEVBQUM7QUFWRyxHQUhQO0FBZ0JMO0FBRUFJLEVBQUFBLE1BbEJLLG9CQWtCSztBQUNOLFNBQUtELElBQUwsQ0FBVUUsSUFBVixHQUFlLFFBQWYsQ0FETSxDQUNxQjs7QUFDM0IsU0FBS0gsTUFBTCxHQUFZLEtBQUtDLElBQUwsQ0FBVUcsTUFBVixDQUFpQkMsY0FBakIsQ0FBZ0MsVUFBaEMsQ0FBWjtBQUNBLFNBQUtDLFlBQUwsR0FBa0IsS0FBS04sTUFBTCxDQUFZTyxZQUFaLENBQXlCLFVBQXpCLENBQWxCLENBSE0sQ0FHbUQ7QUFDNUQsR0F0Qkk7QUF1QkxDLEVBQUFBLElBQUksRUFBQyxnQkFBVTtBQUFHO0FBQ2QsUUFBRyxLQUFLVixJQUFMLElBQVcsQ0FBZCxFQUFrQjtBQUNsQjtBQUFDO0FBQ0QsWUFBSVcsS0FBSyxHQUFHaEIsRUFBRSxDQUFDaUIsUUFBSCxDQUFZQyxRQUFaLEVBQVo7QUFDQSxZQUFJZCxNQUFNLEdBQUNKLEVBQUUsQ0FBQ21CLFdBQUgsQ0FBZSxLQUFLZixNQUFwQixDQUFYLENBRkEsQ0FFeUM7O0FBQ3pDQSxRQUFBQSxNQUFNLENBQUNPLE1BQVAsR0FBYyxLQUFLSCxJQUFuQjtBQUNBLFlBQUlZLFFBQVEsR0FBQyxLQUFLWixJQUFMLENBQVVhLHFCQUFWLENBQWdDckIsRUFBRSxDQUFDc0IsRUFBSCxDQUFNLENBQU4sRUFBUSxFQUFSLENBQWhDLENBQWIsQ0FKQSxDQUtBOztBQUNBbEIsUUFBQUEsTUFBTSxDQUFDTyxNQUFQLEdBQWNLLEtBQWQ7QUFDQVosUUFBQUEsTUFBTSxDQUFDbUIsV0FBUCxDQUFtQkgsUUFBUSxDQUFDSSxDQUE1QixFQUE4QkosUUFBUSxDQUFDSyxDQUF2QyxFQVBBLENBTzRDOztBQUM1Q3JCLFFBQUFBLE1BQU0sQ0FBQ3NCLEtBQVAsR0FBYSxLQUFLbEIsSUFBTCxDQUFVa0IsS0FBdkIsQ0FSQSxDQVErQjs7QUFDL0J0QixRQUFBQSxNQUFNLENBQUNVLFlBQVAsQ0FBb0IsUUFBcEIsRUFBOEJhLE1BQTlCLENBQXFDLEtBQUtDLElBQTFDLEVBQStDLEtBQUtDLElBQXBEO0FBQ0gsT0FYRyxNQVlBLENBQUM7QUFFSjtBQUVBLEdBeENJO0FBMENMQyxFQUFBQSxLQTFDSyxtQkEwQ0ksQ0FFUixDQTVDSTtBQThDTEMsRUFBQUEsTUE5Q0ssa0JBOENHQyxFQTlDSCxFQThDTztBQUVSLFFBQUcsS0FBS25CLFlBQUwsQ0FBa0JvQixHQUFsQixDQUFzQkMsR0FBdEIsS0FBNEIsR0FBL0IsRUFBbUM7QUFDL0I7QUFDSDs7QUFDRCxRQUFJQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUt4QixZQUFMLENBQWtCb0IsR0FBbEIsQ0FBc0JSLENBQWpDLEVBQW1DLEtBQUtaLFlBQUwsQ0FBa0JvQixHQUFsQixDQUFzQlQsQ0FBekQsQ0FBUixDQUxRLENBSzREOztBQUNwRSxRQUFJYyxNQUFNLEdBQUdILENBQUMsR0FBRyxHQUFKLEdBQVNDLElBQUksQ0FBQ0csRUFBM0IsQ0FOUSxDQU15Qjs7QUFDakNELElBQUFBLE1BQU0sR0FBR0EsTUFBTSxHQUFDLEVBQWhCLENBUFEsQ0FPYTs7QUFFckIsU0FBSzlCLElBQUwsQ0FBVWtCLEtBQVYsR0FBa0JZLE1BQWxCO0FBQ0EsU0FBS1YsSUFBTCxHQUFVLEtBQUtmLFlBQUwsQ0FBa0JvQixHQUFsQixDQUFzQlQsQ0FBaEMsQ0FWUSxDQVU2Qjs7QUFDckMsU0FBS0ssSUFBTCxHQUFVLEtBQUtoQixZQUFMLENBQWtCb0IsR0FBbEIsQ0FBc0JSLENBQWhDO0FBQ0g7QUExREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJ1bGxldDpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCwgIC8v5Y+R5bCE55qE5a2Q5by56aKE5Yi25L2TXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJvY2tlcjp7XHJcbiAgICAgICAgICAgIHR5cGU6Y2Mubm9kZSwgICAvL+e7keWumuiZmuaLn+aRh+adhue7k+eCueS7peiOt+WPluaRh+adhuS/oeaBr1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOjAsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm5hbWU9XCJ3ZWFwb25cIjsgICAvL+Wwhue7k+eCueWQjeensOiuvue9ruS4uuKAnHdlYXBvbuKAnShQbGF5ZXLohJrmnKzpnIDopoEpXHJcbiAgICAgICAgdGhpcy5Sb2NrZXI9dGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcIkpveXN0aWNrXCIpO1xyXG4gICAgICAgIHRoaXMuUm9ja2VyU2NyaXB0PXRoaXMuUm9ja2VyLmdldENvbXBvbmVudChcIkpveXN0aWNrXCIpOyAgLy/ojrflj5bigJxKb3lzdGlja+KAneiEmuacrOS4ulJvY2tlclNjcmlwdFxyXG4gICAgfSxcclxuICAgIGZpcmU6ZnVuY3Rpb24oKXsgIC8v5byA54GrXHJcbiAgICAgICAgaWYodGhpcy50eXBlPT0wKSAgLy90eXBlPT0w5Li66L+c56iL5q2m5Zmo44CC5Y+R5bCE5a2Q5by5XHJcbiAgICAgICAgey8vY2MubG9nKFwiZmlyZSFcIik7XHJcbiAgICAgICAgdmFyIHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICB2YXIgYnVsbGV0PWNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0KTsgIC8v5a6e5L6L5YyW6aKE5Yi25L2TXHJcbiAgICAgICAgYnVsbGV0LnBhcmVudD10aGlzLm5vZGU7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uPXRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCw1MCkpO1xyXG4gICAgICAgIC8vY2MubG9nKHBvc2l0aW9uLngscG9zaXRpb24ueSk7XHJcbiAgICAgICAgYnVsbGV0LnBhcmVudD1zY2VuZTtcclxuICAgICAgICBidWxsZXQuc2V0UG9zaXRpb24ocG9zaXRpb24ueCxwb3NpdGlvbi55KTsgIC8v6K6+572u5a2Q5by555qE55Sf5oiQ5L2N572uXHJcbiAgICAgICAgYnVsbGV0LmFuZ2xlPXRoaXMubm9kZS5hbmdsZTsgIC8v6K6+572u5a2Q5by555qE6KeS5bqmXHJcbiAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudChcIkJ1bGxldFwiKS5zZXREaXIodGhpcy5kaXJYLHRoaXMuZGlyWSk7XHJcbiAgICB9XHJcbiAgICBlbHNley8v6L+R5oiY5pS75Ye75b6F5a6e546wXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5Sb2NrZXJTY3JpcHQuZGlyLm1hZygpPDAuNSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHIgPSBNYXRoLmF0YW4yKHRoaXMuUm9ja2VyU2NyaXB0LmRpci55LHRoaXMuUm9ja2VyU2NyaXB0LmRpci54KTsvL+S7jlJvY2tlclNjcmlwdOS4reiOt+WPluaRh+adhuinkuW6puS/oeaBr1xyXG4gICAgICAgIHZhciBkZWdyZWUgPSByICogMTgwLyhNYXRoLlBJKTsgIC8v6K6h566X6KeS5bqmXHJcbiAgICAgICAgZGVncmVlID0gZGVncmVlLTkwOyAgLy/orr7nva7op5LluqZcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gZGVncmVlO1xyXG4gICAgICAgIHRoaXMuZGlyWD10aGlzLlJvY2tlclNjcmlwdC5kaXIueDsgICAvL+WtmOWCqOiOt+W+l+WIsOeahOaRh+adhuinkuW6puS/oeaBr1xyXG4gICAgICAgIHRoaXMuZGlyWT10aGlzLlJvY2tlclNjcmlwdC5kaXIueTtcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
