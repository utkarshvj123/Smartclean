import React, { Component } from 'react';
import styled from 'styled-components';
import '../../assets/styles/variable.scss';


const CardInfo = styled.div`
// width: 320px;
height: auto;
box-shadow: 0 0 6px 0 rgba(0, 0, 0, .26);
background: #fff;
border-radius: 4px;
padding: 15px;
@media screen and (max-width: 767px) and (min-width: 320px){
    margin-bottom: 20px;
}
@media screen and (max-width: 1024px) and (min-width: 768px){
    margin-bottom: 20px;
}
`;
const GirdCard = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-column-gap: 20px;
@media screen and (max-width: 767px) and (min-width: 320px){
    grid-template-columns: repeat(1, 1fr);
}
@media screen and (max-width: 1024px) and (min-width: 768px){
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 20px;
}
`;
export default class InfoCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        }

    }
    render() {
        return (
            <React.Fragment>
                <GirdCard>
                    {
                        this.props.dataGet.map((value, i) =>
                            <CardInfo value={value.id} key={i}>
                                <div className="ft-14 fw-500 text-uppercase">{value.name}</div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div className="ft-45 fw-600">{value.count}</div>
                                    <div>
                                        <img src={require(`../../assets/images/${value.url}`)} alt="" width='55' height='60' />
                                    </div>
                                </div>
                                <div></div>
                            </CardInfo>
                        )
                    }
                </GirdCard  >
            </React.Fragment>
        );
    }
}



