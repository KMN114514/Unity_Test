#pragma strict

var ExplosionPrefab:GameObject;

function OnCollisionEnter (WHO : Collision) {
	Instantiate(
	ExplosionPrefab,
	transform.position,
	transform.rotation
	);
	Destroy(gameObject);
}

