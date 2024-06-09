import { Button, Flex } from "@mantine/core";
import { ReactInstance, RefObject, useRef } from "react";
import { Main } from "./components/Main/Main";
import {
  ExportComponentReturn,
  Params,
  exportComponentAsJPEG,
  exportComponentAsPNG,
} from "react-component-export-image";
import { IconDownload } from "@tabler/icons-react";

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

  return (
    <Flex direction="column" rowGap={16}>
      <Main ref={ref} />

      <Flex align={"center"} justify={"center"} columnGap={16}>
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
