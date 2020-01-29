import React,{useState,useEffect} from 'react';
import {Container, Row} from 'react-bootstrap';
import axios from 'axios';

export default function ContentPage(){

    const [ordersState, setOrdersState] = useState({
        orders:[]
    })

    const [workersState, setWorkersState] = useState({
        workers:[]
    })
    var workers = []

    // const getWorker = (id) =>{
       
    //             axios.get('https://www.hatchways.io/api/assessment/workers/'+id)
    //             .then((res)=>{
    //                 const worker = res.data.worker
    //                 console.log(worker)
    //                 workers.push(worker)
    //                 setWorkersState({
    //                     workers:workers
    //                 })
    //             })
    //             .catch((err)=>console.log(err))
        
    // }

    useEffect(()=>{
        axios.get('https://www.hatchways.io/api/assessment/work_orders')
        .then((res)=>{
            
            const orders = res.data.orders
            setOrdersState({
                orders: [...orders]
            })
           
     
        })
        .catch(err=>console.log(err))
    },[])

    return(
        <React.Fragment>
            <h1>Content Page</h1>

            
            {
                ordersState.orders.map((order)=>{
                    // getWorker(order.workerd)
                    return <h4>{order.name}</h4>  
                      
                })
            }
            
            <h1>
                Workers
            {
                workersState.workers.map((worker)=>{
                    return <h4>{worker.name}</h4>  
                      
                })
            }
            </h1>
        </React.Fragment>
    )

}