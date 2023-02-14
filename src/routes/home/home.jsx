import DirectoryItem from '../../components/directory-item/directoryItem';
import './home.scss'
const Home = () =>{
    const data = [
      {
        id: 1,
        title: "provisions",
        imageUrl:
          "https://media.istockphoto.com/id/1412238887/photo/planogram-pasta-on-shelf-in-supermarket.jpg?s=1024x1024&w=is&k=20&c=O5fzM0y5RoAgn1_uqRLUECnjZKfLD_gXRiUWJXpychM=",
        slug: "shop/provisions",
      },
      {
        id: 2,
        title: "beverages",
        imageUrl:
          "https://images.unsplash.com/photo-1577695464142-e3a24f4e88f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        slug: "shop/beverages",
      },
      {
        id: 3,
        title: "home-utensils",
        imageUrl:
          "https://media.istockphoto.com/id/542589774/photo/design-concept-of-mockup-arious-kitchenware-utensils-set-on-whit.jpg?s=612x612&w=is&k=20&c=NwtIAefYUzU5FwJb6V9tVPB4WjQEwS0ye_XYdOFNffI=",
        slug: "shop/home-utensils",
      },
      {
        id: 4,
        title: "mens",
        imageUrl:
          "https://images.unsplash.com/photo-1623596305214-19f21cbf48ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
        slug: "shop/mens",
      },
      {
        id: 5,
        title: "womens",
        imageUrl:
          "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        slug: "shop/womens",
      },
      {
        id: 6,
        title: "kids",
        imageUrl:
          "https://images.unsplash.com/photo-1611428813653-aa606c998586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",

        slug: "shop/kids",
      },
      {
        id: 7,
        title: "cosmetics",
        imageUrl:
          "https://images.unsplash.com/photo-1498843053639-170ff2122f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        slug: 'shop/cosmetics'
      },
      {
        id: 8,
        title: "others",
        imageUrl: null,
        slug: 'shop/others'
      }
    ];
    return (
      <div className="home-container">
        {data.map((el) => (
          <DirectoryItem key={el.id} category={el} />
        ))}
      </div>
    );
}
export default Home;