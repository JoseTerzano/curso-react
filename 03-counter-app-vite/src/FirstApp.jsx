// <> </> sinonimo de Fragmento
import PropTypes from 'prop-types';


export const FirstApp = ({title='No hay titulo', subTitle='No hay subtitulo', name='terzano Jose'}) => {
    //console.log(props);
    

  return (
    <>
        <h1 data-testid="test-title">{ title }   </h1>
        {/*<code> { JSON.stringify(newMessage) } </code>*/}
        <p>{subTitle}</p>
        <p>{subTitle}</p>
        <p>{name}</p>
    
    </>

  )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,

};

//Ya no se usa, mejor ponemos por defecto en la funcion
//FirstApp.defaultProps = {
//  title: "No hay titulo",
//};

//Dentro de las llaves queremos poner una variable.
//Se colocan las llaves en donde ponemos una expresion permitida por JS que no sea un objeto entero 