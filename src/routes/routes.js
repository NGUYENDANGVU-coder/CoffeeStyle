//Page
import Home from "../pages/Home";
import config from "../config";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AuthenLayout from "../layout/AuthenLayout";

 const publicRoutes = [
    {path:config.routes.home,element: Home},
    {path:config.routes.about,element: About},
    {path:config.routes.blog,element: Blog},
    {path:config.routes.cart,element: Cart},
    {path:config.routes.contact,element: Contact},
    {path:config.routes.product,element: Product},
    {path:config.routes.products,element: Products},
    {path:config.routes.profile,element: Profile},
    {path:config.routes.signin,element: SignIn,layout:AuthenLayout},
    {path:config.routes.signup,element: SignUp,layout:AuthenLayout}
]
export default publicRoutes;