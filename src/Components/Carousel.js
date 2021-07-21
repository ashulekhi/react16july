let carousel1 = "image1.jpg"
let carousel2 = "image2.jpg"
let carousel3 = "image3.jpg"


function Carousel(props){
  console.log("???????????????????????? in carousel" , props)
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carousel1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={carousel2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={carousel3} class="d-block w-100" alt="..." />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    )
}

export default Carousel

// one file is allowed to export one thing as default 
// what is advantage of this