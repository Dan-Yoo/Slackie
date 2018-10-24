import React, {Component} from 'react';
import { Grid } from '@material-ui/core';

class Message extends Component {
    messageStyle = {
        padding: "5px 0"
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid 
                container 
                direction="column"
                alignItems="stretch"
                style={this.messageStyle}>
                <Grid 
                    item 
                    container
                    justify="flex-start"
                    alignItems="center" 
                    spacing={16}>
                    <Grid item style={{fontWeight: "bold"}}>
                        {this.props.msgObj.author}
                    </Grid>

                    <Grid item style={{fontSize: "0.75rem"}}>
                        {(this.props.msgObj.created) ? this.props.msgObj.created.seconds : '' }
                    </Grid>
                </Grid>
                
                <Grid item>
                    {this.props.msgObj.message}
                </Grid>
            </Grid>
        )
    }
}

export default Message;
