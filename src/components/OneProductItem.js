import Rating from './Rating.js'

export default function OneProductItem(props){
 return(
     <>
   <div className="row top">
   <div className="col-2">
     <img className="large" src={props.image} alt={props.name}></img>
   </div>
   <div className="col-1">
     <ul>
         <h1>{props.name}</h1>
       <li>
         <Rating
           rating={props.rating}
           numReviews={props.numReviews}
         ></Rating>
       </li>
       <li>Price : ${props.price}</li>
       <li>
         Description:
         <p>{props.description}</p>
       </li>
     </ul>
   </div>
   <div className="col-1">
     <div className="card card-body">
       <ul>
         <li>
           <div className="row">
             <div>Price</div>
             <div className="price">${props.price}</div>
           </div>
         </li>
         <li>
           <div className="row">

             {/* if item is in stock or not */}
             <div>Availability:</div>
             <div>
               {props.countInStock > 0 ? (
                 <span className="success">In Stock</span>
               ) : (
                 <span className="error">Unavailable</span>
               )}
             </div>
           </div>
         </li>
         </ul>
         </div>
         </div>
         </div>
     </>
    );
               }