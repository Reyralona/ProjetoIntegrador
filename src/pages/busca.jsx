import newstyles from '../styles/newstyle.module.css'
import styles from '../styles/Home.module.css'
import { IconeProcura } from '../components/icones'
import { FaSearch } from 'react-icons/fa';
import Link from 'next/dist/client/link';




export default function Busca(){
    return(
  <div> 
     <img style ={{
        position: 'absolute',
        marginLeft:'15px'
        
        
      }}src='https://i.imgur.com/hmIOEfI.png' width='80' height='80'/>
        

      
      <div className={newstyles.button} style = {{
        display: 'flex',
        backgroundImage: 'linear-gradient(to right, #2a7592, #8ac8d1,#2a7592)',
        
        
}}>   

      <h1 class="flex-container" style={{
        paddingRight: '100px'
      }}></h1>


         <a className={newstyles.button} style = {{
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: '10px',
            margin: '10px',
            padding: '10px',
            fontSize: '30px'          
         }}>
           
           <div style={{
             paddingRight: '1px',
             paddingTop: '6px',
             margin: '0px',
             fontSize: '20px',
            
           }}>
            <FaSearch></FaSearch>
            </div>       
           
           <input className = {newstyles.searchbar} style ={{
             width: '450px',
             padding: '10px',
             borderColor: 'white',
             border: '0px solid transparent',
             
             
           }} 
            
            type="search" placeholder='Procurar . . .'>
              
           </input>

          
         </a>
         

         <div className = {newstyles.dropdown} style ={{
           padding: '15px',
           
         }}>
             <button className = {newstyles.dropbtn}>Tipo de Busca</button>
             <div className = {newstyles.dropdown_content}>
               <a href="#">Tipo 1</a>
               <a href="#">Tipo 2</a>
               <a href="#">Tipo 3</a>
             
             </div>

           </div>
      
         <div style = {{
           marginLeft: '600px'
           
         }}>
          <a href="../novo">
          <button className = {newstyles.buttonNew}>
            Novo
            </button></a>
         <div>
            
          </div>  
        </div>

      
  
      </div>
    
      <div style = {{
         boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
         //backgroundImage: 'linear-gradient(white)',
         color: 'white',
         margin: '50px',
         borderRadius: '10px',
         border: '4px solid #2a7592',
          
      }}>
    <table id="customers" style ={{
      color: '#27302e',
      paddingTop: '20px',
      paddingBottom: '20px',
      margin: '40px',
      width: '75%',
      fontSize: '20px',
      textAlign: 'left',    
      borderRadius: '10px',
      marginLeft: 'auto',
      marginRight: 'auto',
      
    
    }}>
       <tr style={{
         fontSize: '26px',
         textAlign: 'left',
       }
       }>
         <th>Registro de Aluno</th>
         <th>Nome</th>
         <th>Sala</th>
       </tr>
       <tr>
         <td>Número</td>
         <td>Nome</td>
         <td>1º A</td>
      </tr>
      
  </table>
  </div>

  </div>
      


  )
}

  
