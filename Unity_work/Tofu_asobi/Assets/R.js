#pragma strict

function Update () {
	if(Input.GetKey(KeyCode.z)){
		transform.position = new Vector3(0f,transform.position.y + 0.1f,0f);
	}

}