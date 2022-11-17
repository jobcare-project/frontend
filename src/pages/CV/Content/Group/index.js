import BoxEditor from '../../BoxEditor';
import BoxEditorItem from '../../BoxEditor/BoxEditorItem';

function EditorGroup() {
    return (
        <section>
            {/* Truyền các editor value dưới dạng mảng để dễ quản lý */}
            <BoxEditor
                heading="Giới thiệu bản thân"
                icon={<ion-icon name="contract-outline"></ion-icon>}
            >
                <BoxEditorItem editorValue="Giới thiệu bản thân mình đi" />
                <BoxEditorItem editorValue="Giới thiệu bản thân mình đi" />
                <BoxEditorItem editorValue="Giới thiệu bản thân mình đi" />
                <BoxEditorItem editorValue="Giới thiệu bản thân mình đi" />
                <BoxEditorItem editorValue="Giới thiệu bản thân mình đi" />
                <BoxEditorItem editorValue="Giới thiệu bản thân mình đi" />
            </BoxEditor>
        </section>
    );
}

export default EditorGroup;
