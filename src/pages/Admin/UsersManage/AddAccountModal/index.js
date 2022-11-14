import classNames from 'classnames/bind';
import { useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '~/components/Button';
import AddAccountForm from '../AddAccountForm';

import styles from './AddAccountModal.module.scss';

const cx = classNames.bind(styles);

function AddAccountModal({ show, onClose }) {
    const formRef = useRef();

    const handleSubmitForm = () => {
        console.log('subbmit:::::', formRef.current);
    };

    return (
        <>
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddAccountForm
                        onSubmitForm={handleSubmitForm}
                        ref={formRef}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        secondary
                        rounded
                        variant="secondary"
                        onClick={onClose}
                    >
                        Close
                    </Button>
                    <Button
                        primary
                        rounded
                        type="submit"
                        onClick={handleSubmitForm}
                    >
                        Add Account
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddAccountModal;
