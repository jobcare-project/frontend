import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    FormControlLabel,
    IconButton,
    Typography,
} from '@material-ui/core';
import { CheckBox, CropOriginal, Subject } from '@material-ui/icons';
import MenuItem from '@material-ui/core';
import classNames from 'classnames/bind';
import styles from './UserForm.module.scss';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import React, { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function UserForm() {
    const [questions, setQuestions] = useState([
        {
            questionText: 'what your name ?',
            questionType: 'radio',
            option: [
                { optionText: '22' },
                { optionText: '12' },
                { optionText: '32' },
                { optionText: '42' },
            ],
            open: true,
            required: false,
        },
    ]);

    function changeQuestion(text, i) {
        var newQuestion = [...questions];
        newQuestion[i].questionText = text;
        setQuestions(newQuestion);
        console.log(newQuestion);
    }

    function changeOptionValue(text, i, j) {
        var optionsQuestion = [...questions];
        optionsQuestion[i].options[j].optionText = text;

        setQuestions(optionsQuestion);
    }

    function addQuestionType(i, type) {
        let qs = [...questions];
        console.log(type);
        qs[i].questionType = type;

        setQuestions(qs);
    }

    function removeOption(i, j) {
        var removeOptionQuestion = [...questions];
        if (removeOptionQuestion[i].options.lenght + 1) {
            removeOptionQuestion[i].options.splice(j, 1);
            setQuestions(removeOptionQuestion);
            console.log(i + '__' + j);
        }
    }

    function questionUI() {
        return questions.map((ques, i) => (
            <div>
                <Accordion
                    expanded={questions[i].open}
                    className={questions[i].open ? cx('add-border') : ' '}
                >
                    <AccordionSummary className={cx('wrapper-questionUI')}>
                        {!questions[i].open ? (
                            <div className={cx('saved-questions')}>
                                <Typography>
                                    {i + 1}. {questions[i].questionText}
                                </Typography>

                                {ques.options.map((op, j) => (
                                    <div key={j}>
                                        <div>
                                            <FormControlLabel
                                                disabled
                                                control={
                                                    <input
                                                        type={ques.questionType}
                                                        required={ques.type}
                                                    />
                                                }
                                                label={
                                                    <Typography>
                                                        {
                                                            ques.option[j]
                                                                .optionText
                                                        }
                                                    </Typography>
                                                }
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            ''
                        )}
                    </AccordionSummary>
                    <div className={cx('question_boxes')}>
                        <Accordion>
                            <AccordionDetails className={cx('add-question')}>
                                <div className={cx('add-question-top')}>
                                    <input
                                        className={cx('question')}
                                        placeholder="Question"
                                    ></input>
                                    <CloseButton
                                        className={cx('close-button')}
                                    />
                                </div>
                                <div className={cx('add-option')}>
                                    <input
                                        className={cx('option')}
                                        placeholder="option"
                                    ></input>
                                    <CloseButton
                                        className={cx('close-button')}
                                    />
                                </div>
                                <div className={cx('add-option')}>
                                    <input
                                        className={cx('option')}
                                        placeholder="option"
                                    ></input>
                                    <CloseButton
                                        className={cx('close-button')}
                                    />
                                </div>
                                <div className={cx('add-option')}>
                                    <input
                                        className={cx('option')}
                                        placeholder="option"
                                    ></input>
                                    <CloseButton
                                        className={cx('close-button')}
                                    />
                                </div>
                                <div className={cx('add-option')}>
                                    <input
                                        className={cx('option')}
                                        placeholder="option"
                                    ></input>
                                    <CloseButton
                                        className={cx('close-button')}
                                    />
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Accordion>
            </div>
        ));
    }

    return <div></div>;
}

export default UserForm;
