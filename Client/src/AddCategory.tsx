import {useEffect, useState} from "react";
import {Api, type Category} from "@/api/Api.ts"
import "./index.css"
const api = new Api();

export function AddCategory(){
    const [categoryNameToCreate, setCategoryNameToCreate] = useState("");

    
    return (
        <>

            <div className="AddPageCategoryDiv">
                <>
                    <br/>
                    <h1 className="AlignTextToLeft">Add a new category</h1>
                    <label className="AlignTextToLeft">Create a new category to the marketplace</label>

                    <br/>
                    <label className="AlignTextToLeft">Category name</label>
                    <input className="inputFieldOnAddPage" onChange={(e) => setCategoryNameToCreate(e.target.value)} value={categoryNameToCreate} />
                    <br/>
                    <br/>
                    <br/>
                    <button className="btnAdd" onClick={() => {
                        api.postCategory.categoryQueriesPostCategory({
                            categoryName: categoryNameToCreate
                        })
                                setCategoryNameToCreate("");
                            }
                    }>Add category</button>
                    <br/>
                    <br/>
                    <br/>
                </>
            </div>
        </>
    )
}