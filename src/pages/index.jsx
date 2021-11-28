import Img1 from '/src/images/diario.jpg'
import Navegador from '../components/navegador'
import styles from '../styles/Home.module.css'



export default function Crud() {
   return(
    <div>
     

      <h1 style ={{
        backgroundImage: 'linear-gradient(to right, white, white, #8ac8d1',
        boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
        border: '4px solid #42c2f5',
        borderRadius: '10px',
        margin: '5px',
        paddingLeft: '170px',
        paddingTop: '40px',
        paddingBottom: '50px',
        paddingRight: '20px',
        position: 'absolute',
      }}> Diário Escolar Digital - Univesp Projeto Integrador
      </h1>  
    
      <img style ={{
        border: '1px solid white',
        borderRight: '0px',
        borderRadius: '10px',
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '0px',
        position: 'absolute',
        margin: '20px'
        
      }}src='https://i.imgur.com/M2VlDcN.jpg' width='110' height='110'/>
        

       <div className={styles.main} style={{
         
         position: 'absolute',
         marginLeft: '800px',
         marginTop: '120px'
       }}>
        
        <h1 style ={{
          
        
        }}>Nome</h1>

          <main className={styles.card} style ={{
            backgroundImage: 'linear-gradient(to right, #8ac8d1, white, #8ac8d1',
            backgroundColor: 'white'
          }}>

            <form> 
            <input className={styles.input} name="Fname"></input>
            </form>
          </main>

        <h1 style ={{
          
        }}>Email</h1>


          <a className={styles.card} style ={{
            backgroundImage: 'linear-gradient(to right,#8ac8d1, white, #8ac8d1',
            backgroundColor: 'white'
          }}>
            <form>
                 <input className={styles.input} name="Fname"></input>
            </form>
          </a>

        <h1></h1>

        <div>
          <Navegador texto = 'Login' destino = "/turmas"/>
              
        </div>  
        
    </div>
    </div>


  ) }


