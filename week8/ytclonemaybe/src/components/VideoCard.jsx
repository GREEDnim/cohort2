function VideoCard(){
    return(
        <div>
            <img src="zoro.jpg" className="w-[500px] rounded-xl" alt=""  />
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img src="logo.jpg" className="rounded-full w-18 h-18" alt=""  />
                </div>
                
                <div className="col-span-11 ">
                    <div className="text-white" >Zoro is the GOAT</div>
                    <div className="text-gray-400 text-base	">OnePiece</div>
                    <div className="text-gray-400 text-base	">69M . 69 days ago</div>
                </div>
            </div>
        </div>
        
        
    )
}
export default VideoCard;