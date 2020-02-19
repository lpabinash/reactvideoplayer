import React from 'react';
import classes from './VideoCard.module.css';
import Axios from 'axios';

var localData=[];


class VideoComponent extends React.Component{
   
    state={
        VideoList:[],
        VideoData:[],
        vimeoId:190062231,
        title:"Croissants | Flour and Stone",
        description:"There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.",
        like:"yellow",
        save:"yellow",
        views:"22.5",
        key2:1,
    }

    

    componentDidMount(){
        Axios.get('http://5dfb77c50301690014b8fbdb.mockapi.io/videocard')
        .then((response) => {
                  console.log(response.data);
                  this.setState({VideoList: [...response.data]})
                //   return response.JSON();
                })
                Axios.get('http://5dfb77c50301690014b8fbdb.mockapi.io/videodata')
        .then((resp) => {
                  console.log(resp.data);
                  this.setState({VideoData: [...resp.data]})
                  localStorage.setItem("videoData", JSON.stringify(resp.data));
                //   return response.JSON();
                })
    }
    localData = JSON.parse(localStorage.getItem("videoData"));
    onGrayClick=(e)=>{
        // console.log(e.target.key);
        let clickedItem = e.target.getAttribute('key1');
        this.setState({key2:clickedItem});
        console.log(clickedItem);
        for(let i=0;i<this.state.VideoData.length;i++){
            if(clickedItem === this.state.VideoData[i].id){
                this.setState({vimeoId: this.state.VideoData[i].vimeoId});
                this.setState({title: this.state.VideoData[i].title});
                this.setState({description: this.state.VideoData[i].description});
                if(this.state.VideoData[i].isLiked === true || this.state.VideoData[i].isLiked === "true"){
                    this.setState({like:"yellow"});
                }
                else{
                    this.setState({like:"black"});
                }
                if(this.state.VideoData[i].isSaved === true || this.state.VideoData[i].isSaved === "true") {
                    this.setState({save:"yellow"});
                }
                else {
                    this.setState({save:"yellow"});
                }
                let V=this.state.VideoData[i].views
                this.setState({views:V/1000})
    }
}
    }

    onheartclick=()=>{
        // console.log(this.localData[this.state.key2-1].isLiked)
        // if(this.localData[this.state.key2-1].isLiked===true||this.localData[this.state.key2-1].isLiked==="true"){
        //     this.setState({like:"black"});
        //     localData[this.state.key2-1].isLiked="false";
        //     localStorage.setItem("videoData", JSON.stringify(localData));
        // }else{
        //     this.setState({like:"yellow"});
        //     localData[this.state.key2-1].isLiked="true";
        //     localStorage.setItem("videoData", JSON.stringify(localData));
        // }
        // if(this.state.VideoData[])
        if(this.state.like === "yellow"){
            this.setState({like:"black"})
        }else{
            this.setState({like:"yellow"})
        }
    }

    onbookmarkclick=()=>{
        if(this.state.save === "yellow"){
            this.setState({save:"black"})
        }else{
            this.setState({save:"yellow"})
        }
    }

    render(){
      const videoCards=this.state.VideoList.map((item)=>{
      return (<div key ={item.id} className={classes.gray} onClick={this.onGrayClick} >
                  <img src={item.thumbnail} key1 ={item.id}/>
                  <h2 key1 ={item.id}>{item.title}</h2> 
                </div>
        )})
        return(
       
         <div className={classes.videowrapper}>
         <div className={classes.videoplayer}>
         <div className={classes.videoarea}>
            <div className={classes.frame}>
            <iframe className={classes.video_player} src={"https://player.vimeo.com/video/"+this.state.vimeoId} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true ">
            </iframe>
            <div className={classes.likes}>
            <h2 className={classes.views}>{this.state.views}K views</h2>
            <div className={classes.save}>
                <i className={classes.heart} style={{color: this.state.like}} onClick={this.onheartclick} className="fas fa-heart fa-2x"></i>
                <i className={classes.bookmark}style={{color: this.state.save}} onClick={this.onbookmarkclick} className="fas fa-bookmark fa-2x"></i>
            </div>
            </div>
            </div>
           </div>
            <div>
        <h1 className={classes.title}>{this.state.title}</h1>
        <p className={classes.details}>{this.state.description}</p>
            </div>
         </div>
         <div className={classes.Videocard}>
         <div className={classes.video}>{videoCards}</div>
         </div>
         </div>
        )
    }
}
    export default  VideoComponent;