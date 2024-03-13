import { toast } from "react-toastify";

/**
 * Create Toast Alert
 */

const createAlert = (msg, type = "error") => {
  toast[type](msg);
};

// Export Default
export default createAlert;
