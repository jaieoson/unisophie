
import  'bootstrap/dist/css/bootstrap.min.css' ;



function Navbar(){


return(

    <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light "> 
  <a class="navbar-brand" href="#">
 
    UNiSoPHie
    <img src="img/log.jpeg" width={100}/>
    
    </a>
    
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/index">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/poster">Posts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>


</nav>





    </div>
)

}

export default Navbar