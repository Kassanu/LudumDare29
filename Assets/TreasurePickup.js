#pragma strict

public var pickupClip : AudioClip;

function OnTriggerEnter2D(other: Collider2D) {
	if (other.tag == "Player") {
		Score.score += 1;
		AudioSource.PlayClipAtPoint(pickupClip, transform.position);
		Destroy(gameObject);
	}
}