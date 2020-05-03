
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