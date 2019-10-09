import React from 'react'

function MyFunction(type) {
    let date;
    var tempDate = new Date();
    var currentDate = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + ' ' + tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds();

    if (type === 'month') {
        date = tempDate.getMonth() + 1;
    } else if (type === 'year') {
        date = tempDate.getFullYear()
    } else {
        date = currentDate;
    }

    return (
       <span> {date}</span>
    );
}
// console.log(new Date().toLocaleString());
function Footer() {
    return (
        <div className="footerArea">
            <div className="container">
                <div className="row">
                    <div className="footer_Content">
                        <h4>&copy; CopyRight ({MyFunction('year')})</h4>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Footer
