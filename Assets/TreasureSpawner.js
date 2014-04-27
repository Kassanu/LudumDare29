#pragma strict

public var treasureSpawned = false;

function Start () {

}

function Update () {

}

function SpawnTreasure() {
	treasureSpawned = true;
	yield WaitForSeconds(10);
	treasureSpawned = false;
}