import React, { useState } from "react";

function Form({user, onUpdate}){
    const [formData, setFormData] = useState({name: user.name, email: user.email});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev)=> ({
            ...prev,
            [name]: value
       }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" name="name" value ={formData.name} onChange={handleChange}/>
        </label>
        <br/>
        <label>
            Email:
            <input type="email" name="email" value ={formData.email} onChange={handleChange}/>
            <br/>
        </label>
        <button type="submit">Update Profile</button>

      </form>  
    );
}

export default Form;