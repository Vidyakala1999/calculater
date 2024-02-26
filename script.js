// to display number

function DisplayNumber(num){
    inputs.value+=num;
    }
    
    // to clear all
    function clearBox()
    {
        inputs.value=''
    }
    
    //to evaluate expression
    function Evaluate(){
    // method 1
        // exp=inputs.value;
        // output=eval(exp);
        // inputs.value=output
    
        // method 2
    
        inputs.value=eval(inputs.value)
    }
    
    // to clear one by one
    function RemoveLast()
    {
        inputs.value=inputs.value.slice(0,-1);
    }
