cc.Class({
        extends: cc.Component,  //继承cc.Component

        properties: {
            m_LoadingPrefab:cc.Prefab,
            m_BackGround:cc.Node,
            level1:cc.Node,
            level2:cc.Node,
            level3:cc.Node,
            level4:cc.Node,
            level5:cc.Node,
            level6:cc.Node,
        },


        onLoad () {
        },

        start () {
        },
        onClickLevel1: function(target, data){
            if (data == 'level1'){
//      cc.director.loadScene("Play");
//        this.ButtonStart.active = false;
//        this.ButtonSelect.active = false;
            this.level1.active = false;
            this.level2.active = false;
            this.level3.active = false;
            this.level4.active = false;
            this.level5.active = false;
            this.level6.active = false;
            this.m_Loading = cc.instantiate(this.m_LoadingPrefab)
            this.m_BackGround.addChild(this.m_Loading)
            this.m_Loading.y = -200
            this.m_Loading = this.m_Loading.getComponent('loading')
            this.m_Loading.setProgress(1)
            this.m_Loading.finishCallBack = function(){
                this.m_Loading.node.active = false
                cc.director.loadScene("Play");
                }.bind(this)
            }
        },
        // update (dt) {},
});