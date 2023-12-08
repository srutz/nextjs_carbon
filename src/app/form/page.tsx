"use client";

import {
    Button,
    Checkbox,
    FileUploader,
    Form,
    FormGroup,
    NumberInput,
    RadioButton,
    RadioButtonGroup,
    Search,
    Select,
    SelectItem,
    TextArea,
    TextInput,
} from "@carbon/react";

import classes from "./page.module.css";

/*

from:

https://react.carbondesignsystem.com/?path=/story/components-form--default
*/

export default function Page() {
    const checkboxEvents = {
        className: "some-class",
        labelText: "Checkbox label",
    };
    const fieldsetCheckboxProps = () => ({
        className: "some-class",
        legendText: "Checkbox heading",
    });
    const numberInputProps = {
        className: "some-class",
        id: "number-input-1",
        label: "Number Input",
        min: 0,
        max: 100,
        value: 50,
        step: 10,
        iconDescription: "Add/decrement number",
    };
    const fileUploaderEvents = {
        buttonLabel: "Add files",
        className: "some-class",
    };
    const fieldsetFileUploaderProps = {
        legendText: "File Uploader",
    };
    const TextInputProps = {
        id: "test2",
        labelText: "Text Input label",
        placeholder: "Placeholder text",
    };
    const textareaProps = {
        labelText: "Text Area label",
        placeholder: "Placeholder text",
        id: "test5",
        rows: 4,
    };

    return (
        <div className={classes.main}>
            <Form aria-label="sample form">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <FormGroup legendText="Formular Gruppe">
                        <Checkbox
                            defaultChecked
                            {...checkboxEvents}
                            id="checkbox-0"
                        />
                        <Checkbox {...checkboxEvents} id="checkbox-1" />
                        <Checkbox
                            disabled
                            {...checkboxEvents}
                            id="checkbox-2"
                        />
                    </FormGroup>

                    <NumberInput {...numberInputProps} />

                    <FormGroup {...fieldsetFileUploaderProps}>
                        <FileUploader
                            {...fileUploaderEvents}
                            id="file-1"
                            role="button"
                            labelDescription="Max file size is 500mb. Only .jpg files are supported."
                            buttonLabel="Add file"
                            buttonKind="primary"
                            size="md"
                            filenameStatus="edit"
                            accept={[".jpg", ".png"]}
                            multiple={true}
                            disabled={false}
                            iconDescription="Dismiss file"
                            name=""
                        />
                    </FormGroup>

                    <RadioButtonGroup
                        name="radio-button-group"
                        defaultSelected="default-selected"
                        legendText="Radio Button heading"
                    >
                        <RadioButton
                            value="standard"
                            id="radio-1"
                            labelText="Standard Radio Button"
                        />
                        <RadioButton
                            value="default-selected"
                            labelText="Default Selected Radio Button"
                            id="radio-2"
                        />
                        <RadioButton
                            value="blue"
                            labelText="Standard Radio Button"
                            id="radio-3"
                        />
                        <RadioButton
                            value="disabled"
                            labelText="Disabled Radio Button"
                            id="radio-4"
                            disabled
                        />
                    </RadioButtonGroup>

                    <Select id="select-1" defaultValue="placeholder-item">
                        <SelectItem
                            disabled
                            hidden
                            value="placeholder-item"
                            text="Choose an option"
                        />
                        <SelectItem value="option-1" text="Option 1" />
                        <SelectItem value="option-2" text="Option 2" />
                        <SelectItem value="option-3" text="Option 3" />
                    </Select>

                    <TextInput {...TextInputProps} />
                    <TextArea {...textareaProps} />

                    <Button type="submit" className="some-class">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
}
