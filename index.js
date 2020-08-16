
var name = document.querySelector('#exampleInputName');
var gender = document.querySelector('#form-user-create [name=gender]:checked');
var birth = document.querySelector('exempleInputBirth');
var coutry = document.querySelector('exempleInputCountry');
var email = document.querySelector('exempleInputEmail');
var password = document.querySelector('exempleInputPassword');
var photo = document.querySelector('exempleInputFile');
var admin = document.querySelector('exempleInputAdimin');


// Abaixo estamos fazendo um procura pelos campos do form-user-create que é o id do campo do 'Novo Usuario'
var fields = document.querySelectorAll('#form-user-create [name]');
var user = {}; //essa varialvel é um Json - video 35

fields.forEach(function(field,index){

    if (field.name =='gender'){

        if(field.checked){
            user[field.name] = field.value;
        }

    }else{
        user[field.name] = field.value;
    }

});

