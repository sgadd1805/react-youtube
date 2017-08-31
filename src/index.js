import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyCWEF881y13NutU-lLt5Dd802kteXMdi5Y';


class App extends Component{
    constructor(props){
        super(props);

        this.state = {videos: [], selectedVideo: null};

        this.videoSearch('surfboard');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) =>{
            this.setState({videos: videos, selectedVideo: videos[0]});
        });
    }

    render() {
        const videoSearch = _.debounce((term) => this.videoSearch(term), 300);

        return (<div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                videos={this.state.videos}/>
        </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));