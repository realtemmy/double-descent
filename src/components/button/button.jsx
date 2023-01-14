import './button.scss';

const Button = ({value}) =>{
    return (
        <div className='button-container'>
            <button className='button'>{value}</button>
        </div>
    )
}
export default Button;