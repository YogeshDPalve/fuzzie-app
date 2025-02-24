"use client";
import React from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import { useTheme } from "next-themes";
import { uploadFile } from "@uploadcare/upload-client";
type Props = {
  onUpload?: any;
};

const UploadcareButton = ({ onUpload }: Props) => {
  const { resolvedTheme } = useTheme();

  return (
    <div>
      {" "}
      <FileUploaderRegular
        sourceList="local, camera, facebook, gdrive"
        cameraModes="photo, video"
        classNameUploader={
          resolvedTheme === "dark" ? "uc-dark uc-purple" : "uc-light uc-purple"
        }
        pubkey="1632966e247fec39762f"
        onFileUploadSuccess={(event) => {
          if (event.fullPath && onUpload) {
            console.log(event.fullPath);
            onUpload(event.fullPath); // Send the uploaded file URL
          }
        }}
      />
    </div>
  );
};

export default UploadcareButton;
