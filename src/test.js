const string=`.skin *{
  box-sizing: border-box;
  margin: 0;padding: 0;
}
.skin *::after,.skin *::before{
    box-sizing: border-box;
}
.skin{
    background: #FFE50C;
     min-height: 50vh;
     position:relative;
}

.nose{
    position: relative;
    left: 50%;
    top: 145px;
    border: 10px solid;
    border-color: black transparent black transparent;
    border-bottom: none;
    width: 0;
    height: 0;
    margin-left: -10px;
    z-index: 30;
}
@keyframes wave {
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(-10deg);
    }
    66%{
        transform: rotate(10deg);
    }
    100%{
        transform: rotate(0);
    }
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 200ms infinite linear;
}
@media(hover: hover) and (pointer: fine) {
  .nose:hover {
    transform-origin: center bottom;
    animation: wave 200ms infinite linear;
  }
}
.yuan{
    position: absolute;
    background: black;
    width: 20px;
    height: 6px;
    top:-16px;
    left: -10px;
    border-radius: 10px 10px 0 0 ;
}
.eye{
    position: absolute;
    border: 3px solid black;
    width: 60px;
    height: 60px;
    left: 50%;
    top:100px;
    margin-left: -30px;
    border-radius: 50%;
    background: #2e2e2e;
}
.eye::before{
    content: '';
    display: block;
    border: 3px solid black;
    width: 28px;
    height: 28px;
    position: relative;
    background: #fff;
    left: 4px;
    top: 2px;
    border-radius: 50%;
}
.eye.left{
    transform: translateX(-110px);
}
.eye.right{
    transform: translateX(110px);
}
.mouth{

    width: 176px;
    height: 176px;
    position: absolute;
    left: 50%;
    top: 166px;
    margin-left: -88px;
    z-index: 20;
    background: #FFE50C;

}
.mouth .up .lip{
    border: 3px solid;
    position: absolute;
    width: 88px;
    height: 26px;
    z-index: 10;
    background: #FFE50C;
}
.mouth .up .lip.left{
    margin-left: 2px;
    border-color: transparent transparent transparent black;
    border-radius: 0 0 0 50px;
    transform: rotate(-18deg) translateZ(0);/* translateZ（0）去z轴产生的虚线锯齿*/
}
.mouth .up .lip.right{
    margin-left: 84px;
    border-color: transparent black transparent transparent;
    border-radius: 0 0 50px 0;
    transform: rotate(18deg) translateZ(0);
}
.mouth .down{
    width: 150px;
    height: 168px;
    position: absolute;
    left: 50%;
    margin-left: -75px;
    top: 8px;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 3px solid black;
    width: 150px;
    height: 900px;
    position: absolute;
    left: 50%;
    margin-left: -75px;
    bottom: 0;
    border-radius: 285px/1200px;
    background: #AD0000;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width: 140px;
    height: 140px;
    left: 50%;
    margin-left: -70px;
    position: absolute;
    bottom: 0;
    border-radius: 50%;
    background: #FF3151;
}
.face{
    border: 3px solid black;
    width: 88px;
    height: 88px;
    position: absolute;
    left: 50%;
    margin-left: -44px;
    top: 200px;
    border-radius: 50%;
    background: #FF0000;
}
.face > img{
    position: absolute;
    left: 50%;
    top: 50%;
}
.face.left{
    transform: translateX(-170px);
}
.face.left>img{
    transform: rotateY(-180deg);
    transform-origin: 0 0;
}
.face.right{
    transform: translateX(170px);
}`;

const player={
    id:undefined,
    time:100,
    ui:{
        demo : document.querySelector('#demo'),
        demo2 : document.querySelector('#demo2')
    },
    n:1,
    events:{
        '#btnPause': 'pause',
        '#btnPlay':  'play',
        '#btnSlow':  'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init:()=>{
        player.ui.demo.innerText = string.substr(0,player.n);
        player.ui.demo2.innerHTML = string.substr(0,player.n);
        player.bindEvents();
        player.play();

    },

    bindEvents:()=>{
        for (let key in player.events){
            if (player.events.hasOwnProperty(key)){
                const value =player.events[key];
                document.querySelector(key).onclick = player[value];
            }

        }
    },
    run:()=>{
        player.n+=1;
        if (player.n >string.length){
            window.clearInterval(player.id)
        }
        player.ui.demo.innerText = string.substr(0,player.n);
        player.ui.demo2.innerHTML = string.substr(0,player.n);
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    },
    play:()=>{
        window.clearInterval(player.id)
        player.id = setInterval(player.run,player.time);
    },
    pause:()=>{
        window.clearInterval(player.id);
    },
    slow:()=>{
        player.pause()
        player.time =300;
        player.play();
    },
    normal:()=>{
        player.pause();
        player.time = 100;
        player.play();
    },
    fast:()=>{
        player.pause();
        player.time = 0;
        player.play();
    }
}

player.init();

