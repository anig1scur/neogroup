import React, {useState} from 'react';
import {createEditor} from 'slate';
// Import the Slate components and React plugin.
import {Slate, Editable, withReact} from 'slate-react'

function MyEditor () {
    const initValue = [];

    const [editor] = useState(() => withReact(createEditor()))
    const onClick = event => {
        // Implement custom event logic...

        // When no value is returned, Slate will execute its own event handler when
        // neither isDefaultPrevented nor isPropagationStopped was set on the event
    };

    console.log('qwopeiq')

    const onDrop = event => {
        // Implement custom event logic...

        // No matter the state of the event, treat it as being handled by returning
        // true here, Slate will skip its own event handler
        return true;
    };

    const onDragStart = event => {
        // Implement custom event logic...

        // No matter the status of the event, treat event as *not* being handled by
        // returning false, Slate will execute its own event handler afterward
        return false;
    };

    return (

        <Slate editor={editor} value={initValue}>
            <Editable />
        </Slate>
    )
}

export default MyEditor;