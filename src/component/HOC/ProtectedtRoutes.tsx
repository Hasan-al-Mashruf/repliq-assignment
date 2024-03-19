import Authentication from "../../pages/Authentication/Authentication";

const ProtectedRoutes = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    // Retrieve user information from localStorage
    const userDataString = localStorage.getItem("userData");
    const user = userDataString ? JSON.parse(userDataString) : null;
    // Check if user exists
    if (!user) {
      return <Authentication />;
    }

    // If user exists, render the provided component
    return <Component {...props} />;
  };
};

export default ProtectedRoutes;
