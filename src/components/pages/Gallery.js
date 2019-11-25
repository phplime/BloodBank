import  React,{useEffect,useState } from 'react'
import $ from "jquery";
import axios from "axios";
import {API_URL, IMG_URL} from "../inc/Config";

function Gallery(props) {
    const [post, setPost] = useState([])
    const [image, setImage] = useState([])
    useEffect(() => {
        axios.get(`${API_URL}/get_gallery_img`)
            .then(result => {
                 setPost(result.data.data);
                 setImage(result.data.img);
            });
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
                <li><button onClick={handleCounter} data-filter='all' className="active">All</button></li>
                   {post.map((gal, i) => (
                       <li key={i}><button onClick={handleCounter} data-filter={gal.location} >{gal.district_name}</button></li>
                   ))}
                   
                    
                    {/* <li><button onClick={handleCounter} data-filter='develope' >Develope</button></li>
                    <li><button onClick={handleCounter} data-filter='html' >Html</button></li> */}
                </ul>
            </div>
            <div className="topRow" id="masonry4">
                {
                    image.map((gal,i) => {
                    return(
                        <div className ={`filter item ${gal.location}`} key={i}>
                                <img src={`${IMG_URL}/${gal.thumb}`} alt="" /> 
                        </div>
                    ) 
                    })
                }
            </div>
        </div>
    )
}

export default Gallery
