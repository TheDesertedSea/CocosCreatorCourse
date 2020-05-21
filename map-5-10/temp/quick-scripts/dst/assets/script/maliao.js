
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/maliao.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd8b7NeGnZOf4vIFVmpAwPg', 'maliao');
// script/maliao.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var Input = {};
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this._speed = 200;
    this.speedState = cc.v2(0, 0); //移动方向状态
    //this.state = '';//初始移动状态
    //this.mlaAni = this.getComponent(cc.Animation);//获取动画组件

    cc.systemEvent.on('keydown', this.onKeydown, this);
    cc.systemEvent.on('keyup', this.onKeyup, this);
  },
  //更改移动状态

  /* satState(state) {
      if (this.state == state) return;
        this.state = state;
      this.mlaAni.play(this,state);
  },
  */
  onKeydown: function onKeydown(e) {
    Input[e.keyCode] = 1;
  },
  onKeyup: function onKeyup(e) {
    Input[e.keyCode] = 0;
  },
  //start () {},
  update: function update(dt) {
    if (Input[cc.macro.KEY.a] || Input[cc.macro.KEY.left]) {
      //设定向左移动方向
      this.speedState.x = -1;
    } else if (Input[cc.macro.KEY.d] || Input[cc.macro.KEY.right]) {
      //设定向右移动方向
      this.speedState.x = 1;
    } else {
      this.speedState.x = 0;
    }

    if (Input[cc.macro.KEY.w] || Input[cc.macro.KEY.up]) {
      //设定向上移动方向
      this.speedState.y = 1;
    } else if (Input[cc.macro.KEY.s] || Input[cc.macro.KEY.down]) {
      //设定向下移动方向
      this.speedState.y = -1;
    } else {
      this.speedState.y = 0;
    } //通过物理引擎的方式来控制人物移动


    this.lv = this.node.getComponent(cc.RigidBody).linearVelocity; //获取当前速度

    if (this.speedState.x) {
      this.lv.y = 0;
      this.lv.x = this.speedState.x * this._speed; //this.node.x += this.speedState.x * this._speed * dt;
    } else if (this.speedState.y) {
      this.lv.x = 0;
      this.lv.y = this.speedState.y * this._speed; //this.node.y += this.speedState.y * this._speed * dt;
    } else {
      this.lv.x = this.lv.y = 0;
    } //更新速度


    this.node.getComponent(cc.RigidBody).linearVelocity = this.lv; //移动动画的部分，需要提前设定移动动画组件，但样例中的移动方向只有4个
    //与我们目标不符合，可能需要修改代码

    /* let state = '';
      if (this.sp.x == 1) {
        state = 'hero_right';
    } else if (this.sp.x == -1) {
        state = 'hero_left';
    } else if (this.sp.y == 1) {
        state = 'hero_up';
    } else if (this.sp.y == -1) {
        state = 'hero_down';
    }
      if (state) {
        this.setState(state);
    }     */
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYWxpYW8uanMiXSwibmFtZXMiOlsiSW5wdXQiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIl9zcGVlZCIsInNwZWVkU3RhdGUiLCJ2MiIsInN5c3RlbUV2ZW50Iiwib24iLCJvbktleWRvd24iLCJvbktleXVwIiwiZSIsImtleUNvZGUiLCJ1cGRhdGUiLCJkdCIsIm1hY3JvIiwiS0VZIiwiYSIsImxlZnQiLCJ4IiwiZCIsInJpZ2h0IiwidyIsInVwIiwieSIsInMiLCJkb3duIiwibHYiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwibGluZWFyVmVsb2NpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLEVBQWQ7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUVBQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ04sU0FBS0MsTUFBTCxHQUFjLEdBQWQ7QUFDQSxTQUFLQyxVQUFMLEdBQWtCTixFQUFFLENBQUNPLEVBQUgsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFsQixDQUZNLENBRXVCO0FBQzdCO0FBQ0E7O0FBRUFQLElBQUFBLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlQyxFQUFmLENBQWtCLFNBQWxCLEVBQTZCLEtBQUtDLFNBQWxDLEVBQTZDLElBQTdDO0FBQ0FWLElBQUFBLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlQyxFQUFmLENBQWtCLE9BQWxCLEVBQTJCLEtBQUtFLE9BQWhDLEVBQXlDLElBQXpDO0FBQ0gsR0FqQkk7QUFtQkw7O0FBQ0E7Ozs7OztBQU9BRCxFQUFBQSxTQTNCSyxxQkEyQktFLENBM0JMLEVBMkJRO0FBQ1RiLElBQUFBLEtBQUssQ0FBQ2EsQ0FBQyxD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b250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgSW5wdXQgPSB7fTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5fc3BlZWQgPSAyMDA7XHJcbiAgICAgICAgdGhpcy5zcGVlZFN0YXRlID0gY2MudjIoMCwwKTsvL+enu+WKqOaWueWQkeeKtuaAgVxyXG4gICAgICAgIC8vdGhpcy5zdGF0ZSA9ICcnOy8v5Yid5aeL56e75Yqo54q25oCBXHJcbiAgICAgICAgLy90aGlzLm1sYUFuaSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7Ly/ojrflj5bliqjnlLvnu4Tku7ZcclxuXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oJ2tleWRvd24nLCB0aGlzLm9uS2V5ZG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oJ2tleXVwJywgdGhpcy5vbktleXVwLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/mm7TmlLnnp7vliqjnirbmgIFcclxuICAgIC8qIHNhdFN0YXRlKHN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gc3RhdGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMubWxhQW5pLnBsYXkodGhpcyxzdGF0ZSk7XHJcbiAgICB9LFxyXG4gKi9cclxuICAgIG9uS2V5ZG93bihlKSB7XHJcbiAgICAgICAgSW5wdXRbZS5rZXlDb2RlXSA9IDE7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5dXAoZSkge1xyXG4gICAgICAgIElucHV0W2Uua2V5Q29kZV0gPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL3N0YXJ0ICgpIHt9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZihJbnB1dFtjYy5tYWNyby5LRVkuYV0gfHwgSW5wdXRbY2MubWFjcm8uS0VZLmxlZnRdKSB7XHJcbiAgICAgICAgICAgIC8v6K6+5a6a5ZCR5bem56e75Yqo5pa55ZCRXHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRTdGF0ZS54ID0gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmKElucHV0W2NjLm1hY3JvLktFWS5kXSB8fCBJbnB1dFtjYy5tYWNyby5LRVkucmlnaHRdKSB7XHJcbiAgICAgICAgICAgIC8v6K6+5a6a5ZCR5Y+z56e75Yqo5pa55ZCRXHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRTdGF0ZS54ID0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkU3RhdGUueCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihJbnB1dFtjYy5tYWNyby5LRVkud10gfHwgSW5wdXRbY2MubWFjcm8uS0VZLnVwXSkge1xyXG4gICAgICAgICAgICAvL+iuvuWumuWQkeS4iuenu+WKqOaWueWQkVxyXG4gICAgICAgICAgICB0aGlzLnNwZWVkU3RhdGUueSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmKElucHV0W2NjLm1hY3JvLktFWS5zXSB8fCBJbnB1dFtjYy5tYWNyby5LRVkuZG93bl0pIHtcclxuICAgICAgICAgICAgLy/orr7lrprlkJHkuIvnp7vliqjmlrnlkJFcclxuICAgICAgICAgICAgdGhpcy5zcGVlZFN0YXRlLnkgPSAtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkU3RhdGUueSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+mAmui/h+eJqeeQhuW8leaTjueahOaWueW8j+adpeaOp+WItuS6uueJqeenu+WKqFxyXG4gICAgICAgIHRoaXMubHYgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHk7Ly/ojrflj5blvZPliY3pgJ/luqZcclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNwZWVkU3RhdGUueCkge1xyXG4gICAgICAgICAgICB0aGlzLmx2LnkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmx2LnggPSB0aGlzLnNwZWVkU3RhdGUueCAqIHRoaXMuX3NwZWVkO1xyXG4gICAgICAgICAgICAvL3RoaXMubm9kZS54ICs9IHRoaXMuc3BlZWRTdGF0ZS54ICogdGhpcy5fc3BlZWQgKiBkdDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3BlZWRTdGF0ZS55KSB7XHJcbiAgICAgICAgICAgIHRoaXMubHYueCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubHYueSA9IHRoaXMuc3BlZWRTdGF0ZS55ICogdGhpcy5fc3BlZWQ7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZFN0YXRlLnkgKiB0aGlzLl9zcGVlZCAqIGR0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubHYueCA9IHRoaXMubHYueSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+abtOaWsOmAn+W6plxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IHRoaXMubHY7XHJcblxyXG4gICAgICAgIC8v56e75Yqo5Yqo55S755qE6YOo5YiG77yM6ZyA6KaB5o+Q5YmN6K6+5a6a56e75Yqo5Yqo55S757uE5Lu277yM5L2G5qC35L6L5Lit55qE56e75Yqo5pa55ZCR5Y+q5pyJNOS4qlxyXG4gICAgICAgIC8v5LiO5oiR5Lus55uu5qCH5LiN56ym5ZCI77yM5Y+v6IO96ZyA6KaB5L+u5pS55Luj56CBXHJcbiAgICAgICAgLyogbGV0IHN0YXRlID0gJyc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNwLnggPT0gMSkge1xyXG4gICAgICAgICAgICBzdGF0ZSA9ICdoZXJvX3JpZ2h0JztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3AueCA9PSAtMSkge1xyXG4gICAgICAgICAgICBzdGF0ZSA9ICdoZXJvX2xlZnQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcC55ID09IDEpIHtcclxuICAgICAgICAgICAgc3RhdGUgPSAnaGVyb191cCc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNwLnkgPT0gLTEpIHtcclxuICAgICAgICAgICAgc3RhdGUgPSAnaGVyb19kb3duJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9ICAgICAqL1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==