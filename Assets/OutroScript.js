#pragma strict

function Start () {

}

function Update () {
	var quit = Input.GetKeyDown("q") || Input.GetKeyDown("escape");
	var startGame = Input.GetKeyDown("r");
	
	if (quit)
		Application.Quit();
		
	if (startGame)
		Application.LoadLevel(0);
}