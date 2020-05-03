
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