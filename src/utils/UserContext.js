import { createContext } from "react";

const UserContext = createContext({
    LoggedInUeser: "Default User",
})

export default UserContext;