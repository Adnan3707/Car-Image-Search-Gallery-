
import React from "react";

class ImageCard extends React.Component {
    state = { spans: 0 }
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height / (10));
        this.setState({ spans: span })
    };

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    alt={description}
                    src={urls.regular}
                    ref={this.imageRef}
                />
            </div>
        )
    }
}
export default ImageCard;