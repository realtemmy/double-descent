import "./card.scss";

const cardItems = [
  {
    id: 1,
    title: "provisions",
    imageUrl:
      "https://media.istockphoto.com/id/1412238887/photo/planogram-pasta-on-shelf-in-supermarket.jpg?s=1024x1024&w=is&k=20&c=O5fzM0y5RoAgn1_uqRLUECnjZKfLD_gXRiUWJXpychM=",
    slug: "/categories/provision",
  },
  {
    id: 2,
    title: "beverages",
    imageUrl:
      "https://images.unsplash.com/photo-1577695464142-e3a24f4e88f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    slug: "/categories/beverages",
  },
];

const Card = () => {
  return <div className="card-container">
    {
        cardItems.map(card => <Card />)
    }
  </div>;
};

export default Card;
