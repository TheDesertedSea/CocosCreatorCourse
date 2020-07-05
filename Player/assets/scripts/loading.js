

cc.Class({
    extends: cc.Component,

    properties: {
        m_proImage:cc.Node,
        m_ProMaxLen:{
            default:685,
            type:cc.Integer,
        },
        m_Speed:{
            default:350,
            type:cc.Integer,
        },
        m_Progress:{
            default:0,
          type:cc.Integer,
          slide:true,
          min:0,
          max:685,
          step:1,
          notify(){
            this._progressChange()
            },
        },

    },
    ctor:function(){
        this.m_progressImg = false
    },
    
    _progressChange:function(){
        this.m_proImage.width = this.m_Progress
    },
    
    
    setProgress:function(pro){
      if( pro > 1 || pro < 0){
            return
        }
      var width = this.m_ProMaxLen * pro
    if( width < this.m_setWidth){
        return
    }
      this.m_setWidth = this.m_ProMaxLen * pro
//      this.m_proImage.width = setWidth
      this.m_progressImg = true
    },
    onLoad () {
        this.m_proImage.width = 0
    },

    start () {

    },

     update (dt) {
        if( this.m_progressImg ){
            if(this.m_proImage.width < this.m_setWidth){
                this.m_proImage.width += dt * this.m_Speed
            }
            if(this.m_proImage.width >= this.m_ProMaxLen){
                this.m_progressImg = false
                if( this.finishCallBack != null){
                    this.finishCallBack()
                }
            }
        }
    },
});
