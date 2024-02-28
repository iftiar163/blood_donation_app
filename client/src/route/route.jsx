import { createBrowserRouter } from "react-router-dom";
import { publicRouter } from "./publicRouter";
import { privateRouter } from "./privateRouter";

// Create Route
const router = createBrowserRouter([...publicRouter, ...privateRouter]);

// Export default
export default router;
