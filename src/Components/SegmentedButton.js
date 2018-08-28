import React from 'react';
import './SegmentedButton.css';



class SegmentedButton extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            isChecked:true,
        name1:'Batsman 1',
        name2:'Batsman 2'

        }

        this.toggleOnChange = this.toggleOnChange.bind(this)
    }

    getClassNameForState(checked){
        if(checked){
            return 'checked'
        }
        return '' 
    }

    toggleOnChange(){
        console.log('test')
        const checked = !this.state.isChecked
        this.setState(
            {isChecked:checked}
        )
    }
    render(){
        return (
            <div className="container">
                <div className="segmented">
                     <label className={this.getClassNameForState(this.state.isChecked)}>
                        <input type="radio" name="segmented"  onClick={ this.toggleOnChange} />
                         {this.state.name1}
                     </label>
                     <label className={this.getClassNameForState(!this.state.isChecked)}>
                         <input type="radio" name="segmented" onClick={ this.toggleOnChange}/>
                         {this.state.name2}
                    </label>
                 </div>
            </div>
        )
         
    }

    

}


export default SegmentedButton