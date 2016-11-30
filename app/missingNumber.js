module.exports={
 findMissing: function(myArr1, myArr2){
  
 myArr1=myArr1.sort();
 myArr2=myArr2.sort();
 
 if(myArr1.length==myArr2.length)
 {
   var position=1;
   for(i=0; i<myArr1.length;i++){
     if(myArr1[i]!=myArr2[i]){
       position=0;
     }
   }
 }
 
 if (position==1){
   return 0;
 }
 
 
 myArr1=myArr1.sort();
 myArr2=myArr2.sort();
 
 var min, max;
 if(myArr1.length<myArr2.length){
   min=myArr1;
   max=myArr2;
 }
 else{
    min=myArr2;
   max=myArr1;
 }
 

   for (var j=0; j<max.length; j++){
       if (max[j]!=min[j]){
         return max[j];
     }
   }
 
}
 
};