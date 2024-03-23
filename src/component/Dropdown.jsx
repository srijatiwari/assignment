import './dropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export const Dropdown = ({options, schema, selectedObj, setCurentSelectedObj, onlyShow}) => {
    const handleSelectChange = (e) =>{
        let newObj={}
        newObj[e.target.value]=e.target.value
        setCurentSelectedObj(newObj)
    }
    const removeDropDown = () =>{
    }

    const isPresentInschema = (obj) =>{
        schema?.length>0 && schema?.map((schemaObj)=>{
            if(onlyShow){
                return true
            }
            if(Object.values(schemaObj)[0] == Object.values(obj)[0] ){
                return false
            } 
            else{
                return true
            }
        })
        return true
    }
   
  return (
    <div className="container2">
      <div className="part_one">
      
        <div>
            <div className='circle_fill'>
            </div>
        </div>
        <select name="schema" id="schema" onChange={handleSelectChange} >
        {selectedObj?null:<option value="">Select your option</option>}
          { 
            options.filter((obj)=> isPresentInschema(obj) ).map((optionObj, index)=>{
                return <option 
                            key={index}
                            selected={selectedObj ? (Object.keys(optionObj)[0]===Object.keys(selectedObj)[0]) : null } 
                            name={Object.keys(optionObj)[0]} 
                            value={Object.values(optionObj)[0]}
                            >

                                {Object.values(optionObj)[0]}
                        </option>
            })
          }
          
        </select>
        <button className='btn3' >
        <FontAwesomeIcon onClick={removeDropDown} icon={faMinusSquare} className='icon2'/>
        </button>
      </div>
    </div>
  );
};
