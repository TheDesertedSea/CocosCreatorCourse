
cc.Class({
    extends: cc.Component,

    properties: {
        player:cc.Node,
        //roomEnemyNum: 3,
        //boxes:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.playerScript=this.player.getComponent("Player");
    },

    start () {
        
    },

    update (dt) {
        //cc.log(this.roomEnemyNum);
        if (this.playerScript.enemies.length == 0) {
            
            //实现墙壁渐隐的效果
            this.node.opacity -= 10;
            if (this.node.opacity <= 0)
                this.node.active = false;
        }
    },
});
