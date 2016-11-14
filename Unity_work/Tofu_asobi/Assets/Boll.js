#pragma strict

var boll:GameObject;

function Update () {
	if(Input.GetMouseButtonDown(0)){
	cleate();
	}
}

function cleate(){
 Instantiate(boll,Vector3(0,10,0),Quaternion.identity);
}