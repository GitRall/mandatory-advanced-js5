import React, { useRef } from 'react';
import styles from './UploadFile.module.css';
const UploadFile = (props) => {
  const fileInputRef = useRef(null)

  function OnCancelClick(e){
    e.preventDefault(e);
    props.closeClick();
  }
  function onUploadSubmit(e){
    e.preventDefault();
    console.log()
    props.uploadFileRequest(fileInputRef.current.files);
  }

  return (
    <div className={styles['overlay-uploadfile']}>
      <div className={styles['overlay-uploadfile__container']}>
        <i className={`material-icons ${styles['overlay-uploadfile__close-btn']}`} onClick={props.closeClick}>close</i>
        <div className={styles['overlay-uploadfile__header-wrapper']}>
          <i className={`material-icons ${styles['overlay-uploadfile__header-icon']}`}>insert_drive_file</i>
          <h4 className={styles['overlay-uploadfile__header-text']}>Upload File</h4>
        </div>
        <form className={styles['overlay-uploadfile__form']} onSubmit={onUploadSubmit}>
          <input className={styles['overlay-uploadfile__upload-input']} type='file' ref={fileInputRef}></input>
          <div className={styles['overlay-uploadfile__btn-wrapper']}>
            <button className={styles['overlay-uploadfile__cancel-btn']} onClick={OnCancelClick}>Cancel</button>
            <button className={styles['overlay-uploadfile__submit-btn']} type='submit'>Upload</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UploadFile;