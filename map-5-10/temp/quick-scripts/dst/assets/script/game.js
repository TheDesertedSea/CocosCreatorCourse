
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50807ogHBZOJ4v614VTLJ68', 'game');
// script/game.js

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
    tiledMap: cc.TiledMap
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var p = cc.director.getPhysicsManager(); //获取物理引擎属性并启用

    p.enabled = true;
    p.debugDrawFlags = true; //方便调试

    p.gravity = cc.v2(0, 0); //关闭重力
  },
  start: function start() {
    var tiledSize = this.tiledMap.getTileSize(); //获取每一块的尺寸

    var layer = this.tiledMap.getLayer('wall'); //获取墙壁层

    var layerSize = layer.getLayerSize(); //获取尺寸以块为单位

    for (var i = 0; i < layerSize.width; i++) {
      for (var j = 0; j < layerSize.height; j++) {
        var tiled = layer.getTiledTileAt(i, j, true); //获取单独的一块

        if (tiled.gid != 0) {
          tiled.node.group = 'wall';
          var body = tiled.node.addComponent(cc.RigidBody); //动态添加组件

          body.type = cc.RigidBodyType.Static; //设置为静态

          var collider = tiled.node.addComponent(cc.PhysicsBoxCollider); //添加碰撞区域
          //调整属性

          collider.offset = cc.v2(tiledSize.width / 2, tiledSize.height / 2); //偏移量设为中心点的位置

          collider.size = tiledSize; //包围盒的大小设为一块的大小

          collider.apply();
        }
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGlsZWRNYXAiLCJUaWxlZE1hcCIsIm9uTG9hZCIsInAiLCJkaXJlY3RvciIsImdldFBoeXNpY3NNYW5hZ2VyIiwiZW5hYmxlZCIsImRlYnVnRHJhd0ZsYWdzIiwiZ3Jhdml0eSIsInYyIiwic3RhcnQiLCJ0aWxlZFNpemUiLCJnZXRUaWxlU2l6ZSIsImxheWVyIiwiZ2V0TGF5ZXIiLCJsYXllclNpemUiLCJnZXRMYXllclNpemUiLCJpIiwid2lkdGgiLCJqIiwiaGVpZ2h0IiwidGlsZWQiLCJnZXRUaWxlZFRpbGVBdCIsImdpZCIsIm5vZGUiLCJncm91cCIsImJvZHkiLCJhZGRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJ0eXBlIiwiUmlnaWRCb2R5VHlwZSIsIlN0YXRpYyIsImNvbGxpZGVyIiwiUGh5c2ljc0JveENvbGxpZGVyIiwib2Zmc2V0Iiwic2l6ZSIsImFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFSixFQUFFLENBQUNLO0FBREwsR0FIUDtBQU9MO0FBRUFDLEVBQUFBLE1BVEssb0JBU0s7QUFDTixRQUFJQyxDQUFDLEdBQUdQLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZQyxpQkFBWixFQUFSLENBRE0sQ0FDa0M7O0FBQ3hDRixJQUFBQSxDQUFDLENBQUNHLE9BQUYsR0FBWSxJQUFaO0FBQ0FILElBQUFBLENBQUMsQ0FBQ0ksY0FBRixHQUFtQixJQUFuQixDQUhNLENBR2tCOztBQUN4QkosSUFBQUEsQ0FBQyxDQUFDSyxPQUFGLEdBQVlaLEVBQUUsQ0FBQ2EsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFULENBQVosQ0FKTSxDQUlrQjtBQUUzQixHQWZJO0FBaUJMQyxFQUFBQSxLQWpCSyxtQkFpQkk7QUFDTCxRQUFJQyxTQUFTLEdBQUcsS0FBS1gsUUFBTCxDQUFjWSxXQUFkLEVBQWhCLENBREssQ0FDdUM7O0FBQzVDLFFBQUlDLEtBQUssR0FBRyxLQUFLYixRQUFMLENBQWNjLFFBQWQsQ0FBdUIsTUFBdkIsQ0FBWixDQUZLLENBRXNDOztBQUMzQyxRQUFJQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csWUFBTixFQUFoQixDQUhLLENBR2dDOztBQUVyQyxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFNBQVMsQ0FBQ0csS0FBOUIsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFDdEMsV0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixTQUFTLENBQUNLLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3ZDLFlBQUlFLEtBQUssR0FBR1IsS0FBSyxDQUFDUyxjQUFOLENBQXFCTCxDQUFyQixFQUF3QkUsQ0FBeEIsRUFBMkIsSUFBM0IsQ0FBWixDQUR1QyxDQUNNOztBQUM3QyxZQUFJRSxLQUFLLENBQUNFLEdBQU4sSUFBYSxDQUFqQixFQUFvQjtBQUNoQkYsVUFBQUEsS0FBSyxDQUFDRyxJQUFOLENBQVdDLEtBQVgsR0FBbUIsTUFBbkI7QUFFQSxjQUFJQyxJQUFJLEdBQUdMLEtBQUssQ0FBQ0csSUFBTixDQUFXRyxZQUFYLENBQXdCL0IsRUFBRSxDQUFDZ0MsU0FBM0IsQ0FBWCxDQUhnQixDQUdpQzs7QUFDakRGLFVBQUFBLElBQUksQ0FBQ0csSUFBTCxHQUFZakMsRUFBRSxDQUFDa0MsYUFBSCxDQUFpQkMsTUFBN0IsQ0FKZ0IsQ0FJb0I7O0FBQ3BDLGNBQUlDLFFBQVEsR0FBR1gsS0FBSyxDQUFDRyxJQUFOLENBQVdHLFlBQVgsQ0FBd0IvQixFQUFFLENBQUNxQyxrQkFBM0IsQ0FBZixDQUxnQixDQUsrQztBQUMvRDs7QUFDQUQsVUFBQUEsUUFBUSxDQUFDRSxNQUFULEdBQWtCdEMsRUFBRSxDQUFDYSxFQUFILENBQU1FLFNBQVMsQ0FBQ08sS0FBVixHQUFrQixDQUF4QixFQUEyQlAsU0FBUyxDQUFDUyxNQUFWLEdBQW1CLENBQTlDLENBQWxCLENBUGdCLENBT29EOztBQUNwRVksVUFBQUEsUUFBUSxDQUFDRyxJQUFULEdBQWdCeEIsU0FBaEIsQ0FSZ0IsQ0FRVzs7QUFDM0JxQixVQUFBQSxRQUFRLENBQUNJLEtBQVQ7QUFDSDtBQUNKO0FBQ0o7QUFDSixHQXRDSSxDQXdDTDs7QUF4Q0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRpbGVkTWFwOiBjYy5UaWxlZE1hcFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGxldCBwID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTsvL+iOt+WPlueJqeeQhuW8leaTjuWxnuaAp+W5tuWQr+eUqFxyXG4gICAgICAgIHAuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcC5kZWJ1Z0RyYXdGbGFncyA9IHRydWU7Ly/mlrnkvr/osIPor5VcclxuICAgICAgICBwLmdyYXZpdHkgPSBjYy52MigwLCAwKTsvL+WFs+mXremHjeWKm1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCB0aWxlZFNpemUgPSB0aGlzLnRpbGVkTWFwLmdldFRpbGVTaXplKCk7Ly/ojrflj5bmr4/kuIDlnZfnmoTlsLrlr7hcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLnRpbGVkTWFwLmdldExheWVyKCd3YWxsJyk7Ly/ojrflj5blopnlo4HlsYJcclxuICAgICAgICBsZXQgbGF5ZXJTaXplID0gbGF5ZXIuZ2V0TGF5ZXJTaXplKCk7Ly/ojrflj5blsLrlr7jku6XlnZfkuLrljZXkvY1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllclNpemUud2lkdGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxheWVyU2l6ZS5oZWlnaHQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbGVkID0gbGF5ZXIuZ2V0VGlsZWRUaWxlQXQoaSwgaiwgdHJ1ZSk7Ly/ojrflj5bljZXni6znmoTkuIDlnZdcclxuICAgICAgICAgICAgICAgIGlmICh0aWxlZC5naWQgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVkLm5vZGUuZ3JvdXAgPSAnd2FsbCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib2R5ID0gdGlsZWQubm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTsvL+WKqOaAgea3u+WKoOe7hOS7tlxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljOy8v6K6+572u5Li66Z2Z5oCBXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyID0gdGlsZWQubm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTsgLy/mt7vliqDnorDmkp7ljLrln59cclxuICAgICAgICAgICAgICAgICAgICAvL+iwg+aVtOWxnuaAp1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldCA9IGNjLnYyKHRpbGVkU2l6ZS53aWR0aCAvIDIsIHRpbGVkU2l6ZS5oZWlnaHQgLyAyKTsgLy/lgY/np7vph4/orr7kuLrkuK3lv4PngrnnmoTkvY3nva5cclxuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5zaXplID0gdGlsZWRTaXplOyAvL+WMheWbtOebkueahOWkp+Wwj+iuvuS4uuS4gOWdl+eahOWkp+Wwj1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLmFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19