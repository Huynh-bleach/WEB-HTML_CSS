function Validator(options){
    

    var formElement = document.querySelector(options.form);

    console.log(options.rules);

    if(formElement){
           options.rules.forEach(function(rule){

            console.log(rule);
           });

    }

}

Validator.isRequired = function(selector){
    return  {
        selector: selector,
        test: function(){

        }
    }

}

Validator.isEmail = function(selector){

    return  {
        selector: selector,
        test: function(){
            
        }
    }


}

