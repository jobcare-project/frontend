import classNames from 'classnames/bind';
import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import styles from './InputEditor.module.scss';

const cx = classNames.bind(styles);

function InputEditor() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        console.log(
            'editorState:::: ',
            convertToRaw(editorState.getCurrentContent()),
        );
    };

    return (
        <div className={cx('wrapper')}>
            <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                wrapperClassName={cx('wrapper-editor')}
                toolbarClassName={cx('toolbar-editor')}
                editorClassName={cx('editor')}
                toolbarOnFocus
                toolbar={{
                    options: ['inline'],
                    inline: {
                        bold: { className: cx('editor-item') },
                        italic: { className: 'demo-option-custom' },
                        underline: { className: 'demo-option-custom' },
                        // options: ['bold', 'italic', 'underline'],
                        // className: cx('editor-item'),
                    },
                }}
            />
        </div>
    );
}

export default InputEditor;
