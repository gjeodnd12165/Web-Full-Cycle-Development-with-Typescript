import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap";
import { Todo } from "./TodoList";

interface Props {
  todo: Todo
}

const DetailModal: React.FC<Props> = ({ todo }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  // These handle functions should be here.
  // No need to lift state up.
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        자세히
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{todo.text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{todo.detail ?? "상세 정보가 없습니다"}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DetailModal;