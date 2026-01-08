"use client";

import { useState } from "react";
import Button from "./common/Button";
import Input from "./common/Input";
import Modal from "./common/Modal";
import Loader from "./common/Loader";
import Card from "./common/Card";
import Table from "./common/Table";

/*
  Playground
  - Used only to VISUALIZE components
  - Not production code
*/
export default function Playground() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="space-y-6">
      {/* Button */}
      <Card title="Button">
        <Button label="Primary Button" />
        <Button label="Secondary Button" variant="secondary" />
      </Card>

      {/* Input */}
      <Card title="Input">
        <Input
          label="Name"
          value={name}
          onChange={setName}
          placeholder="Enter name"
        />
      </Card>

      {/* Loader */}
      <Card title="Loader">
        <Loader />
      </Card>

      {/* Modal */}
      <Card title="Modal">
        <Button label="Open Modal" onClick={() => setOpen(true)} />
        <Modal open={open} onClose={() => setOpen(false)}>
          <p>This is reusable modal</p>
        </Modal>
      </Card>

      {/* Table */}
      <Card title="Table">
        <Table
          headers={["ID", "Name"]}
          rows={[
            { id: 1, name: "Rishika" },
            { id: 2, name: "Developer" },
          ]}
        />
      </Card>
    </div>
  );
}
