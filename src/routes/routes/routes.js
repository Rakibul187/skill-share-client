import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/', element:
            <>
                <h1>This is home page !!</h1>
                <Main></Main>
            </>
    }
])