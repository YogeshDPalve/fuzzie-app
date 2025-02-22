"use client";
import React from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import { useTheme } from "next-themes";
type Props = {
  onUpload?: any;
};

const UploadcareButton = (props: Props) => {
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
      />
    </div>
  );
};

export default UploadcareButton;
