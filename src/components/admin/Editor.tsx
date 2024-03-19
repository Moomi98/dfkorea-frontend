"use client";

import { useMemo, useRef, useState } from "react";
import { RangeStatic } from "quill";
import ReactQuill, { Quill, ReactQuillProps } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ImageResize } from "quill-image-resize-module-ts";

import dynamic from "next/dynamic";
import styled from "styled-components";

interface ForwardedQuillComponent extends ReactQuillProps {
  forwardedRef: React.Ref<ReactQuill>;
}

interface EditorProps {
  onChange: Function;
}

const QuillNoSSRWrapper = dynamic(
  async () => {
    const { default: QuillComponent } = await import("react-quill");
    const Quill = ({ forwardedRef, ...props }: ForwardedQuillComponent) => (
      <QuillComponent ref={forwardedRef} {...props} />
    );
    return Quill;
  },
  { loading: () => <div>...loading</div>, ssr: false }
);

Quill.register({ "modules/imageResize": ImageResize });

const QuillEditor = styled(QuillNoSSRWrapper)`
  width: 100%;
  // WORKAROUND
  // React-Quill 라이브러리의 높이 관련 css 오류로 인해 직접 계산한다.
  height: 80vh;
  .ql-container {
    height: calc(100% - 42px);

    display: flex;
    flex-direction: column;
  }

  .ql-editor {
    flex: 1;
    overflow-y: auto;
    width: 100%;
  }
`;

export default function Editor(props: EditorProps) {
  const [value, setValue] = useState("");
  const quillRef = useRef<ReactQuill>(null);

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "background",
    "color",
    "image",
    "width",
  ];

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["image"],
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
        ],
        handlers: {
          // image: (e: any) => {
          //   const editor = quillRef.current!.getEditor();
          //   const range = editor.getSelection(true);
          //   editor.setSelection((range.index + 1) as unknown as RangeStatic);
          // },
        },
      },
      imageResize: {
        parchment: Quill.import("parchment"),
        modules: ["Resize", "DisplaySize"],
      },
    }),
    []
  );

  const onValueChanged = (text: string) => {
    setValue(text);
    props.onChange && props.onChange(text);
  };

  return (
    <QuillEditor
      theme="snow"
      forwardedRef={quillRef}
      value={value}
      onChange={onValueChanged}
      modules={modules}
      formats={formats}
    />
  );
}
