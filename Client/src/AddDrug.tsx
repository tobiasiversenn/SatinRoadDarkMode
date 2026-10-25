import {useState} from "react";
import {Api, type Drug} from "@/api/Api.ts";
import "./index.css"

const api = new Api();
export function AddDrug(){
    
    const [drugName, setDrugName] = useState("");
    const [drugPrice, setDrugPrice] = useState("");
    // const [sellerId, setSellerId] = useState("");
    // const [sellerName, setSellerName] = useState("");
    const sellerId= "wskdikadi";
    const sellerName= "James";
    
    
    return(
        <div className="AddPageDiv">

        <>
            <br/>
            <h1 className="AlignTextToLeft">Add a drug</h1>
            <label className="AlignTextToLeft" >Fill in the information below to add a new drug to the marketplace</label>
            <br/>
            
            <label className="AlignTextToLeft">Drug name</label>
            <input className="inputFieldOnAddPage" value={drugName} onChange={(e)=> setDrugName(e.target.value)}/>
            <br/>
            <br/>
            <label className="AlignTextToLeft">Price</label>
            <input className="inputFieldOnAddPage" value={drugPrice} onChange={e => setDrugPrice(e.target.value)}/>
            <br/>
            <br/>
            <br></br>
            <button className="btnAdd" onClick={() => api.postDrug.drugControllerQueriesPostDrug({
                drugName: drugName,
                price: Number(drugPrice),
                sellerId: sellerId, 
                sellerName: sellerName,
                isListed: true
                
            })
                .then(() => {
                    setDrugName("");
                    setDrugPrice("");
                })
            }>Add drug</button>
        </>
        </div>

    )
            }
            