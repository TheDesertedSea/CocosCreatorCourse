let roleMap = {
    1: {
        name: 'Hero',
        url: 'role/hero'
    },
    2: {
        name: 'Enemy',
        url: 'role/npc'
    }
};


var DialogData=cc.Class({  //对话数据类
    name: "DialogData",
    properties: {
        role:0,  //角色编号
        content:cc.String,  //内容
    },
});

cc.Class({
    extends: cc.Component,

    properties: {
        picSprite: cc.Sprite,
        nameLabel: cc.Label,
        textLabel: cc.Label,
        screen: {
            default: null,
            type: cc.Node
        },
       textDataArr:[DialogData],  //对话数据数组
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.init();
        
    },
    beginDialog()  //开始对话（可重复调用，多次进行对话）
    {
        
        this.nowText = null;
        this.textEnd = true;
        this.tt = 0;

        this.textIndex = -1;

        this.node.active = true;
        this.screen.resumeSystemEvents();//恢复屏幕触摸监听
        this.nextTextData();
        //用来设置为全局变量，使得对话框存在时，其他节点不执行动作
        window.dialog = this.node;


    },
    setTouch() {
        this.screen.on('touchstart', function(event) {
            //console.log('Touch start');
        }, this);

        this.screen.on('touchmove', function(event) {
            //console.log('Touch move');
        }, this);

        this.screen.on('touchend', function(event) {
            //console.log('Touch end');
            this.nextTextData();
        }, this);
    },

    // onDestory() {
    //     cc.systemEvent.off('keydown', this.onKeyDown, this);
    // },

    // onKeyDown(e) {
    //     switch (e.keyCode) {
    //         case cc.macro.KEY.space: {
    //             this.nextTextData();
    //             console.log('keydown');
    //             break;
    //         }
    //     }
    // },

    init()//初始化
    {  
        this.setTouch();

    },

    nextTextData() {
        if(!this.textEnd) return;
        if(++this.textIndex < this.textDataArr.length) {
            this.setTextData(this.textDataArr[this.textIndex]);
        } else {
            this.closeDialog();
        }
    },

    setTextData(textData) {
        if(!this.textEnd) return;
        this.textEnd = false;
        
        this.nameLabel.string = roleMap[textData.role].name;
        this.textLabel.string = '';
        this.nowText = textData.content;

        cc.loader.loadRes(roleMap[textData.role].url, cc.SpriteFrame, (err, texture) => {
            this.picSprite.spriteFrame = texture;
        });
    },

    closeDialog() {
        this.screen.pauseSystemEvents();
        this.node.active = false;


    },

    // start () {

    // },

    update (dt) {
        if(!this.nowText) return;
        this.tt += dt;

        if (this.tt >= 0.1) {
            if(this.textLabel.string.length < this.nowText.length) {
                this.textLabel.string = this.nowText.slice(0, this.textLabel.string.length + 1);
            } else {
                this.textEnd = true;
                this.nowText = null;
            }
            this.tt = 0;
        }
    },
});