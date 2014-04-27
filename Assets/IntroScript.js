#pragma strict

	var secondTextShown = false;

function Start () {

}

function Update () {
	var quit = Input.GetKeyDown("q") || Input.GetKeyDown("escape");
	var startGame = Input.GetKeyDown("space");
	
	if (quit)
		Application.Quit();
		
	if (startGame && secondTextShown == true)
		Application.LoadLevel(1);
	else if (startGame && secondTextShown == false) {
		secondTextShown = true;
		var introOneTexts = GameObject.FindGameObjectsWithTag("Intro1");
		for (var go : GameObject in introOneTexts) {
			go.guiText.enabled = false;
		}
		
		var introTwoTexts = GameObject.FindGameObjectsWithTag("Intro2");
		for (var go : GameObject in introTwoTexts) {
			go.guiText.enabled = true;
		}
	}
		
}