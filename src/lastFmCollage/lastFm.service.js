import React from 'react';
import Request from 'react-http-request';
import LastFmComponent from "./lastFm.component";

class LastFmService extends React.Component {
    render() {
        return (
            <Request
            url='http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=guitargratke&api_key=d69e92903c14572576c5ac3e2bf3310f&format=json&period=7day'
            method='get'
            accept='application/json'
            verbose={true} >
            {
                ({error, result, loading}) => {
                    if (loading) {
                        return <div>loading...</div>;
                    } else if (result) {
                        const json = result.text;
                        return <LastFmComponent json={JSON.parse(result.text)}/>
                    }
                }
            }
        </Request>
        );
    }
}

export default LastFmService;
