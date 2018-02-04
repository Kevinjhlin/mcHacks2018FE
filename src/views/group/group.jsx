import React from "react";
import { connect } from "react-redux";
import {
    Container,
    Grid,
    Segment
} from "semantic-ui-react";

import Schedule from '../../components/calender/calender.jsx';

class Group extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container>
                <Grid columns={2} relaxed>
                    <Grid.Column>
                        <Segment basic>
                            <h2> Singer - Song </h2>
                            <Schedule />
                        </Segment>
                        
                    </Grid.Column>
                    <Grid.Column>
                        <Segment basic>
                            <h2> Members </h2>
                                <ul>
                                    <li>Brian Kim-Lim</li>
                                    <li>Kevin Lin</li>
                                </ul>
                         </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}


export default Group