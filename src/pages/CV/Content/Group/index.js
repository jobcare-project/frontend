import BoxEditor from '../../BoxEditor';
import BoxEditorItem from '../../BoxEditor/BoxEditorItem';

function EditorGroup({ editorData }) {
    return (
        <section>
            {/* Truyền các editor value dưới dạng mảng để dễ quản lý */}
            <BoxEditor
                heading={editorData.heading}
                icon={<ion-icon name="contract-outline"></ion-icon>}
            >
                {editorData.data.map((editor) => {
                    return (
                        <BoxEditorItem
                            key={editor.id}
                            timeline={editor?.timeline}
                            title={editor?.title}
                            editorValue={editor.value}
                        />
                    );
                })}
            </BoxEditor>
        </section>
    );
}

export default EditorGroup;
