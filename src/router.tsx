import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import App from "./App";
import Home from "./pages/Home";
import Foo from "./pages/Foo";
import Bar from "./pages/Bar";
import Foobar from "./pages/Foobar";

/**
 * @example
 * @description
 */
const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <App /> },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/foobar",
    element: <AppLayout isHidden={true} isShowSubPages={true} />,
    children: [
      { index: true, element: <Foobar /> },
      { path: "foo", element: <Foo /> },
      { path: "bar", element: <Bar /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
