// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        mapNode: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let p=cc.director.getPhysicsManager();  //开启物理系统
        p.enabled=true;
//        p.debugDrawFlags=true;
        p.gravity=cc.v2(0,0);
        var manager=cc.director.getCollisionManager();
        manager.enabled=true;   //开启碰撞检测
//        manager.enabledDebugDraw=true; //显示碰撞检测区域
    },

    start () {
        //对所有地图中的墙壁添加碰撞组件
        for (let mapNode of this.mapNode.children) {
            let tiledMap = mapNode.getComponent(cc.TiledMap);
            let tiledSize = tiledMap.getTileSize();//获取每一块的尺寸
            let layer = tiledMap.getLayer('wall');//获取墙壁层
            let layerSize = layer.getLayerSize();//获取尺寸以块为单位

            for (let i = 0; i < layerSize.width; i++) {
                for (let j = 0; j < layerSize.height; j++) {
                    let tiled = layer.getTiledTileAt(i, j, true);//获取单独的一块
                    if (tiled.gid != 0) {
                        tiled.node.group = 'block';

                        let body = tiled.node.addComponent(cc.RigidBody);//动态添加组件
                        body.type = cc.RigidBodyType.Static;//设置为静态
                        let collider = tiled.node.addComponent(cc.PhysicsBoxCollider); //添加碰撞区域
                        //调整属性
                        collider.offset = cc.v2(tiledSize.width / 2, tiledSize.height / 2); //偏移量设为中心点的位置
                        collider.size = tiledSize; //包围盒的大小设为一块的大小
                        collider.apply();
                    }
                }
            }
        }

        // 循环播放传送门动画
        this.mapNode.getChildByName("m2_1").getChildByName("portal").getComponent(cc.Animation).play('portal');
    },

    // update (dt) {},
});
