#pragma strict


function Update () {
	transform.Rotate(
	new Vector3(0,Input.GetAxis("Horizontal")*30.0*Time.deltaTime,0),
	Space.Self
	);
}