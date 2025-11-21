const buttons = document.querySelectorAll(".btn:not(.stop)");
const stopBtn = document.getElementById("stopBtn");
const audios = document.querySelectorAll("audio");

function stopAll() {
	audios.forEach(audio => {
		audio.pause();
		audio.currentTime = 0;
	});
}

buttons.forEach(btn => {
	btn.addEventListener("click", () => {
		stopAll();
		const sound = btn.dataset.sound;
		document.getElementById(sound).play();
	});
});

stopBtn.addEventListener("click", stopAll);
