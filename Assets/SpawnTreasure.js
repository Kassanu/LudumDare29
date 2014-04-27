#pragma strict

public var spawnTime = 5f;
public var prefab : GameObject;
public var spawners : GameObject[];

function Start () {
	InvokeRepeating("Spawn", 0, spawnTime);
}

function Spawn () {
		var n = Random.Range(0,spawners.length);
		
		while (spawners[n].GetComponent(TreasureSpawner).treasureSpawned) {
			n = Random.Range(0,spawners.length);
		}

		Instantiate(prefab, spawners[n].transform.position, spawners[n].transform.rotation);
		spawners[n].GetComponent(TreasureSpawner).SpawnTreasure();
		
}