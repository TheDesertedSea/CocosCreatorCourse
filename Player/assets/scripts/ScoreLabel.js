
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
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

    onLoad () {
        this.score=0;
        this.label=this.node.getComponent(cc.Label);
    },

    start () {
        //this.scoreNodeScript=cc.find("Score").getComponent("Score"); 
    },
    addScore(score)
    {
        this.score+=score;
        //this.scoreNodeScript.score=this.score;
        this.label.string="Score:"+this.score.toString();
    },
    // update (dt) {},
});

