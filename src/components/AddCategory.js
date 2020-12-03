import React,{ useState } from 'react';
import PropTypes from 'prop-types';


const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=> {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=> {
        e.preventDefault();

        //se paso como referencia la funcion setCategorias
        console.log('se llamo handelSubmit',inputValue)
        setCategorias(cat => [inputValue,...cat])
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
         <p>{inputValue}</p> {/*esto es solo para el test */}
            <input 
                type='text'
                value = {inputValue}
                onChange ={handleInputChange}
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired

}
export default AddCategory;
