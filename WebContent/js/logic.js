function clearText(){
  		document.getElementById("errorMessage").innerHTML="";
  	}
  	
    function calfact() {
    	  var num=document.calform.fact.value;
    	  if(num.length==0){
    		   document.getElementById("errorMessage").innerHTML="Num cannot be empty";
    		   document.calform.fact.focus();
    		   return;
    	  }
    	  var sum=1;
    	  for(var x=2;x<=num;x++){
    		  sum=sum*x;
    	  }
    	  document.calform.result.value=sum;
  	}