import { Button, Flex, Loader } from "@mantine/core";
import { ReactInstance, RefObject, useRef, useState } from "react";
import { Main } from "./components/Main/Main";
import {
  ExportComponentReturn,
  Params,
  exportComponentAsJPEG,
  exportComponentAsPNG,
} from "react-component-export-image";
import { IconDownload, IconCut } from "@tabler/icons-react";
import { useFormContext } from "../Main/Main";
import { removeBackground } from "@imgly/background-removal";
import { notifications } from "@mantine/notifications";

const downloadFunctionByExtension: Record<
  string,
  (
    node: RefObject<ReactInstance>,
    params?: Params | undefined
  ) => ExportComponentReturn
> = {
  JPEG: exportComponentAsJPEG,
  PNG: exportComponentAsPNG,
};

export const Card = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { values, setFieldValue } = useFormContext();

  const [isImageBackgroundCutInProgress, setImageBackgroundCutInProgress] =
    useState<boolean>(false);

  const handleImageBackgroundCutClick = () => {
    setImageBackgroundCutInProgress(true);

    removeBackground(values.imageSrc!)
      .then(
        (blob: Blob) => {
          const src = URL.createObjectURL(blob);
          setFieldValue("imageSrc", src);
        },
        (error) => {
          notifications.show({
            title: "Не удалось обрезать фон картинки :(",
            message: JSON.stringify(error),
          });
        }
      )
      .finally(() => setImageBackgroundCutInProgress(false));
  };

  return (
    <Flex direction="column" rowGap={16}>
      <Main ref={ref} />

      <Flex align={"center"} justify={"center"} columnGap={16}>
        <Button
          variant="filled"
          color="green"
          disabled={
            isImageBackgroundCutInProgress || values.imageSrc === undefined
          }
          onClick={handleImageBackgroundCutClick}
        >
          <Flex align={"center"} justify={"center"} columnGap={16}>
            {isImageBackgroundCutInProgress ? (
              <Loader size="xs" />
            ) : (
              <>
                <IconCut />
                <span>Обрезать фон картинки</span>
              </>
            )}
          </Flex>
        </Button>

        {Object.entries(downloadFunctionByExtension).map(
          ([extension, downloadFunction]) => (
            <Button
              key={extension}
              variant="filled"
              color="green"
              onClick={() => downloadFunction(ref)}
            >
              <Flex align={"center"} justify={"center"} columnGap={16}>
                <IconDownload />
                <span>{extension}</span>
              </Flex>
            </Button>
          )
        )}
      </Flex>
    </Flex>
  );
};
