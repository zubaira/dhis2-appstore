import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {closeDialog} from '../../actions/actionCreators';

class DialogBase extends Component {

    static buildButton(action, text, primary = false) {
        return (<FlatButton
            label={text}
            primary={primary}
            onTouchTap={action}
        />);
    }

    render() {
        const {
            title,
            cancelAction,
            cancelLabel,
            approveAction,
            approveLabel,
            contentStyle,
            bodyStyle,
            defaultCloseDialog
        } = this.props;

        const actions = [];

        const finalAction = () => {
            Promise.resolve(approveAction()).then(() => defaultCloseDialog()).catch(() => {})

    };

        actions.push(DialogBase.buildButton(cancelAction || defaultCloseDialog, cancelLabel || 'Cancel'));
        if (approveAction) actions.push(DialogBase.buildButton(finalAction, approveLabel || 'Done', true));

        return (<Dialog
            open
            title={title}
            actions={actions}
            modal={false}
            contentStyle={contentStyle || {}}
            bodyStyle={bodyStyle || {}}
            onRequestClose={defaultCloseDialog}
        >
            {this.props.children}
        </Dialog>);
    }
}

DialogBase.propTypes = {
    title: PropTypes.string,
    cancelLabel: PropTypes.string,
    approveLabel: PropTypes.string,
    cancelAction: PropTypes.func,
    approveAction: PropTypes.func,
    defaultCloseDialog: PropTypes.func,
    contentStyle: PropTypes.object,
    bodyStyle: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
    defaultCloseDialog() {
        dispatch(closeDialog());
    },
});

export default connect(
    null,
    mapDispatchToProps
)(DialogBase);
