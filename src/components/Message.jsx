import React, {Component} from 'react';
import { Grid, Avatar } from '@material-ui/core';

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
                spacing={24}
                direction="row">
                <Grid item>
                        <Avatar>
                            {this.props.msgObj.username.substring(0,1)}
                        </Avatar>
                </Grid>
                <Grid 
                    sm
                    item
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
                            {this.props.msgObj.username}
                        </Grid>

                        <Grid item style={{fontSize: "0.75rem"}}>
                            {(this.props.msgObj.created) ? this.props.msgObj.created.seconds : '' }
                        </Grid>
                    </Grid>
                    
                    <Grid item>
                        {this.props.msgObj.message}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Message;
