import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";
import { FC } from "react";
import Dropzone from "react-dropzone";
import Container from "./Container";

const ImageUpload: FC = () => {
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
            <Container header="Upload cover image">
              <div className="px-10 pt-16 pb-6">
                <Dropzone>
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
            </Container>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ImageUpload;
