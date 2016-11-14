#pragma strict

var BulletPrefab:GameObject;
var fire_flg:int;
var fire_count:int;

function Update () {
		transform.Rotate(
		new Vector3(Input.GetAxis("Vertical")*30.0*Time.deltaTime,0,0),
		Space.Self
		);

	if(Input.GetMouseButtonDown(0) && fire_flg == 0){
		Fire();
		fire_flg = 1;
		InvokeRepeating("Activ_bullet",0f,1f);
	}

}

function Activ_bullet(){
	fire_count++;
	if(fire_count == 3){
	fire_flg = 0;
	fire_count = 0;
	CancelInvoke();
	}
}


function Fire(){
	var bullet:GameObject = Instantiate(
		BulletPrefab,
		transform.position,
		transform.rotation
	);
	var rb:Rigidbody = bullet.GetComponent(Rigidbody);
	rb.AddForce(transform.up*100,ForceMode.VelocityChange);
}