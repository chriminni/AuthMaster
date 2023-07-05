import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

import { TextBox } from 'devextreme-react/text-box'; 
import { Button } from 'devextreme-react/button';
import SelectBox from 'devextreme-react/select-box';

import DxDataGrid from './DxDataGrid';
import UserProfile from './UserProfile';
function UserManagement() {
    
    return (
        <>
            <div className="app-page-title">
                <div>
                    <h1>User Management</h1>
                </div>
                <div className="d-flex align-items-center ms-auto">
                    <Button
                        text="Add Users"
                        stylingMode="contained"
                        type="normal"
                    />
                    <Button
                        text="Export"
                        stylingMode="contained"
                        type="normal"
                    />
                </div>
            </div>
            <Row className="my-3">
                <Card>
                    <CardBody className="d-flex flex-row">
                        <Col xs={3}>
                            <TextBox />
                        </Col>
                        <Col xs={3}>
                            <SelectBox />
                        </Col>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card>
                    <CardBody>
                        <Col xs={12}>
                            <DxDataGrid />
                        </Col>
                    </CardBody>
                </Card>
            </Row> 
            <Row>
            <UserProfile />
            </Row>
        </>
    )
}
export default UserManagement;