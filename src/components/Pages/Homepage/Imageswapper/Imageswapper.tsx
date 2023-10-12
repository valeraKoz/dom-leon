import { time } from 'console';
import React from 'react'

interface IState{
    currentImage: number,
    images: string[],
    opacity: number
}

interface IProps{
    images: string[],
    delay: number
}

export default class ImageSwapper extends React.Component<IProps, IState>{
    constructor(props:any){
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.opacityAdd = this.opacityAdd.bind(this);
        this.opacityRemove = this.opacityRemove.bind(this);
        this.state = {
            currentImage: 0,
            images: props.images,
            opacity: 0
        };
    };

    switchImage(){
        if(this.state.currentImage < this.state.images.length - 1){
            this.setState({
                currentImage: this.state.currentImage + 1
            })
        } else {
            this.setState({
                currentImage: 0
            })
        }
    }
    opacityAdd(){
        let that = this;
        setTimeout(function func(){
            if( that.state.opacity > 1 ){
                return;
            } else{
                that.setState({
                    opacity: that.state.opacity + 0.1
                })
                setTimeout(func, 40);
            }
        })
    }
    opacityRemove(){
        let that = this;
        setTimeout(function func(){
            if( that.state.opacity <= 0 ){
                return;
            } else{
                that.setState({
                    opacity: that.state.opacity - 0.1
                })
                setTimeout(func, 60);
            }
        })
    }

    componentDidMount(): void {
        // Запускает свап картинок 
        setInterval(this.switchImage, this.props.delay)
        // Изменение опасити для 1 слайда
        setTimeout(this.opacityAdd, this.props.delay - 700);
        setTimeout(this.opacityRemove, this.props.delay);
        // Изменение опасити для всех остальных слайдов
        setInterval(()=>{
            setTimeout(this.opacityAdd, this.props.delay - 700);
            setTimeout(this.opacityRemove, this.props.delay);
        }, this.props.delay)
    }

    render(){
        return(
            <>
                <img src={this.state.images[this.state.currentImage]}/>
                <div className='image-swapper__blur' style={{opacity: this.state.opacity}}>123</div>
            </>
            
        )
    }
}



