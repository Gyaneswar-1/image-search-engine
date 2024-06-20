/**
 * api keys
 *
 * Access Key => 6l8o3NSwDFE4BfArdvUtiOi6NW4_hsDNYKR43DHYGfk
 * Secret Key => j3Pv7NhS_45ur6vCyxa_qZsQAm-bNuzHAxJOfPukb9w
 */
const accessKey = "6l8o3NSwDFE4BfArdvUtiOi6NW4_hsDNYKR43DHYGfk"

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page===1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src=result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    showMoreBtn.style.display = "block";
    // document.querySelector("footer").style.display = "flex";
    // document.querySelector("footer").style.marginBottom = "0px";
}

searchForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    page =1;
    searchImages();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})

