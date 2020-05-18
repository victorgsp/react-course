import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
export default props => (

    <form>
        <div className="form-group row">
            <Grid cols='12 10 10 11'>
                <input className="form-control" onChange={props.handleChange}  id="description"  placeholder="Adicione uma tarefa" value={props.description}/>
            </Grid>
            <Grid cols='12 2 2 1'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd} otherClass='btn-block'></IconButton>                
            </Grid>
        </div>
    </form>
)