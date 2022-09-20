
// search bar

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})


let API = "AIzaSyC97z7BVxX81snJu-3F8RR8s69mTfFZ2jY";


async function trending() {
    let inp = document.getElementById("inputBox").value;
    let div = document.getElementById("videosResults");
    div.innerHTML = "";


    


    let res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=${API}`

        );
    let data = await res.json();
    console.log(data);

    for (let {
        id,
        channelImage,
        snippet: { title, channelTitle, thumbnails },
    } of data.items) {
        let channelThumbnail = thumbnails.medium.url;


        let channelThumbnailImg = document.createElement("img");
        channelThumbnailImg.src = channelThumbnail;
        channelThumbnailImg.className = "channel-icon";

        let video_frame = document.createElement("img");
        video_frame.style.width = "100%";

        let mainDivs = document.createElement("div");
        mainDivs.id = "hoverDiv";
        mainDivs.onclick = () => playVideo(id);
        let flex = document.createElement("div");
        flex.id = "flex";
        let t = document.createElement("p");
        t.style = "color:black";
        t.className = "title";
        video_frame.src = channelThumbnail;

        t.innerHTML = title;

        let channelTittle = document.createElement("p");

        channelTittle.id = "channel-name";
        channelTittle.innerHTML = `${channelTitle} <span id=span>✅</span> `;

        flex.append(channelThumbnailImg, channelTittle);
        mainDivs.append(video_frame, flex, t);
        div.append(mainDivs);
    }
}

trending();






