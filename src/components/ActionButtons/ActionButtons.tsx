import { removeBackground } from "@imgly/background-removal";
import { Button, Flex, Loader } from "@mantine/core";
import { IconCut, IconDownload } from "@tabler/icons-react";
import { useState } from "react";
import {
  exportComponentAsJPEG,
  exportComponentAsPNG,
} from "react-component-export-image";
import { useFormContext } from "../Main/Main";
import { notifications } from "@mantine/notifications";
import { cardId } from "../../appConstants";

enum EExtension {
  JPEG = "JPEG",
  PNG = "PNG",
}

const handleDownloadClick = (extension: EExtension) => {
  const card = document.querySelector(`#${cardId}`);

  if (!card) {
    notifications.show({
      message: `Карточка с id="${cardId}" не найдена (`,
    });
    return;
  }

  const ref = {
    current: card,
  };

  switch (extension) {
    case EExtension.JPEG: {
      exportComponentAsJPEG(ref);
      return;
    }

    case EExtension.PNG: {
      exportComponentAsPNG(ref);
      return;
    }
  }
};

export const ActionButtons = () => {
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

      {Object.values(EExtension).map((extension) => (
        <Button
          key={extension}
          variant="filled"
          color="green"
          onClick={() => handleDownloadClick(extension)}
        >
          <Flex align={"center"} justify={"center"} columnGap={16}>
            <IconDownload />
            <span>{extension}</span>
          </Flex>
        </Button>
      ))}
    </Flex>
  );
};
