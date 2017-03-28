import React, {PropTypes, Component} from 'react'
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import FAB from 'material-ui/FloatingActionButton';


const uploadIconPosition = PropTypes.oneOf(['right', 'left']);


class UploadFileField extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fileName: ''
        }
        this.uploadAction = this.uploadAction.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleResetFile = this.handleResetFile.bind(this);
    }

    uploadAction(e) {
        this.fileInput.click(e);
    }

    handleUpload(e) {
        const files = e.target.files;
        if(files.length < 1) {
            return;
        }
        const fileArray = Object.keys(files).map((key, i) => (files[key]));
        const fileNames = fileArray.reduce((acc, elem, currInd) => {
            const seperator = currInd !== fileArray.length -1 ?  ', ' : '';
            return acc + elem.name + seperator}
            , '');
        this.setState({
            ...this.state,
            fileName: fileNames
        })
        this.props.handleUpload(fileArray);
    }

    handleResetFile() {
        this.setState({
            ...this.state,
            fileName: '',
        })
        this.props.handleUpload('');
    }

    render() {
        const {renderAdd, renderRemove, uploadIconPosition, ...props} = this.props;
        const groupStyle = {
            display: 'flex',
            alignItems: 'center',
        }
        const fieldStyle = {
            marginLeft: uploadIconPosition === 'left' ? '10px' : 0,
            marginRight: uploadIconPosition === 'right' ? '10px' : 0,
        }
        const removeButton = (<IconButton iconClassName="material-icons"
                                          onClick={() => {this.handleResetFile(); this.props.handleRemoveField()}}>remove</IconButton>)
        const addButton = (<IconButton iconClassName="material-icons"
                                       onClick={this.props.handleAddField}>add</IconButton>)

        const uploadButton = (<FAB mini onClick={this.uploadAction}><FontIcon
            className="material-icons">file_upload</FontIcon></FAB>)
        return (
            <div style={groupStyle}>
                {uploadIconPosition === 'left' ? uploadButton : null}
                <div style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
                    <TextField name={this.props.id} style={fieldStyle} readOnly hintText={props.hintText}
                               errorText={props.errorText}
                               value={this.state.fileName}
                               onClick={this.uploadAction}/>
                    {this.state.fileName ? <IconButton style={{position: 'absolute', right: '0px'}} onClick={this.handleResetFile.bind(this)}>
                        <FontIcon className="material-icons">clear</FontIcon>
                    </IconButton> : null}
                </div>
                <input type="file"  multiple={this.props.multiple} style={{display: 'none'}} ref={(ref) => this.fileInput = ref}
                       onChange={this.handleUpload}/>
                {uploadIconPosition === 'right' ? uploadButton : null}
                {renderRemove ? removeButton : null}
                {renderAdd ? addButton : null}
            </div>
        )
    }
}

UploadFileField.propTypes = {
    renderAdd: PropTypes.bool,
    renderRemove: PropTypes.bool,
    handleUpload: PropTypes.func.isRequired,
    handleRemoveField: PropTypes.func,
    handleAddField: PropTypes.func,
    hintText: PropTypes.string,
    id: PropTypes.string,
    uploadIconPosition: uploadIconPosition,
    multiple: PropTypes.bool,
}

UploadFileField.defaultProps = {
    renderAdd: false,
    renderRemove: false,
    uploadIconPosition: 'right',
    multiple: false,
}

export default UploadFileField;