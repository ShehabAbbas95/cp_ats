import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";
import { FC, useState } from "react";
import Dropzone from "react-dropzone";

const ImageUpload: FC = () => {
  const [onDrag, setOnDrag] = useState(false);
  const [onError, setOnError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const removeFile = () => {
    setOnDrag(false);
    setOnError(null);
  };
  const handelRejectedFile = () => {
    setOnError("Dieses Dateiformat wird nicht unterstützt");
    setOnDrag(false);
    setLoading(false);
  };

  const handleCancelFile = () => {
    removeFile();
  };

  return (
    <main>
      <section className="flex justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="p-5  md:border-transparent md:border-gray-300 md:p-10 "
        >
          <div className="flex flex-col gap-6">
            <div className="max-w-lg  bg-white border border-gray-200 rounded-2xl shadow  ">
              <h2 className="bg-[#D0F7FA]  w-full text-left  min-h-[80px] py-6 pl-8 rounded-t-2xl text-2xl font-Poppins font-semibold">
                Upload cover image
              </h2>
              <div className="px-10 py-16">
                <Dropzone
                  onDrop={() => setLoading(true)}
                  onDropRejected={() => handelRejectedFile()}
                  accept={{
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                      [".csv"],
                    "application/vnd.ms-excel": [".csv"],
                  }}
                  onDragOver={() => setOnDrag(true)}
                  onDragLeave={() => setOnDrag(false)}
                  onFileDialogCancel={handleCancelFile}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input
                        type="file"
                        data-testid="file-input"
                        {...getInputProps()}
                      />

                      <label
                        id="label-file-upload"
                        htmlFor="input-file-upload"
                        className=" flex cursor-pointer flex-col items-center rounded border-2 border-dashed p-10 text-center border-black"
                      >
                        <p className=" pb-4 font-bold text-red-500">
                          {onError ?? onError}
                        </p>
                        <div className="">
                          <ArrowUpTrayIcon width="30" height="30" />
                        </div>
                        <p className=" font-Poppins font-semibold">
                          Upload cover image
                        </p>
                        <span className="font-medium text-[#979797] font-Poppins text-sm ">
                          16:9 ratio is recommended. Max image size 1mb
                        </span>
                      </label>
                    </div>
                  )}
                </Dropzone>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ImageUpload;
