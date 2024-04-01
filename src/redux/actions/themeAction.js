import { THEME_MODE } from "../constants/themeConstants"

export const toggleActionTheme=()=>(dispatch)=>{

    dispatch({type:THEME_MODE})

}