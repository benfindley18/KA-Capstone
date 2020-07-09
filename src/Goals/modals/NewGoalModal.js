import React, { useState, Component } from "react";
import Modal from "react-modal";
import "./NewGoalModal.scss";

function NewGoalModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <>
            <div className='newGoal'>
                <button
                    onClick={() => setModalIsOpen(true)}
                    className="addGoal">
                    <span> Add Goal </span>
                </button>
            </div>

            <Modal
                className="modal"
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <div className="formDiv">
                    <form className="goalForm" id="goalForm">

                        <div className="newGoalName">
                            <label className="label" htmlFor="goalName">
                                Goal Name:
                            </label>
                            <br />
                            <input type="text" name="goalName" className="goalName input" />
                        </div>

                        <div className="newGoalAmount">
                            <label className="label" htmlFor="goalAmount">
                                Goal Amount:
                            </label>
                            <br />
                            <input
                                type="number"
                                name="goalAmount"
                                className="goalAmount input"
                                min="0.00"
                                step="0.01"
                            />
                        </div>

                        <div className='goalNotes'>
                            <label className="label" htmlFor="goalAmount">
                                Goal Notes:
                            </label>
                            <br />
                            <textarea
                                className='input2'
                                name="goalNotes"
                                form="goalForm"
                                placeholder='Enter notes here...'
                            ></textarea>
                        </div>
                    </form>

                    <div className="submitBtn">
                        <button className="saveGoal" type="submit" form="goalForm">
                            <span> Save Goal </span>
                        </button>
                    </div>
                </div>
            </Modal>

        </>
    );
}

export default NewGoalModal;