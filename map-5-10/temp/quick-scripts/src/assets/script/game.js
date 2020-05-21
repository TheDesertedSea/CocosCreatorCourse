"use strict";
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