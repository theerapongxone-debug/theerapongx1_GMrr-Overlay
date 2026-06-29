loadConfig().then(config => {

    document.getElementById("brand").textContent =
        config.brand;

    document.getElementById("streamer").textContent =
        config.streamer;

    document.getElementById("youtube").textContent =
        config.youtube;

    document.getElementById("twitch").textContent =
        config.twitch;

});

function updateClock(){

    const now = new Date();

    const time =
        now.toLocaleTimeString("th-TH",{

            hour:"2-digit",

            minute:"2-digit"

        });

    document.getElementById("clock").textContent =
        time;

}

updateClock();

setInterval(updateClock,1000);
