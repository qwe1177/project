import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOneUrlParams } from '../../../util/baseTool';

import AuditForm from '../components/AuditForm';
import { Form } from 'antd';

import { connect_srm } from '../../../util/connectConfig';
import actions from '../actions'

@connect(
    state => ({ ...state }),
    dispatch => bindActionCreators(actions, dispatch)
)


class App extends Component {
    render() {

        return (
            <div>
                <h3 className="page-title">审核供应商</h3>
                <AuditForm />
            </div>
        );
    }
}

export default App
