1.Create a Function


function Check(obj1){
    obj1.setter=function(){
      console.log(this.name)
    }
 }
 2.Delete a Parameter

 function Check(obj1) {
    delete obj1.rollno;
    return(obj1)
}

3.Check whether the Package is Dream Package or not


function Check(obj1) {
    if ((obj1.salary) >500000){
      return ("Dream")
    }
    else{return("NotDream")}
 }

 4.Check whether the Object has a parameter or not

 
function Check(obj1) {
    if((Object.keys(obj1)).length !== 0) {
       return true;
     } 
     
     return false;
 }
 5.Merge the Objects

 function Check(obj1,obj2) {
    for(let [key, value] of Object.entries(obj2)) {
     obj1[key] = value;
  }
  
  return obj1;
}

6.Object Multiplyer

function Check(a,obj1) {
    obj1.id =obj1.id*a;
    obj1.houseno=obj1.houseno*a;
    return(obj1)
    }
    
 7.Find the  sum of Object Members

    function Check(obj) {
        let x=obj.p1 + obj.p2 + obj.p3;
        return (x)
      }

 8.Check whether the Objects are same or not.

      
function check(obj1,a,b) {
    if(obj1.name === a && obj1.id === b){
     return true
   }
   else{return false}
}
