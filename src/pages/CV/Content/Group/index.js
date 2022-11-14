import BoxEditor from '../../BoxEditor';

function EditorGroup() {
    return (
        <section>
            {/* Truyền các editor value dưới dạng mảng để dễ quản lý */}
            <BoxEditor
                heading="Giới thiệu bản thân"
                icon={<ion-icon name="contract-outline"></ion-icon>}
            />
            <BoxEditor editorValue="Giới thiệu bản thân mình đi" />
            <BoxEditor editorValue="Giới thiệu bản thân mình đi" />
            <BoxEditor editorValue="Giới thiệu bản thân mình đi" />
            <BoxEditor editorValue="Giới thiệu bản thân mình đi" />
            <BoxEditor editorValue="Giới thiệu bản thân mình đi" />
        </section>
    );
}

export default EditorGroup;
