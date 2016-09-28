#pragma strict
         
 var drawCrosshair = true;
         
 var crosshairColor = Color.white;   //The crosshair color
         
 var width : float = 3;      //Crosshair width
 var height : float = 35;     //Crosshair height
         
 class spreading{
     var spread = 20.0;          //Adjust this for a bigger or smaller crosshair
     var maxSpread = 60.0;
     var minSpread = 20.0;
     var spreadPerSecond = 30.0;
     var decreasePerSecond = 25.0;
 }
 var spread : spreading;
         
 private var tex : Texture2D;
         
 private var lineStyle : GUIStyle;
         
 function Awake (){
     tex = Texture2D(1,1);
     SetColor(tex, crosshairColor); //Set color
     lineStyle = GUIStyle();
     lineStyle.normal.background = tex;
 }
 function Update (){
     if(Input.GetButton("Fire1")){
         spread.spread += spread.spreadPerSecond * Time.deltaTime;       //Incremente the spread
         Fire();
     }else{
         spread.spread -= spread.decreasePerSecond * Time.deltaTime;      //Decrement the spread        
     }
     
     spread.spread = Mathf.Clamp(spread.spread, spread.minSpread, spread.maxSpread);  
 }
         
 function OnGUI (){
     var centerPoint = Vector2(Screen.width / 2, Screen.height / 2);
                
     if(drawCrosshair){
         GUI.Box(Rect(centerPoint.x - width / 2, centerPoint.y - (height + spread.spread), width, height), "", lineStyle);
         GUI.Box(Rect(centerPoint.x - width / 2, centerPoint.y + spread.spread, width, height), "", lineStyle);
         GUI.Box(Rect(centerPoint.x + spread.spread, (centerPoint.y - width / 2), height , width), "", lineStyle);
         GUI.Box(Rect(centerPoint.x - (height + spread.spread), (centerPoint.y - width / 2), height , width), "", lineStyle);
     }   
 }
 
 function Fire(){
     //Carry out your normal shooting and stuff
 }
     //Applies color to the crosshair
 function SetColor(myTexture : Texture2D, myColor : Color){
     for (var y : int = 0; y < myTexture.height; ++y){
         for (var x : int = 0; x < myTexture.width; ++x){
             myTexture.SetPixel(x, y, myColor);
         }
     }
     
     myTexture.Apply();
 }