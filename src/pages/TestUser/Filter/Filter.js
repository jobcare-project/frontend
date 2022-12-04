import { useEffect } from 'react';
import Button from '~/components/Button';

function Filter({ setActiveGenre, activeGenre, setFiltered, quiz }) {
    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(quiz);
            return;
        }
        const filtered = quiz.filter((quiz) =>
            quiz?.category.category.includes(activeGenre),
        );
        setFiltered(filtered);
    }, [activeGenre]);

    return (
        <div>
            <Button primary onClick={() => setActiveGenre(0)}>
                Tất cả
            </Button>
            <Button primary onClick={() => setActiveGenre(1)}>
                Công nghệ thông tin
            </Button>
            <Button primary onClick={() => setActiveGenre(2)}>
                Marketing
            </Button>
            <Button primary onClick={() => setActiveGenre(3)}>
                Quản trị kinh doanh
            </Button>
            <Button primary onClick={() => setActiveGenre(4)}>
                Ngôn ngữ học
            </Button>
        </div>
    );
}

export default Filter;
