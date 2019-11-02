// import React,{ useState} from 'react'
// import { Toast } from 'react-bootstrap';
import {useToasts,ToastProvider } from 'react-toast-notifications'

// function Toaster(props) {
//     var status;
//     if (props.st === '1') {
//         status = true;
//     } else {
//         status = false;
//     }
// const [showA, setShowA] = useState(status);
// const toggleShowA = () => setShowA(!showA);
    
//     return (
    
//             <div>
//                 <div
//                     style={{
//                     position: 'absolute',
//                     top: 'auto',
//                     right: 0,
//                     bottom: 0,
//                     marginBottom: '20px',
//                     minWidth:'250px',
//                     }}
//                 >
//                 <Toast show={showA} onClose={toggleShowA}>
//                     <Toast.Header>
//                         <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" style={{height:'20px',width:'20px'}} />
//                         <strong className="mr-auto">{props.type?props.type:''}</strong>
//                         <small>just now</small>
//                     </Toast.Header>
//                     <Toast.Body>{props.msg?props.msg:''}</Toast.Body>
//                 </Toast>
//                 {/* <Toast>
//                     <Toast.Header show={showA} onClose={toggleShowA}>
//                         <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" style={{height:'20px',width:'20px'}}/>
//                         <strong className="mr-auto">Bootstrap</strong>
//                         <small>2 seconds ago</small>
//                     </Toast.Header>
//                     <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
//                 </Toast> */}
//                 </div>
//             </div>
//     )
// }
function Toaster(props) {

      const Toster = () => {
          const { addToast } = useToasts()
            if (props.st===1) {
              addToast(props.msg, { appearance: 'success' })
            } else if(props.st===0) {
              addToast('Saved Successfully', { appearance: 'error' })
            }else{
              addToast('Saved Successfully', { appearance: 'warning' })
            }
            
    }
  return Toster;
      
}


export default Toaster
