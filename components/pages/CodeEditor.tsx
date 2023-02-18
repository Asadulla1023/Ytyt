import React, { useEffect, useRef, useState } from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";

import styles from "../../styles/editor.module.css";

export interface Ace {
  dataState: any;
  data: any;
  value: any;
}

const CodeEditor: React.FC<Ace> = ({ dataState, data, value }: Ace) => {
  const [output, setOutput] = useState<any>()
  return (
    <div className={styles.codeWrapper}>
      <AceEditor
        style={{ width: "100%", height: 150, borderRadius: 5 }}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          fontFamily: "monospace",
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          fontSize: "12pt",
        }}
        defaultValue={value}
        mode="javascript"
        theme="one_dark"
        onChange={dataState}
      />
      <button
        onClick={() => {
          try {
            Function(data ? data : value)();
          } catch (err) {
           console.log(err); 
          }         
        }}
        type="submit"
      >
        Run
      </button>
      <p>{output}</p>
    </div>
  );
};

export default CodeEditor;
