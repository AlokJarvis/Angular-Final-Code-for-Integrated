export class UserDto{

   
    
    userName: String;
    userPassword: String;
    isAdmin: boolean;
   
    constructor(
       
       
        userName? : String,
        userPassword? : String,
        isAdmin ?: boolean
      
    ){
        
        this.userName = userName;
        this.userPassword = userPassword;
        this.isAdmin = isAdmin;
       

    }
}
