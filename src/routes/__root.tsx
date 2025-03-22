import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "../components/header";
import NavMenu from "../components/nav-menu";
import Footer from "../components/footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="min-h-screen h-fit pt-3 bg-background-primary">
        <Header />
        <NavMenu />
        <Outlet />
        <Footer />
        <TanStackRouterDevtools />
      </div>
    </>
  );
}
