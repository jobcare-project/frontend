import BoxEditor from '../../BoxEditor';

function EditorGroup() {
    return (
        <section>
            {/* Truyền các editor value dưới dạng mảng để dễ quản lý */}
            <BoxEditor
                heading="Giới thiệu bản thân"
                icon={<ion-icon name="contract-outline"></ion-icon>}
                editorValue="- Over 2 years of experience in programming with good communication and quick learning skills"
            />
        </section>
    );
}

export default EditorGroup;
