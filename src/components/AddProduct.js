import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function AddProduct({ setAddProduct }) {
    const { register, handleSubmit, setValue, errors } = useForm();
    const onSubmit = async (values) => {
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_NOT_AXIOS_DEFAULT_BASE_URL}/api/admin/products/add`, values);
            console.log(data)
            setAddProduct()

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        register('description'/*, { required: true }*/)
    })

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', maxWidth: "500px" }}>
                <div className="field">
                    <label className="label">Product name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Product Name" name="name" ref={register({ required: true })} />
                        {errors.name && <p className="help is-danger">Product name is required</p>}
                    </div>
                </div>
                <div className="field">
                    <label className="label">Product description</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data=""
                        height="300px"
                        onChange={(event, editor) => {
                            setValue("description", editor.getData())
                        }}
                    />
                    {errors.description && <p className="help is-danger">Product description is required</p>}
                    {/* <textarea name="description" ref={register({ required: true })} /> */}
                </div>
                <div className="field">
                    <label className="label">Product inage url</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Product image url" name="imageurl" ref={register} />
                    </div>
                </div>
                {/*<div className="field">
                    <label className="label">Product Image</label>
                    <div className="control">
                        <div className="file has-name is-fullwidth">
                            <label className="file-label">
                                <input className="file-input" type="file" name="pic" onChange={e => setFile(e.target.files[0])} />
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">Choose a file…</span>
                                </span>
                                <span className="file-name">{file?.name}</span>
                            </label>
                        </div>
                    </div>
                </div>*/}
                <div className="field">
                    <label className="label">Product Quantity</label>
                </div>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input className="input" type="number" placeholder="Product Quantity" name="quantity" ref={register({ required: true })} />
                    </div>
                    <div className="control">
                        <span className="select">
                            <select name="unit" ref={register}>
                                <option>Kilogram</option>
                                <option>Gram</option>
                                <option>Litre</option>
                                <option>Mililitre</option>
                                <option>Piece</option>
                                <option>Unit</option>
                            </select>
                        </span>
                    </div>
                    {errors.quantity && <p className="help is-danger">Product quantity is required</p>}
                    {errors.unit && <p className="help is-danger">Product quantity unit is required</p>}
                </div>
                <div className="field">
                    <label className="label">Product price</label>
                    <div className="control">
                        <input className="input" type="number" placeholder="Price" name="price" ref={register({ required: true })} />
                        {errors.price && <p className="help is-danger">Product price is required</p>}
                    </div>
                </div>

                <div className="field">
                    <label className="label">Discount Product price</label>
                    <div className="control">
                        <input className="input" type="number" placeholder="Fake Price" name="fakeprice" ref={register} />
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button type="button" className="button is-link is-light" onClick={() => setAddProduct(add => !add)}>Cancel</button>
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-link">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

/* let formdata = new FormData();
        formdata.append("image", file)
        var settings = {
            url: "https://api.imgbb.com/1/upload?key=800709fc59e32041bd71ceda2c28b7d4",
            method: "POST",
            data: formdata
        };
        axios(settings)
            .then(data => {
                console.log(data)
                data.imageurl = data.data.url
                //setValue("imageurl", data.data.url)
                console.log(data)
            })
            */
