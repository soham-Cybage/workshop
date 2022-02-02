
$(document).ready(function(){

   
    
    $('button.login').click(function(){

        var name=$("input[name='username']").val();
        var password=$("input[name='password']").val();
        console.log(name)
        console.log(password)

        $.ajax({url:"https://mocki.io/v1/bce09598-04b0-4269-a906-3f728edfeceb", type:"GET"
        ,success : function(result){
           
            if(result.username==name && result.password==password){
              $(location).attr('href',"../html/registration.html")  
            }
        }, error: function(error){
            alert("something went wrong")
        }})
    })
      
})


function validateForm(){
            
    let validation = false;

    function checkEmpty(y){

        var x = document.getElementById(y).value;
        
        if(x===""){
            return true;
        }
        return false;  
    }
    
    var ids = ["first_name","last_name","address"]
    
    for(i=0; i < ids.length ; i++){
       if(checkEmpty(ids[i])){
            alert("Please fill all the fields");
            break;
       }
       else if(i===ids.length-1)
           validation = true;
    }

}



