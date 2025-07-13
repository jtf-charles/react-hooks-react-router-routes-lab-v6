import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import NavBar from "./components/NavBar";
import ErrorPage from "./pages/ErrorPage";


const routes = [
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />, // NavBar toujours affichée
    children: [
      { path: "/", element: <Home /> },
      { path: "/directors", element: <Directors /> },
      { path: "/actors", element: <Actors /> },
      { path: "/movie/:id", element: <Movie /> },
    ],
  },
];

export default routes;





// const routes = [
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/directors",
//     element: <Directors />
//   },
//   {
//     path: "/actors",
//     element: <Actors />,
//   },
//   {
//     path: "/movie/:id",
//     element: <Movie />,
//   },
//   ];

// export default routes;