import Button from '../button/button'
import './card.scss'

const Card = ({ product }) => {
  const { name, price, desc, img } = product;
  return (
    <div className='card-container'
    >
        <div className="img-container">
            <img src={img} alt={name} />
        </div>
        <Button value="add to cart" />
      {/* <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "100%",
          backgroundPosition: "center center",
          height: 200,
          position:"relative"
          //   background
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "50%",
            transform:"translate(40%, 50%)"
          }}
        >
          <div>{name}</div>
          <div>{price}</div>
          <div>{desc}</div>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
