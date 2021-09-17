song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("yummy.mp3");
    song2 = loadSound("Avicii.mp3")
}
function setup()
{
    canvas = createCanvas(580, 480);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video, 0,0 ,580, 480);
}