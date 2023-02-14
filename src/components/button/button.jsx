import './button.scss';

const Button = ({value, styleType}) =>{
    return (
        <div className='button-container'>
            <button className={styleType ? styleType : 'button'}>{value}</button>
        </div>
    )
}
export default Button;