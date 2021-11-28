import style from '../styles/home.module.css'

export default function Novo(){
    return(
    <div>
      
        
        <div style ={{
            position: 'absolute',
            width: '86%',
            boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
            backgroundImage: 'linear-gradient(to right, #2a7592, #8ac8d1,#2a7592)',
            margin: '8%',
            borderRadius: '14px',
            border: '9px solid #2a7592',
            paddingBottom: '10px',
            
        }}>
           
           
            
          <input style = {{
                marginLeft: '2%',
                width: '96%',
                fontSize: '40px',
                backgroundColor: 'white',
                border: '25px solid white',
                borderRadius: '14px',
                margin: '15px',
                paddingRight: 'auto',
                paddingLeft: '20px',
              
          }}
            type="search" placeholder='Aluno'>
          </input>
          <input style = {{
              marginLeft: '2%',
              width: '96%',
              fontSize: '40px',
              backgroundColor: 'white',
              border: '25px solid white',
              borderRadius: '14px',
              margin: '15px',
              paddingRight: 'auto',
              paddingLeft: '20px',
          }}
            type="search" placeholder='RA'>
          </input>
          <input style = {{
              marginLeft: '2%',
              width: '96%',
              fontSize: '40px',
              backgroundColor: 'white',
              border: '25px solid white',
              borderRadius: '14px',
              margin: '15px',
              paddingRight: 'auto',
              paddingLeft: '20px',
          }}
            type="search" placeholder='Data'>
          </input>
          <input style = {{
              marginLeft: '2%',
              width: '96%',
              fontSize: '40px',
              backgroundColor: 'white',
              border: '25px solid white',
              borderRadius: '14px',
              margin: '15px',
              paddingRight: 'auto',
              paddingLeft: '20px',
          }}
            type="search" placeholder='Ocorrência'>
          </input>
        <div>
          <button className = {style.button} style = {{
              width: '30%',
              marginLeft: '20%',
              marginRight: '2%'

          }}>Cadastrar</button>
          <a href = '../busca'>
          <button className = {style.button} style = {{ 
              width: '30%',
              marginRight: '20%',
              marginRight: '2'
             
          }}>Voltar</button></a>

        </div>


        </div>
       
      


    </div>

    
    )
}