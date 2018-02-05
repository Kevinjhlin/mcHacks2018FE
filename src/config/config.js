import {createBrowserHistory} from 'history'
import axios from "axios"


//=============== Global Axios Settings ================


//Note: The better approach is to create an instance rather than using global settings and importing that instance
axios.defaults.baseURL = 'http://25.20.20.33:9000';


export const history = createBrowserHistory()

