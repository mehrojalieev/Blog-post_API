import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home"
import Article from "../pages/article/Article"
import Admin from "../pages/admin/Admin"

import Create from "../routes/sub-routes/create/Create"
import Articles from "./sub-routes/articles/Articles";
import Users from "./sub-routes/users/Users";

const RouteController = () => {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="article:id" element={<Article />} />
            <Route path="admin" element={<Admin />}>
                <Route path="create" element={<Create />} />
                <Route path="create" element={<Articles />} />
                <Route path="create" element={<Users />} />
            </Route>
        </Routes>
    )

}

export default RouteController