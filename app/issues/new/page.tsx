'use client';

import { Button, TextArea, TextField } from '@radix-ui/themes';
// import mardown editor
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const NewIssuePage = () => {
  return (
    <div className="max-w-lg space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      {/* <TextArea placeholder="Description" /> */}
      <SimpleMDE placeholder="Description" />
      <Button>Submit</Button>
    </div>
  );
};

export default NewIssuePage;
