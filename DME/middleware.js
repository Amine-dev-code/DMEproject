
export function isAdmin(to, from, next) {
   let auth=localStorage.getItem('token');
   let userIsAdmin=localStorage.getItem('role');
    // For example, check if the user has the 'admin' role in your authentication state.
    if (auth && userIsAdmin=='doctor') {
      next(); // Proceed to the next route.
    } else if(!auth) {
      return next('/login') // Redirect to an unauthorized page or handle it as needed.
    }
    else{
        return next('/analytics')
    }
  }
  
  export function isUser(to, from, next) {
    let auth=localStorage.getItem('token');
    let IsUser=localStorage.getItem('role');
     // For example, check if the user has the 'admin' role in your authentication state.
     if (auth && IsUser=='patient') {
       next(); // Proceed to the next route.
     } else if (!auth) {
        return next('/login'); // Redirect to an unauthorized page or handle it as needed.
     }
     else{
        return next('/patientHome')
     }
  }
  
  
 export function Auth(to, from, next) {
  let auth=window.localStorage.getItem('token');
   // For example, check if the user has the 'admin' role in your authentication state.
   if (auth) {
     router.go(-1); // Proceed to the next route.
   } 
   else{
      return next();
   }
}