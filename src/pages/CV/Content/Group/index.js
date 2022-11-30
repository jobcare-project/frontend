import BoxEditor from '../../BoxEditor';
import BoxEditorItem from '../../BoxEditor/BoxEditorItem';

function EditorGroup({ editorData, groupId }) {
    return (
        <section>
            <BoxEditor
                groupId={groupId}
                heading={editorData.heading}
                icon={<ion-icon name="contract-outline"></ion-icon>}
            >
                {editorData.data.map((editor, index) => {
                    const length = editorData.data.length - 1;
                    return (
                        <BoxEditorItem
                            key={editor.id}
                            typeBlock="content"
                            groupId={groupId}
                            index={index}
                            boxId={editor.id}
                            timeline={editor?.timeline}
                            title={editor?.title}
                            editorValue={editor.value}
                            length={length}
                        />
                    );
                })}
            </BoxEditor>
        </section>
    );
}

export default EditorGroup;
