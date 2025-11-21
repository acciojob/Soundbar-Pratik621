const buttons = document.querySelectorAll(".btn:not(.stop)");
const stopBtn = document.getElementById("stopBtn");
const audios = document.querySelectorAll("audio");

audio.forEach((music)=>{
	music.pause()
})