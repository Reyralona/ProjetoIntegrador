import styles from '../styles/Home.module.css'
import Navegador from '../components/navegador'

export default function Turmas(){

    return(
        /*<div>
        <h1 styles className={styles.button}>
            <Navegador texto = 'Turma 1' destino = "/turma1" />
            <Navegador texto = 'Turma 2' destino = "/turma2" />
        </h1>
    </div>*/

   <div styles className={styles.main} style ={{
       boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
       backgroundImage: 'linear-gradient(to right, #2a7592, #8ac8d1,#2a7592)',
       margin: '50px',
       borderRadius: '10px'
   }}>


    <Navegador texto = "Voltar" destino = '../'> </Navegador> 
    


      <h1>
           <Navegador texto = "Turma 1" destino = '/turma1'> </Navegador>
           <Navegador texto = "Turma 2" destino = '/turma2'> </Navegador>
           <Navegador texto = "Turma 3" destino = '/turma3'> </Navegador>
           <Navegador texto = "Turma 4" destino = '/turma4'> </Navegador>
      </h1>
   
      <Navegador texto = "Busca" destino = '../busca'> </Navegador> 

    </div>

    )
}