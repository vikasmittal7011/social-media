import React from "react";
import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";

function Form() {
  return (
    <div>
      <form>
        <Input
          title="Name of Place"
          id="name"
          type="text"
          name=""
          placeholder="Enter name of place"
          required={true}
        />
        <Input
          title="Address"
          id="address"
          type="text"
          name=""
          placeholder="Enter address of place"
          required={true}
        />
        <Input
          title="Description"
          id="description"
          type="text"
          name=""
          placeholder="Write something about it"
          required={true}
          textarea={true}
        />
        <Input title="Image" id="image" type="file" name="" required={true} />

        <Button name="Add Place" outline={true} type="primary" />
      </form>
    </div>
  );
}

export default Form;
