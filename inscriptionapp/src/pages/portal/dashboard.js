import { Component } from 'react';

// getData = async(table = true) =>{
//      let response;
//      const token = sessionStorage.getItem("user");
//      console.log(token)
//      if(table){
//           response = await fetch(`/authenticate/etudiant/${token}`);
//      }else{
//           response = await fetch(`/authenticate/user/${token}`);
//      }
//   const body = await response.json();
//   if(body){
//        if(table){
//             this.setState({role:"etudiant"})
//             return true
//        }else{
//             this.setState({role:"admin"})
//             return true;
//        }
       
//   }

class Dashboard extends Component{

     state ={
          token:""
        }

        getData = async(table = true) =>{
             let response;
             const token = sessionStorage.getItem("user");
             console.log(token)
             if(table){
                  response = await fetch(`/authenticate/etudiant/${token}`);
             }else{
                  response = await fetch(`/authenticate/user/${token}`);
             }
          const body = await response.json();
          if(body){
               if(table){
                    this.setState({role:"etudiant"})
                    return true
               }else{
                    this.setState({role:"admin"})
                    return true;
               }
               
          }
          
          if(!body){
             this.getData(false)
          }
          return body[0]
        }
        componentDidMount() {
          this.getData()
            .then(res=>{
              const data = res;
              console.log(res)
              this.setState({formation: data});
            })
      
        }
      
        
   
     render(){
          const {role} =this.state;
          console.log(this.state.role)
         
     return (
          <div className="page loading">
               <h1>Loading ....</h1>
          </div>
     )
     }
   }


export default Dashboard
