import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
            <Container tag="main" className="app-main">
                <div className="app-header">
                </div>
                <div className="app-content">
                    <div className="app-content--inner">
                        <div className="app-content--inner__wrapper">
                            <div style={{ opacity: 1 }}>
                                {this.props.children}
                            </div>                        
                        </div>
                    </div>
                </div>
        </Container>
      </div>
    );
  }
}
