import React, {useState} from 'react';
import styles from './TextEditor.module.css'; // обратите внимание на использование styles

function TextEditor() {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isUppercase, setIsUppercase] = useState(false);

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const toggleCase = () => {
    setIsUppercase(!isUppercase);
  };

  return (
    <>
      <div className={styles['buttons-row']}> {/* используем стили из модуля */}
        <button
          className={isBold ? styles.active : ''}
          onClick={toggleBold}
        >
          B
        </button>

        <button
          className={isItalic ? styles.active : ''}
          onClick={toggleItalic}
        >
          I
        </button>
        <button
          className={isUnderline ? styles.active : ''}
          onClick={toggleUnderline}
        >
          U
        </button>
        <button
          className={isUppercase ? styles.active : ''}
          onClick={toggleCase}
        >
          Tt
        </button>
      </div>

      <textarea
  className={styles.editor} 
  style={{
    fontWeight: isBold ? 'bold' : 'normal',
    fontStyle: isItalic ? 'italic' : 'normal',
    textDecoration: isUnderline ? 'underline' : 'none',
    textTransform: isUppercase ? 'uppercase' : 'none',
  }}
/>

    </>
  );
}

export default TextEditor;
