#pragma strict

function Start () {

}

function Update () {
	var quit = Input.GetKeyDown("q") || Input.GetKeyDown("escape");

	if (quit)
		Application.Quit();

}