import  React,{useEffect } from 'react'
import $ from "jquery";
import img1  from "../assets/images/gallery/01-thumbnail.jpg";
import img2  from "../assets/images/gallery/02-thumbnail.jpg";
import img3  from "../assets/images/gallery/03-thumbnail.jpg";
import img4  from "../assets/images/gallery/04-thumbnail.jpg";
import img5  from "../assets/images/gallery/05-thumbnail.jpg";
import img6  from "../assets/images/gallery/06-thumbnail.jpg";

function Gallery(props) {

    const gallery = [
        { name: 'image_1', id: 'web', image: img1 },
        { name: 'image_2', id: 'web', image: img2 },
        { name: 'image_3', id: 'web', image: img3 },
        { name: 'image_4', id: 'develope', image: img4 },
        { name: 'image_5', id: 'develope', image: img5 },
        { name: 'image_6', id: 'develope', image: img6 },
        { name: 'image_7', id: 'html', image: img1 },
        { name: 'image_8', id: 'html', image: img3 },
        { name: 'image_9', id: 'html', image: img5 },
    ];
    
    useEffect(() => {
        handleCounter()
    }, [])
    
    const handleCounter = (e) => {

        $(".gallery_sort li button").click(function(){
            var value = $(this).attr('data-filter');
            if(value === "all")
            {
                $('.filter').show('1000');
            }
            else
            {
                $(".filter").not('.'+value).hide('fast');
                $('.filter').filter('.'+value).fadeIn('8000');
                
            }
            $(this).addClass("active");
            $('.gallery_sort li button').not($(this)).removeClass("active");
         

            
            
            
        });
        
        
        
           
        
    }

    // const handleCounter = (e) =>{
    //     $('.gallery_sort li button').click(function() {
    //         if ($(this).data('ref')) {
    //             $('.filter').hide().filter('[class="' + $(this).data('ref') + '"]').show();
    //         } else {
    //             $('.filter').show();
    //         }
    //         return false;
    //     });
    // }


    return (
        <div className="gallery_area">
            <div className="gallery_top_menu">
                <ul className="gallery_sort">
                    <li><button onClick={handleCounter} data-filter='all' className='active'>All</button></li>
                    <li><button onClick={handleCounter} data-filter='web' >Web</button></li>
                    <li><button onClick={handleCounter} data-filter='develope' >Develope</button></li>
                    <li><button onClick={handleCounter} data-filter='html' >Html</button></li>
                </ul>
            </div>
            <div className="row">
                {
                    gallery.map((gal,i) => {
                        return(
                        <div className ={`col-md-3 filter ${gal.id}`} key={i}>
                            <div className="gallery_single_image">
                                <img src={gal.image} alt="" /> 
                           </div>
                        </div>
                    ) 
                    })
                }
            </div>
        </div>
    )
}

export default Gallery
