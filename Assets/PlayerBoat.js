#pragma strict

public var moveForce = 10f;

function Start () { }

function Update () {
	var h = Input.GetAxis("Horizontal");
	var v = Input.GetAxis("Vertical");
	
	transform.position.x += h*moveForce*Time.deltaTime;
	transform.position.y += v*moveForce*Time.deltaTime;
}