import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    List
} from 'reactstrap';
import { Button } from 'devextreme-react/button';
import Form, { Item, EmptyItem, Label } from 'devextreme-react/form';
import { users } from '../../data';

function UserProfile() {

    const user = users[0];

    return (
        <>
            <div className="app-page-title">
                <div>
                    <h1>Name</h1>
                </div>
                <div className="d-flex align-items-center ms-auto">
                    <Button
                        text="Edit"
                        stylingMode="contained"
                        type="normal"
                    />
                    <Button
                        text="Delete"
                        stylingMode="contained"
                        type="normal"
                    />
                </div>
            </div>
            <Row className="my-3">
                <Col xs={12} md={6}>
                    <Card>
                        <CardBody>
                            <CardTitle>User Information</CardTitle>
                            <Form
                                id="userInfo"
                                formData={user}
                                labelMode="outside"
                                labelLocation="left"
                                colCount={1}
                                readOnly={true}
                                showColonAfterLabel={false}
                            >
                                <Item dataField="firstName">
                                    <Label text="First Name"/>
                                </Item>
                                <Item dataField="lastName">
                                    <Label text="Last Name" />
                                </Item>
                                <Item dataField="team">
                                    <Label text="Team" />
                                </Item>
                                <Item dataField="emailAddress">
                                    <Label text="Email Address" />
                                </Item>
                                <Item dataField="phoneNumber">
                                    <Label text="Phone Number" />
                                </Item>
                                <Item dataField="lastOnline">
                                    <Label text="Last Online"/>
                                </Item>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card>
                        <CardBody>
                            <CardTitle>Credentials and Permissions</CardTitle>
                            <Form
                                id="userCredentials"
                                formData={user}
                                labelMode="floating"
                                labelLocation="top"
                                colCount={2}
                                readOnly={true}
                                showColonAfterLabel={false}
                            >
                                <Item dataField="userName">
                                    <Label text="Username"/>
                                </Item>
                                <EmptyItem/>
                                <Item>
                                    <Label text="New Password"/>
                                </Item>
                                <Item>
                                    <Label text="Confirm Password" />
                                </Item>
                                <Item dataField="isActive">
                                    <Label text="Status" />
                                </Item>
                                <Item dataField="isMfaActive">
                                    <Label text="MFA" />
                                </Item>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle>Products</CardTitle>
                            <Form
                                formData={user.products[0]}
                                readOnly={true}
                                >
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default UserProfile;