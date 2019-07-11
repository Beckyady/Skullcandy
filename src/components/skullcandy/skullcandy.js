import React from 'react';
import './skullcandy.css';
import rebe from './rebe.png';
import video from './video.jpg';
import skull from './skull.png';


function SkullCandy() {

    return (
        <div className=' body'>
            <div className='wrapper'>
                <div className='sec1div1'> <img className='skull' src={skull} /></div>
                <div className='sec1div2'>---</div>
                <div className='sec1div3'>EN</div>

            </div>
            <div className='section2'>
                <div className='wrapper'>
                    <div className='navdiv'>
                        <nav className="navbar ">
                            <div className='navdivsec1'><a class="" href="#">Skullcandy</a></div>

                            <a href="#"> SHOP</a>
                            <a class="" href="#">DISCOVER</a>
                            <a href="#"><i class="fa fa-fw fa-search"></i></a>
                            <a href="#"> James<i class="fa fa-fw fa-user"></i></a>
                            <a href="#"> 2 <i class="fa fa-fw fa-shopping-bag"></i></a>


                        </nav>
                    </div>
                    <div className='content'>
                        
                            <div className='align'><span><h6>#Skullfamily</h6></span><br></br>
                                <p><span className='orange'><u><span>Coco Ho</span></u>
                                </span></p>
                                <img className='video' src={video} />

                                </div>
                            <div><img className='img' src={rebe} /></div>
                        

                        <div>   
                            <nav className='sidebar secnav'>

                            <ul class="list-unstyled navbar-nav ml-auto components">
                                
                                <li><a href="#">Intro</a></li>

                                <li><a href="#">About</a></li>
                                
                                <li><a href="#">Photography</a></li>
                                
                                <li><a href="#">Stories</a></li>

                                <li> <a href="#">More</a></li>
                                
                            </ul>
                        </nav> </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default SkullCandy;





