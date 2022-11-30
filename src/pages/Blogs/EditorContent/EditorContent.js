import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import classNames from 'classnames/bind';
import styles from './EditorContent.module.scss';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const cx = classNames.bind(styles);
export default class EditorContent extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    };
    //
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    render() {
        const { editorState } = this.state;
        // console.log(convertToRaw(editorState.getCurrentContent()));
        return (
            <div className={cx('content-editor')}>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                    placeholder="Nội dung... "
                />
            </div>
        );
    }
}
