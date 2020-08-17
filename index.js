let userController = new userController("form-user-create", "table-users");









/* esse bloco foi todo subistituido pelo bloco logo abaixo que executa a mesma coisa mas de maneira mais limpa
var name = document.querySelector('#exampleInputName');
var gender = document.querySelector('#form-user-create [name=gender]:checked');
var birth = document.querySelector('exempleInputBirth');
var coutry = document.querySelector('exempleInputCountry');
var email = document.querySelector('exempleInputEmail');
var password = document.querySelector('exempleInputPassword');
var photo = document.querySelector('exempleInputFile');
var admin = document.querySelector('exempleInputAdimin');
*/

// Abaixo estamos fazendo um procura pelos campos do form-user-create que é o id do campo do 'Novo Usuario'
/*var fields = document.querySelectorAll('#form-user-create [name]');
var user = {}; //essa varialvel é um Json - video 35

function addLine(dataUser){

   

   

document.getElementById('table-users').innerHTML=`
<tr>
     td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
     <td>${dataUser.name}</td>
     <td>${dataUser.email}</td>
     <td>${dataUser.admin}</td>
     <td>${dataUser.birth}</td>
     <td>
        <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
        <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
     </td>
</tr>
`;


}



/*fields.forEach(function(field,index){

    if (field.name =='gender'){

        if(field.checked){
            user[field.name] = field.value;
        }

    }else{
        user[field.name] = field.value;
    }

}); 

//abaixo video 36 addeventlisner
    document.getElementById('form-user-create').addEventListener('submit', function(event){

        event.preventDefault(); //aqui esta cancelando o evento padrão do formulario
        
        fields.forEach(function(field,index){
            if (field.name == 'gender'){
            
            if (field.checked){
                user[field.name] = field.value;
            }

        } else {
            user[field.name] = field.value;
        
        }

        });
        

    var objectUser = new User(user.name,
         user.gender,
         user.birth,
         user.country, 
         user.email, 
         user.password, 
         user.photo,
         user.admin
         );

        addLine(user);

    });
*/
