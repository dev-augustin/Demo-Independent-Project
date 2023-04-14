const confirmDelete = () => {
    const handleShow = () => {
      setShow(true);
    };

    const handleClose = () => {
      setShow(false);
      // navigate("/home");
    };

    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="">
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you you want to delete?</p>
        <Modal.Footer>
          <button variant="dark" type="submit" onClick={handleClose}>
            Submit
          </button>
          <Button variant="dark" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>;
  };
