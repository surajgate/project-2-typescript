import React from "react";
// import Tour from "./Tour";

// type ToursProps = {
//     data : {
//         id : string,
//         name : string,
//         info : string,
//         image : string,
//         price : number
//     }[]
// }

interface ToursProp { 
   data : {id: string;
    name: string;
    info: string;
    image: string;
    prince: number;}[]
}

function Tours({ data }: ToursProp) {
  return (
    <>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {data.map((element) => {
         const { id, name, info, image, prince} = element;   
         return (<article className="single-tour">
           <img src={image} alt={name} />
           <footer>
             <div className="tour-info">
               <h4>{name}</h4>
               <h4 className="tour-price">${prince}</h4>
             </div>
             <p>{info}</p>
             <button className="delete-btn">Not Interested</button>
           </footer>
         </article>)
        })}
      </div>
    </>
  );
}

export default Tours;
