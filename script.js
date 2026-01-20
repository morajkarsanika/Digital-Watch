let gettime=document.getElementById("time")
const currentTime=()=>{
    let time=new Date().toLocaleTimeString()
    gettime.textContent=time
    }
    currentTime();
    const intervalId=setInterval(currentTime,1000)
    