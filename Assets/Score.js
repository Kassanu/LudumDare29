#pragma strict

public static var score = 0;
	
function Start () {
	guiText.text = "Score: " + score;
}

function Update () {
	guiText.text = "Score: " + score;
}