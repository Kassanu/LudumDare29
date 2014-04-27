#pragma strict

public var explosion : AudioClip;

function Start () {

}

function Update () {

}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "Player") {
		Score.score = 0;
		AudioSource.PlayClipAtPoint(explosion, transform.position);
		Application.LoadLevel(2);
	}
}