#pragma strict

public var speed = 10f;
public var target : GameObject;

function Start () {
	
}

function Update () {
	var v = target.transform.position;
	v.z = -20;
	transform.position = Vector3.MoveTowards(transform.position, v, speed * Time.deltaTime);
}
