import {useState} from "react";
import {Api, type StolenArtifact} from "@/api/Api.ts";

const api = new Api();

export function AddStolenArtifact(){

    const [stolenArtifactName, setStolenArtifactName] = useState("");
    const [stolenArtifactPrice, setStolenArtifactPrice] = useState("");
    // const [sellerId, setSellerId] = useState("");
    // const [sellerName, setSellerName] = useState("");
    const sellerId = "wskdikadi";
    const sellerName = "James";


    return(
        <div className="AddPageDiv">

        <>
            <br/>
            <h1 className="AlignTextToLeft">Add a stolen artifact</h1>
            <label className="AlignTextToLeft" >Fill in the information below to add a new stolen artifact to the marketplace</label>
            
            <br/>
            <label className="AlignTextToLeft">Stolen artifact name</label>
            <input className="inputFieldOnAddPage" value={stolenArtifactName} onChange={(e)=> setStolenArtifactName(e.target.value)}/>
            <br/>
            <br/>
            <label className="AlignTextToLeft">Price</label>
            <input className="inputFieldOnAddPage" value={stolenArtifactPrice} onChange={e => setStolenArtifactPrice(e.target.value)}/>
            <br/>
            <br/>
            <br></br>
            <button className="btnAdd" onClick={() => api.postStolenArtifact.stolenArtifactQueriesPostStolenArtifact({
                name: stolenArtifactName,
                price: Number(stolenArtifactPrice),
                sellerId: sellerId,
                sellerName: sellerName,
                isListed: true
                
            })
                .then(() => {
                    setStolenArtifactName("");
                    setStolenArtifactPrice("");
                })}>Add stolen artifact</button>


        </>
        </div>
    )
}
            