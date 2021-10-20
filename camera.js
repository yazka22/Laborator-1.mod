 var video=document.getElementById("video");
 //_________________________________
 function on_cam_success(stream){
        video.srcObject=stream;
		}
//__________________________________
function on_cam_error(err)
{
   alert("error."+err.message);
 }
 //__________________________________
 var constraints={audio:false,video:true};
 navigator.mediaDevices.getUserMedia(constraints)
 .then(on_cam_success)
 .catch(on_cam_error)
 //___________________________________
 function capteaza()
 {
   var c=document.getElementById("canvas");
   c.width=video.width;
   c.height=video.height;
   var ctx=c.getContext("2d");
   ctx.drawImage(video,0,0,640,480);
   }
   //___________________________________
   video.addEventListener("touchstart",capteaza);
   video.addEventListener("mousedown",capteaza);