import {useEffect, useRef, useState} from "react";
import {EditorState} from '@codemirror/state';
import {EditorView, keymap} from '@codemirror/view';
import {defaultKeymap, indentWithTab} from '@codemirror/commands';
import {basicSetup} from "codemirror";
import { oneDark } from '@codemirror/theme-one-dark';
import {markdown} from "@codemirror/lang-markdown";

/* eslint-disable-next-line */
export interface EditorProps {
}

export function Editor(props: EditorProps) {
  const editor = useRef();
  const [code, setCode] = useState("");

  const onUpdate = EditorView.updateListener.of((v) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setCode(v.state.doc.text.toString());
  });


  useEffect(() => {
    const startState = EditorState.create({
      extensions: [
        basicSetup, keymap.of(defaultKeymap),
        oneDark,
        markdown(),
        onUpdate
      ],
    });

    const view = new EditorView({state: startState, parent: editor.current});

    return () => {
      view.destroy();
    };

  }, [])


  return <div ref={editor}></div>;

}

export default Editor;
