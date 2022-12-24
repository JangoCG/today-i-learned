import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { basicSetup } from 'codemirror';
// import {oneDark} from '@codemirror/theme-one-dark';
import { markdown } from '@codemirror/lang-markdown';
import styles from './editor.module.scss';

/* eslint-disable-next-li!1ne */
export interface EditorProps {
  setMarkdown: Dispatch<SetStateAction<string[]>>;
}

export function Editor({ setMarkdown }: EditorProps) {
  const editor = useRef();

  const onUpdate = EditorView.updateListener.of((v) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line no-debugger
    console.log('doc', v.state.doc);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setMarkdown(v.state.doc.text as string[]);
  });

  useEffect(() => {
    const startState = EditorState.create({
      extensions: [
        basicSetup,
        keymap.of(defaultKeymap),
        // oneDark,
        markdown(),
        onUpdate,
        EditorView.lineWrapping,
      ],
    });

    const view = new EditorView({ state: startState, parent: editor.current });

    return () => {
      view.destroy();
    };
  }, []);

  return <div className={styles.container} ref={editor}></div>;
}

export default Editor;
