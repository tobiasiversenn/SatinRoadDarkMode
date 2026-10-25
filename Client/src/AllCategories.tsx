
import {useEffect, useState} from "react";
import {Api, type Category} from "@/api/Api.ts"
import "./index.css"
const api = new Api();

export function AllCategories(){
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        api.getAllCategories.categoryQueriesGetAllCategories()
            .then(r => {
                setCategories(r)
            })
    }, [])
    return (
        <>
            <h1>All categories</h1>
            <div className="ProductsContainer">
                {categories.map((c) => (
                    <>
                        <div className="Products">
                            <h2>{c.categoryName}</h2>
                            <button className="DeleteCategoryButton" onClick={() => {
                                api.deleteCategory.categoryQueriesDeleteCategory({
                                    categoryId: c.id
                                }).then(() => {
                                    setCategories(currentCategories => currentCategories.filter(Category => Category.id != c.id))
                                })

                            }}>Delete category</button>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </>

                )) }
            </div>

            
        </>
    )
}