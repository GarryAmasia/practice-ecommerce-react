// import logo from "./logo.svg";
// import "./App.css";
// import "./categories.style.scss";
// import { Outlet } from "react-router-dom";
import { DirectoryComponent } from "../../components/directory/DirectoryComponent";
import { Outlet } from "react-router-dom";

export const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Accessories",
      imgUrl:
        "https://www.bcf.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dweb7d6b03/images/563598/BCF_563598_hi-res.jpg?sw=1000&sh=1000&sm=fit&q=80",
    },
    {
      id: 2,
      title: "Lines",
      imgUrl:
        "https://cdn10.bigcommerce.com/s-ruolvs/products/306/images/3077/GSR_PEFiber_100lb_1200m_5_Colour_A-30__72609.1609048590.1280.1280.JPG?c=2",
    },
    {
      id: 3,
      title: "Lures",
      imgUrl:
        "https://www.bcf.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw149552a9/images/588874/BCF_588874_coraltrout_hi-res.jpg?sw=1000&sh=1000&sm=fit&q=80",
    },
    {
      id: 4,
      title: "Rods",
      imgUrl: "https://m.media-amazon.com/images/I/61HICZ-9IZL._AC_SL1400_.jpg",
    },
    {
      id: 5,
      title: "Reels",
      imgUrl:
        "https://www.anacondastores.com/medias/BP90167119-black.jpg-SPOTWF-productHero?context=bWFzdGVyfGltYWdlc3wzNTkzN3xpbWFnZS9qcGVnfGltYWdlcy9oYWQvaDFhLzExNjY0NTA1OTI5NzU4L0JQOTAxNjcxMTktYmxhY2suanBnX1NQT1RXRl9wcm9kdWN0SGVyb3xiNGJlMmVhOGNiYTI0YTQ3MmY3YjM1ZWU4M2VmNWUzNTU3MjE0NjQwMjRhMTQyNjFhNjQ2NWU3MDVhN2Y4MmRi",
    },
  ];
  return (
    <div>
      <Outlet />
      <DirectoryComponent categories={categories} />
    </div>
  );
};

// export default Home;
