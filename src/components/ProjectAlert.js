import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import bigTuu from 'assets/images/big_tuu.jpg'

export default class ProjectAlert extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        return(
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader>ลุงตู่มาแล้ว!!!</ModalHeader>
                <ModalBody>
                    <img src={bigTuu} width="350" height="350" />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>หลบอย่างเร็ว</Button>
                </ModalFooter>
            </Modal>
        )
    }
}