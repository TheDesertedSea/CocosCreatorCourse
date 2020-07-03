/*let roleMap = {
    1: {
        name: 'Hero',
        url: 'role/hero'
    },
    2: {
        name: 'Enemy',
        url: 'role/npc'
    }
};*/

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

        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.init();
        
    },
    beginDialog(textDataArr,roleMap)  //开始对话（可重复调用，多次进行对话），参数传入对话数据数组和角色资源信息数组
    {
        this.textDataArr=textDataArr;
        this.roleMap=roleMap;
        this.nowText = null;
        this.textEnd = true;
        this.tt = 0;

        this.textIndex = -1;

        this.node.active = true;
        this.screen.resumeSystemEvents();//恢复屏幕触摸监听
        this.nextTextData();

        //只保留对话框和设置键显示
        var UIChildren=this.node.parent.children;
        for(let i=0;i<UIChildren.length;++i)
        {
            if(UIChildren[i].name!="dialogue-bubble"&&UIChildren[i].name!="Setting_Button")
            {
                UIChildren[i].active=false;
            }
        }



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
        //用来设置为全局变量，使得对话框acitve==true(其他脚本中会判断)时，其他节点不执行动作
        window.dialog = this.node;

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
        
        this.nameLabel.string = this.roleMap[textData.role-1].name;
        this.textLabel.string = '';
        this.nowText = textData.content;

        cc.loader.loadRes(this.roleMap[textData.role-1].url, cc.SpriteFrame, (err, texture) => {
            this.picSprite.spriteFrame = texture;
        });
    },

    closeDialog() {
        this.screen.pauseSystemEvents();

        //让所有UI恢复显示
        var UIChildren=this.node.parent.children;
        for(let i=0;i<UIChildren.length;++i)
        {
            UIChildren[i].active=true;

        }
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