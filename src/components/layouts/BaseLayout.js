import Navigation from "../base/Navigation";

const BaseLayout = ({ children }) => {
    return (
      <>
        <Navigation />
        {children}
      </>
    );
  }

  export default BaseLayout;