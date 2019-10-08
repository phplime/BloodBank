import  React,{useEffect } from 'react'
import $ from "jquery";

 function CounterTo(props) {
    
const counterTo = [
    {icon:'fa fa-home',value:'250',text:'Total Home',},
    {icon:'fa fa-user',value:'270',text:'Total User',},
    {icon:'fa fa-user-circle-o',value:'280',text:'Connections',},
    {icon:'fa fa-facebook',value:'300',text:'Total Media',},
];
    
    useEffect(() => {
        handleCounter()
    }, [])

    const handleCounter = (e) =>{
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }

     return (
        counterTo.map((count,i)=>{
            return (
                <div className="col-sm-3 col-xs-6 col-lg-3" key={i}>
                    <div className="countet_area">
                        <div className="single_counter">
                            <div className="countTo">
                                <p className="countTo_icon d_flex_center"><i className={count.icon}></i></p>
                                <p className="count countValue">{count.value}</p>
                                <h4>{count.text}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}
export default CounterTo;