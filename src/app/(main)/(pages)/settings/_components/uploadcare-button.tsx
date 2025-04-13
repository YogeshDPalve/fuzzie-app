"use client";
import React, { useEffect } from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
type Props = {
  onUpload?: any;
};

const UploadcareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  const { resolvedTheme } = useTheme();

  const handleUpload = async (e: any) => {
    const file = await onUpload(e.cdnUrl);
    if (file) {
      router.refresh();
    }
  };

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
        onFileUploadSuccess={(event) => handleUpload(event)}
      />
    </div>
  );
};

export default UploadcareButton;
