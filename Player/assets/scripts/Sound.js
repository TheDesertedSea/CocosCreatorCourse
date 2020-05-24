
cc.Class({
    extends: cc.Component,

    properties: {
        ButtonSound: {
                    type:cc.AudioClip, // use 'type:' to declare Texture2D object directly
                    default: null,     // object's default value is null
                },
        
    },
    
    

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        cc.audioEngine.play(this.bgm, true, 1)
    },

    start () {

    },
    
    onPlaySoundEffect:function(target, data){
        if( data == 'button' ){
            cc.audioEngine.play(this.ButtonSound, false, 1)
        }
        
    }
    // update (dt) {},
});
