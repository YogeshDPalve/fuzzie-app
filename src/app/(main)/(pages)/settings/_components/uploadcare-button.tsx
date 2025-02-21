"use client";
import React from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
type Props = {
  onUpload?: any;
};

const UploadcareButton = (props: Props) => {
  return (
    <div>
      {" "}
      <FileUploaderRegular
        sourceList="local, camera, facebook, gdrive"
        cameraModes="photo, video"
        classNameUploader="uc-purple"
        pubkey="1632966e247fec39762f"
      />
    </div>
  );
};

export default UploadcareButton;
