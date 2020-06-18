// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

let roleMap = {
    1: {
        name: 'Hero',
        url: 'role/hero'
    },
    2: {
        name: 'NPC',
        url: 'role/npc'
    }
};

cc.Class({
    extends: cc.Component,

    properties: {
        picSprite: cc.Sprite,
        nameLabel: cc.Label,
        textLabel: cc.Label,
        screen: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.init([
            // {role: 2, content: 'Hello, my boyfriend!'},
            {role: 1, content: '你有女朋友吗？'},
            {role: 2, content: '不！我没有！'},
            {role: 1, content: '那。。我可以做你的优乐美吗😘'},
            {role: 2, content: '那我是不是要把你捧到手心里？'},
            {role: 1, content: '如果你想的话!'},
            {role: 2, content: '不！我不想！'},
            {role: 1, content: '。。。所以。。这就是拒绝了咩。？😢'},
            {role: 2, content: '人家才是你的小宝贝，我要亲亲抱抱举高高！'},
        ]);
        //用来设置为全局变量，使得对话框存在时，其他节点不执行动作
        window.dialog = this.node;

        // cc.systemEvent.on('keydown', this.onKeyDown, this);

        this.setTouch();
    },

    setTouch() {
        this.screen.on('touchstart', function(event) {
            console.log('Touch start');
        }, this);

        this.screen.on('touchmove', function(event) {
            console.log('Touch move');
        }, this);

        this.screen.on('touchend', function(event) {
            console.log('Touch end');
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

    init(textDataArray){
        this.nowText = null;
        this.textEnd = true;
        this.tt = 0;

        this.textIndex = -1;
        this.textDataArr = textDataArray;
        this.node.active = true;
        this.nextTextData();
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
        this.node.active = false;

        this.screen.pauseSystemEvents();
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
