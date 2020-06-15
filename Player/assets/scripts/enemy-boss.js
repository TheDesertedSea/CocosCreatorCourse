// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 20,
        range: 300,
        Bullet: cc.Prefab,
        player: {
            default: null,
            type: cc.Node
        },
        damage: 10,
        health: 100,
        scoreLabel:cc.Node,
        score:10,
        door:cc.Node,
        roomNumber:0,  //目前所在房间号
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.state = '';
        this.enemyAni = this.node.getComponent(cc.Animation);

        //以下变量用于毒性伤害
        this.extraDamage =0;
        this.extraDamageTimes=0;
        this.lastGetExtraDamgeDuration =0;

        //获取保存player脚本组件
        this.playerScript=this.player.getComponent("Player");
    },

    setState(state) {
        if (this.state == state) return;

        this.state = state;
        //console.log(state);
        this.enemyAni.play(state);
    },

    start() {
        // this.schedule(this.ultimateSkill_1, 5);
    },

    update(dt) {

        // cc.log(this.health);
        //如果对话框存在，敌人不移动
        if (window.dialog && window.dialog.active) return;

        // this.LookAtObj(this.player);
        this.EnemyMove();
        
        //受到毒性伤害
        if(this.extraDamageTimes>0)
        {
            if(this.lastGetExtraDamgeDuration<0)
            {
                this.health-=this.extraDamage;
                this.lastGetExtraDamgeDuration=1.0;
                this.extraDamageTimes-=1;
            }
            else
            {
                this.lastGetExtraDamgeDuration-=dt;
            }
            
            //检测是否死亡
            if (this.health <= 0) {
                //开门检测减1
                this.door.getComponent("door_open").enemy_num -= 1;
                this.scoreLabel.getComponent("ScoreLabel").addScore(this.score);

                //如果玩家目前指向自己，则取消该指向
                if(this.playerScript.enemyAround==this.node)
                {
                    this.playerScript.enemyAround=null;
                    this.playerScript.enemyDistance=500.0;
                }
                this.node.destroy();
            }
        }

         //检测玩家距离，若自己最近，且与玩家在同一个房间，则将自己的节点绑定到player上
         var playerDistance=this.node.getPosition().sub(this.player.getPosition()).mag();
         if(playerDistance<500&&playerDistance<this.playerScript.enemyDistance&&this.playerScript.roomNumber==this.roomNumber)
         {
             cc.log("player is near");
             this.playerScript.enemyAround=this.node;
             this.playerScript.enemyDistance=playerDistance;
         }
    },

    onBeginContact(info, self, other) {
        if (other.node.group == "bullet") {
            //受到一次性伤害
            this.health -=other.node.getComponent("Bullet").damage;
            if (this.health <= 0) {
                //开门检测减1
                this.door.getComponent("door_open").enemy_num -= 1;
                this.scoreLabel.getComponent("ScoreLabel").addScore(this.score);

                //如果玩家目前指向自己，则取消该指向
                if(this.playerScript.enemyAround==this.node)
                {
                    this.playerScript.enemyAround=null;
                    this.playerScript.enemyDistance=500.0;
                }
                this.node.destroy();
            }

            //附加毒性伤害
            this.extraDamage=other.node.getComponent("Bullet").extraDamage;
            //cc.log(other.node.getComponent("Bullet").extraDamage);
            //cc.log("extradamge"+this.extraDamage);
            this.extraDamageTimes = other.node.getComponent("Bullet").extraDamageTimes;
            this.lastGetExtraDamgeDuration = 1.0;
            
        }
        //碰到玩家
        if (other.node.group == "player" && other.node.getComponent("Player").onHit == false) {
            //cc.log("ENEMY ATTACK!");
            other.getComponent("Player").getDamage(this.damage);
        }
    },


    EnemyMove() {
        if (this.player) {
            let distance = Math.sqrt((this.node.x - this.player.x) * (this.node.x - this.player.x) + (this.node.y - this.player.y) * (this.node.y - this.player.y));
            //console.log(distance);
            if (distance <= this.range) {
                //console.log(distance);
                this.schedule(this.ultimateSkill_1, 5);
                // this.LookAtObj(this.player);
                if (distance <= 45) {
                    this.Attack();
                } else {
                    this.LookAtObj(this.player);
                    this.Run();
                }
            } else {
                //console.log('out range');
                //stand
            }
        } else {
            //console.log('not find');
        }
    },

    LookAtObj(target) {
        // let state ='';
        let state = this.state;
        //计算朝向
        let dx = this.node.x - target.x;
        let dy = this.node.y - target.y;

        if (Math.abs(dx) > 50 || Math.abs(dy) > 50) {
            if (dx < 0 && dy < 0) {
                if (Math.abs(dx) < Math.abs(dy)) {
                    //enemy_up
                    state = 'enemy_up';
                } else {
                    //enemy_right
                    state = 'enemy_right';
                }
            } else if (dx > 0 && dy > 0) {
                if (Math.abs(dx) < Math.abs(dy)) {
                    //enemy_down
                    state = 'enemy_down';
                } else {
                    //enemy_left
                    state = 'enemy_left';
                }
            } else if (dx > 0 && dy < 0) {
                if (Math.abs(dx) < Math.abs(dy)) {
                    //enemy_up
                    state = 'enemy_up';
                } else {
                    //enemu_left
                    state = 'enemy_left';
                }
            } else if (dx < 0 && dy > 0) {
                if (Math.abs(dx) < Math.abs(dy)) {
                    //enemy_down
                    state = 'enemy_down';
                } else {
                    //enemy_right
                    state = 'enemy_right';
                }
            } else {
                //still
                state = '';
            }
        } else {
            //attack 
            state = '';
        }

        if (state) {
            this.setState(state);
        }
        // this.setState(state);

        // //得到一个由敌人指向玩家的向量
        // let dir = cc.v2(dx, dy);

        // //计算基于x轴正方向的夹角弧度
        // let _angle = dir.signAngle(cc.v2(1, 0));
        // //夹角转换成欧拉角
        // let degree = _angle / Math.PI * 180;
        // //物体朝向
        // this.node.angle = 90 - degree;
    },

    Attack() {
        let dx = this.player.x - this.node.x;
        let dy = this.player.y - this.node.y;
        this.sp = cc.v2(dx, dy);
        this.sp.normalizeSelf();

        // this.node.x += this.sp.x * this.speed;
        // this.node.y += this.sp.y * this.speed;

        this.lv = this.node.getComponent(cc.RigidBody).linearVelocity;

        this.lv.x = 0 - this.sp.x * this.speed;
        this.lv.y = 0 - this.sp.y * this.speed;

        this.node.getComponent(cc.RigidBody).linearVelocity = this.lv;
    },

    Run() {
        let dx = this.player.x - this.node.x;
        let dy = this.player.y - this.node.y;
        this.sp = cc.v2(dx, dy);
        this.sp.normalizeSelf();

        // this.node.x += this.sp.x * this.speed;
        // this.node.y += this.sp.y * this.speed;

        this.lv = this.node.getComponent(cc.RigidBody).linearVelocity;

        this.lv.x = this.sp.x * this.speed;
        this.lv.y = this.sp.y * this.speed;

        // if (this.sp.x || this.sp.y) {
        //     this.lv.x = this.sp.x * this.speed;
        //     this.lv.y = this.sp.y * this.speed;
        // } else {
        //     this.lv.x = 0;
        //     this.lv.y = 0;
        // }

        this.node.getComponent(cc.RigidBody).linearVelocity = this.lv;
    },

    ultimateSkill_1() {
        // let pos = this.node.convertToWorldSpaceAR(cc.v2(0, 50));
        // console.log(this.node.x, this.node.y);
        let offset = 25;

        let bullet1 = cc.instantiate(this.Bullet);
        let bullet2 = cc.instantiate(this.Bullet);
        let bullet3 = cc.instantiate(this.Bullet);
        let bullet4 = cc.instantiate(this.Bullet);
        let bullet5 = cc.instantiate(this.Bullet);
        let bullet6 = cc.instantiate(this.Bullet);
        let bullet7 = cc.instantiate(this.Bullet);
        let bullet8 = cc.instantiate(this.Bullet);

        bullet1.setParent(cc.find("Canvas"));
        bullet2.setParent(cc.find("Canvas"));
        bullet3.setParent(cc.find("Canvas"));
        bullet4.setParent(cc.find("Canvas"));
        bullet5.setParent(cc.find("Canvas"));
        bullet6.setParent(cc.find("Canvas"));
        bullet7.setParent(cc.find("Canvas"));
        bullet8.setParent(cc.find("Canvas"));

        bullet1.angle = this.node.angle;//节点上方
        bullet2.angle = this.node.angle + 180;//节点下方
        bullet3.angle = this.node.angle + 270;//节点右方
        bullet4.angle = this.node.angle + 90;//节点左方
        bullet5.angle = this.node.angle + 45;//左上
        bullet6.angle = this.node.angle + 135;//左下
        bullet7.angle = this.node.angle + 225;//右下
        bullet8.angle = this.node.angle + 315;//右上

        bullet1.x = this.node.x;
        bullet1.y = this.node.y + offset;
        bullet2.x = this.node.x;
        bullet2.y = this.node.y - offset;
        bullet3.x = this.node.x + offset;
        bullet3.y = this.node.y;
        bullet4.x = this.node.x - offset;
        bullet4.y = this.node.y;
        bullet5.x = this.node.x - offset / Math.sqrt(2);
        bullet5.y = this.node.y + offset / Math.sqrt(2);
        bullet6.x = this.node.x - offset / Math.sqrt(2);
        bullet6.y = this.node.y - offset / Math.sqrt(2);
        bullet7.x = this.node.x + offset / Math.sqrt(2);
        bullet7.y = this.node.y - offset / Math.sqrt(2);
        bullet8.x = this.node.x + offset / Math.sqrt(2);
        bullet8.y = this.node.y + offset / Math.sqrt(2);
    },


});
