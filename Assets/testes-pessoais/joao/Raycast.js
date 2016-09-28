#pragma strict

function Start () {
	
}

function Update() {
     var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
     var hit : RaycastHit;
     if (Physics.Raycast (ray, hit, 100)) {
          if(hit.collider.tag == "Object") {
                 Debug.Log("Object");
             }
     }
 } 