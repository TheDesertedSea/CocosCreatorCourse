
cc.Class({
    extends: cc.Component,

    properties: {
        speed: 100,  //速度
        weaponPack: cc.Node,//武器栏
        health: 100,  //生命值
        healthBar: cc.Node,  //血条显示条，但绑定的是血条体即healthBarBody.node
        stateUI: cc.Node,  //状态显示栏
        fireSound: {   //开火音乐
            type:cc.AudioClip, 
            default: null,    
        },
        //WeaponRocker:cc.Node,   //绑定虚拟摇杆结点以获取摇杆信息,
        MoveRocker:cc.Node,
        roomNumber:0,  //目前所在房间号
    },

    onLoad() {
        
        this.damageAddTime = 0;   //伤害增加效果时间
        this.damageAdd = 0;  //伤害增加效果值
        this.weaponNums = 1;  //所持武器数目
        this.moveForward = false;   //向前移动状态
        this.moveBackward = false;  //向后移动状态
        this.moveRight = false;  //向右移动状态
        this.moveLeft = false;  //向左移动状态
        this.onHit = false;   //是否被攻击
        this.hitTime = 0;   //上次被攻击距今时间间隔
        this.itemAround = null;   //在附近的物品节点
        this.bUseItem = false;  //是否能够使用物品（是否有物品在附近）
        this.weaponAround = null;  //在附近的武器
        this.bGetWeapon = false;   //是否有能够拣取的武器
        this.animation = this.node.getChildByName("body").getComponent(cc.Animation);  //人物身体动画
        //this.animationState = "player_right_static";   //目前播放状态（播放的是朝哪个方向的动画）
        this.lastAnimationState = "player_right_static";   //上一次动画播放状态
        this.animation.play(this.lastAnimationState);   //初始播放动画（右静）
        
        this.audioId=0;   //上次播放的音频的id号
        //this.WeaponRockerScript=this.WeaponRocker.getComponent("Joystick");  //获取“Joystick”脚本
        this.MoveRockerScript=this.MoveRocker.getComponent("Joystick");  
        this.enemyAround=null;
        this.enemyDistance=10000;
          //分数常驻节点的脚本组件
        /*if (this.animation) {  
            cc.log("has animation");
        }*/

        //绑定按键事件触发函数
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);  
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);   
    },

    start(){
        //cc.log(this.node.zIndex);
        this.ATK=(this.node.getChildByName("weapon").getComponent("Weapon").damage + this.damageAdd).toString();  //ATK值，此值用于UI显示
        
        this.node.zIndex=1;
        this.weapon=this.node.getChildByName("weapon");  //当前使用中武器节点
        this.weaponScript=this.weapon.getComponent("Weapon");  //目前使用中的武器脚本组件

        
    },
    onDestroy() {
        //取消绑定按键事件触发函数
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },
    onKeyDown: function (event) {
        //this.lastAnimationState = this.animationState;  //将当前动画播放状态保存为上一次播放状态
        switch (event.keyCode) {  //w向前，s向后，a向左，d向右，space攻击
            /*case cc.macro.KEY.a:
                this.moveLeft = true;
                this.moveRight = false;
                this.animationState = "player_left";
                break;
            case cc.macro.KEY.d:
                this.moveRight = true;
                this.moveLeft = false;
                this.animationState = "player_right";
                break;
            case cc.macro.KEY.w:
                this.moveForward = true;
                this.moveBackward = false;
                this.animationState = "player_backward";
                break;
            case cc.macro.KEY.s:
                this.moveBackward = true;
                this.moveForward = false;
                this.animationState = "player_forward";
                break;
                */
            case cc.macro.KEY.space:
                this.act();
        }
        /*if (this.animationState != this.lastAnimationState)  //如果上一次和这一次按下的方向键所对应的播放状态不同，则播放新的动画
            this.animation.play(this.animationState);
            */
    },

    onKeyUp: function (event) {
        switch (event.keyCode) {
            /*case cc.macro.KEY.a:
                this.moveLeft = false;
                break;
            case cc.macro.KEY.d:
                this.moveRight = false;
                break;
            case cc.macro.KEY.w:
                this.moveForward = false;
                break;
            case cc.macro.KEY.s:
                this.moveBackward = false;
                */
        }
    },

    /* attack:function()
     {
         cc.log("attack");
         var weapon=this.node.getChildByName("weapon");
         cc.tween(weapon).to(0.2,{rotation:90}).to(0.4,{rotation:30}).start();
     },
     */

    act: function () {   //攻击、使用物品、捡取物品行为

        //cc.log(this.bUseItem);
        // cc.log("attack");   //调用武器的开火函数
        //cc.log(this.bGetWeapon);
        if (this.bUseItem) {   //如果可以使用物品
            //cc.log(this.itemAround.name);
            //cc.log("has item!");
            //if (this.itemAround) {
            //    cc.log("yes");
            //}
            this.itemAround.getComponent("Potion").use();   //调用周围物品节点所绑定脚本的使用函数
            //cc.log(this.health);
            this.bUseItem = false;  //设置物品为不能使用
            this.ATK=(this.weaponScript.damage + this.damageAdd).toString();   //更新ATK显示
            
        }
        else if (this.bGetWeapon) {   //如果可以捡取武器

            if (this.weaponNums == 1) {   //若持有武器数为1，则将新武器加入所持武器，并处于使用状态
                this.weaponNums += 1;  //武器数加1
                

                //修改目前所使用武器节点关系，并使使用武器脚本(this.weaponScript)失效
                this.weapon.parent = null;   
                let dirX=this.weaponScript.dirX;
                let dirY=this.weaponScript.dirY;
                this.weaponScript.enabled = false;
                this.weapon.parent = this.weaponPack;

                //修改附近武器的节点关系及脚本开启
                this.weaponAround.parent = this.node;  
                //this.weaponAround.group="player";
                this.weaponAround.getComponent("Weapon").enabled = true;  //开启使用武器脚本组件
                this.weaponAround.getComponent("Weapon").weaponInit(dirX,dirY);   //武器初始化
                //cc.log(this.weaponAround.parent.name);   

                //复制使用中武器的位置信息
                this.weaponAround.x = this.weapon.x;   
                this.weaponAround.y = this.weapon.y;
                this.weaponAround.angle = this.weapon.angle;
                //cc.log(this.weaponAround.position.x);
                //cc.log(this.weaponAround.position.y);

                //将使用中物器的位置信息修改为武器栏中位置
                this.weapon.position.x = 4.024;  //这是武器在武器栏中时，武器相对于其父节点武器栏的坐标信息
                this.weapon.position.y = -2.013;
                this.weapon.angle = -90;
                //this.weapon.zIndex=0;

                //this.weaponAround.zIndex = 1;  //zIndex为叠放次序
                
                this.weaponAround.getComponent("WeaponGetDetector").enabled = false;//关闭捡取到的武器的武器探测脚本组件("WeaponGetDetector.js")
                this.bGetWeapon = false;  //可捡取武器标志重置
                this.weapon=this.weaponAround;//保存新的使用中武器节点
                this.weaponScript=this.weapon.getComponent("Weapon");  //保存新的使用中武器节点脚本组件
            }
            else {
                //cc.log("yes");
                
                //卸下使用中武器，放到Canvas下，并使使用武器脚本(this.weaponScript)失效
                this.weapon.parent = this.node.parent;
                let dirX=this.weaponScript.dirX;
                let dirY=this.weaponScript.dirY;
                this.weaponScript.enabled = false;

                //保存目前武器节点坐标
                let px=this.weapon.x;
                let py=this.weapon.y;

                //使用中武器位置换为周边武器位置
                this.weapon.x = this.weaponAround.x;
                this.weapon.y = this.weaponAround.y;
                //先把使用中武器角度复制给周边武器
                this.weaponAround.angle = this.weapon.angle;
                this.weapon.angle = -90;

                //修改周边武器节点关系即坐标以及脚本组件的开与关
                this.weaponAround.parent = this.node;
                //this.weaponAround.group="player";
                this.weaponAround.getComponent("Weapon").weaponInit(dirX,dirY);
                this.weaponAround.x = px;
                this.weaponAround.y = py;
                this.weaponAround.getComponent("Weapon").enabled = true;
                //this.weaponAround.zIndex = 1;  //zIndex为叠放次序
                this.weaponAround.getComponent("WeaponGetDetector").enabled = false;

                //this.weapon.zIndex=0;
                
                this.weapon.getComponent("WeaponGetDetector").enabled = true;//开启武器检测脚本组件
                
                //保存新武器节点信息
                this.weapon=this.weaponAround;
                this.weaponScript=this.weapon.getComponent("Weapon");
            }
            this.ATK=(this.weaponScript.damage + this.damageAdd).toString();  //更新ATK显示
            
        }
        else {
            if(cc.audioEngine.getState(this.audioId)!=cc.audioEngine.AudioState.PLAYING)  //如果上一次播放音效未结束，则不新播放
            {
                this.audioId=cc.audioEngine.play(this.fireSound,false,1);  //否则新播放音效
            }
            
            this.weaponScript.fire();   //调用武器开火函数
        }

    },
    changeWeapon: function ()  //切换武器
    {
        //只有一把武器无效
        if (this.weaponNums == 1) {
            return;
        }
        
        //修改目前所使用武器节点关系，并使使用武器脚本(this.weaponScript)失效
        this.weapon.parent = null;
        let dirX=this.weaponScript.dirX;
        let dirY=this.weaponScript.dirY;
        this.weaponScript.enabled = false;

        //获得武器栏中武器节点
        var weapon2 = this.weaponPack.getChildByName("weapon");

        //修改武器栏中武器位置信息为目前所使用武器位置信息
        weapon2.parent = this.node;
        weapon2.getComponent("Weapon").enabled = true;
        weapon2.getComponent("Weapon").weaponInit(dirX,dirY);
        weapon2.position.x = this.weapon.x;
        weapon2.position.y = this.weapon.y;
        weapon2.angle = this.weapon.angle;

        //weapon2.zIndex = 1; //zIndex为叠放次序
        //cc.log(cc.macro.MIN_ZINDEX);
        //this.weapon.zIndex=0;

        //修改目前所使用武器位置信息为武器栏中武器位置信息
        this.weapon.parent = this.weaponPack;
        this.weapon.position.x = 4.024;
        this.weapon.position.y = -2.013;
        this.weapon.angle = -90;

        

        //保存新的使用中武器节点
        this.weapon=weapon2;
        this.weaponScript=this.weapon.getComponent("Weapon");
        this.ATK=(this.weaponScript.damage + this.damageAdd).toString();  //更新ATK显示
        
    },
    /*onBeginContact: function (info, self, other) {
        //cc.log("CONTACT!");
        //cc.log(other.node.group);
        
    },*/
    getDamage: function (damage) {
        this.health -= damage;
        this.onHit = true;
        if (this.health <= 0) {
            cc.director.loadScene("GameOver",function(){
                cc.find("Canvas/baseView/Score/Score_Label").getComponent(cc.Label).string="Score："
                +(cc.find("Score").getComponent("Score").score+0).toString();
            });
        }
    },
    update(dt) {   //每秒给刚体组件设置线性速度
        //cc.log(this.bGetWeapon);
        cc.log(this.roomNumber);
        
        this.lv = this.node.getComponent(cc.RigidBody).linearVelocity;
        /*if (this.moveRight) {
            this.lv.x = this.speed;
        }
        else if (this.moveLeft) {
            this.lv.x = -this.speed;
        }
        else {
            this.lv.x = 0;
        }
        

        if (this.moveForward) {
            this.lv.y = this.speed;

        }
        else if (this.moveBackward) {
            this.lv.y = -this.speed;

        }
        else {
            this.lv.y = 0;
        }
        */
       this.lv.x=this.MoveRockerScript.dir.x*this.speed;
       this.lv.y=this.MoveRockerScript.dir.y*this.speed;
        if(this.lv.x==0&&this.lv.y==0)
        {
            if(this.lastAnimationState=="player_right")
            {
                this.lastAnimationState="player_right_static";
                this.animation.play(this.lastAnimationState);
            }
            else if(this.lastAnimationState=="player_left")
            {
                this.lastAnimationState="player_left_static";
                this.animation.play(this.lastAnimationState);
            }
        }
        else if(this.lv.x!=0)
        {
            if(this.lv.x>0&&this.lastAnimationState!="player_right")
            {
                this.lastAnimationState="player_right";
                this.animation.play(this.lastAnimationState);
            }
            else if(this.lv.x<0&&this.lastAnimationState!="player_left")
            {
                this.lastAnimationState="player_left";
                this.animation.play(this.lastAnimationState);
            }
        }
        else 
        {
            if(this.lastAnimationState=="player_left_static")
            {
                this.lastAnimationState="player_left";
                this.animation.play(this.lastAnimationState);
            }
            else if(this.lastAnimationState="player_right_static")
            {
                this.lastAnimationState="player_right";
                this.animation.play(this.lastAnimationState);
            }
        }



        this.node.getComponent(cc.RigidBody).linearVelocity = this.lv;
        this.healthBar.scaleX = this.health / 100;
        //cc.log(this.stateUI.getChildByName("ATK").string);
        //var stateUI=cc.find("Canvas/Player/UI/State/ATK");
        var ATK = this.stateUI.getChildByName("ATK");
        var label = ATK.getComponent(cc.Label);

        label.string = "ATK:" + this.ATK;
        //cc.log(this.node.getChildByName("weapon").getComponent("Weapon").damage);
        if (this.onHit) {
            if (this.hitTime > 0.5) {
                this.onHit = false;
                this.hitTime = 0;
            }
            else {
                this.hitTime += dt;
            }


        }
        if (this.damageAddTime > 0) {
            this.damageAddTime -= dt;
        }
        else {

            this.damageAdd = 0;
        }

        //调整武器方向
        if(this.enemyAround)
        {
            let EPVectorX=this.enemyAround.position.x-this.node.position.x;
            let EPVectorY=this.enemyAround.position.y-this.node.position.y;
            //let r=Math.atan2(EPVectorX,EPVectorY);
            let r=cc.v2(EPVectorX,EPVectorY).signAngle(cc.v2(1,0));
            let degree=r*180/(Math.PI);
            this.weapon.angle=-90-degree;
            this.weaponScript.dirX=EPVectorX;
            this.weaponScript.dirY=EPVectorY;
        }
        
        
        
        

        /*if(this.WeaponRockerScript.dir.mag()<0.5){
            return;
        }
        var r = Math.atan2(this.WeaponRockerScript.dir.y,this.WeaponRockerScript.dir.x);//从RockerScript中获取摇杆角度信息
        var degree = r * 180/(Math.PI);  //计算角度
        degree = degree-90;  //设置角度



        this.weapon.angle = degree;
        this.weaponScript.dirX=this.WeaponRockerScript.dir.x;   //存储获得到的摇杆角度信息
        this.weaponScript.dirY=this.WeaponRockerScript.dir.y;
        */

        
    },

    
});
