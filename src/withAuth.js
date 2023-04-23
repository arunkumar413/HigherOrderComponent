import { useState } from "react";

export function withAuth(wrappedComponent) {
  return function (props) {
    const [isLoggedIn, setLoggedIn] = useState(false);

    return isLoggedIn ? <wrappedComponent /> : <h2> please login </h2>;
  };
}
