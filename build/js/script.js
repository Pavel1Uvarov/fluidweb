var l=new Date("Feb 30, 2020 15:37:25").getTime(),d=setInterval(function(){var e=(new Date).getTime(),t=l-e,n=Math.floor(t/864e5),o=Math.floor(t%864e5/36e5),r=Math.floor(t%36e5/6e4),i=Math.floor(t/1e3%60);document.getElementById("days").innerHTML=n,document.getElementById("hours").innerHTML=o,document.getElementById("minutes").innerHTML=r,document.getElementById("seconds").innerHTML=("0"+i).slice(-2),t<0&&clearInterval(d)},1e3);simpleslider.getSlider({container:document.getElementById("myslider"),prop:"opacity",unit:"",init:0,show:1,end:0});