import "./homepage.scss"
import ImageSwapper from "./Imageswapper/Imageswapper";
import ReactDOM from "react-dom";

import Main_img_1 from '../../../image/mainscreen/IMG_20230621_100339.jpg'
import Main_img_2 from '../../../image/mainscreen/IMG_20230621_100848.jpg'
import Main_img_3 from '../../../image/mainscreen/IMG_20230621_100927.jpg'
const images: string[]= [
    Main_img_1,
    Main_img_2,
    Main_img_3
]





function Homepage(){
    
    return(
        <>
            <div className="first-screen">
                <ImageSwapper images={images} delay={5000}/>
            </div>
        </>
    )
}

export default Homepage;

