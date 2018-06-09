import React, {Component} from 'react';

class LastFmComponent extends Component {

    render() {
        let json = this.props.json.topalbums.album;
        let images = [];
        for (let image = 0; image < 25; image++) {
            let imageUrl = json[image].image[2]["#text"];
            images.push(imageUrl)
        }

        const eachImage = images.map(function (imageProps) {
            return (
                <img className="box" key={imageProps} src={imageProps} />
            )
        });

        return (
            <div>
                <div className="LastFmComponent col-md-6 offset-md-3">Collage</div>
                <div className="wrapper col-md-6 offset-md-3">{eachImage}</div>
            </div>
        );
    }
}

export default LastFmComponent;
