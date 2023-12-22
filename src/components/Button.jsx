import './Estilo.modules.css'

const Button = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <button className="button" >{props.texto}</button>
  )
}

export default Button